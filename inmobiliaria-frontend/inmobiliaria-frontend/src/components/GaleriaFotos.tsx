import { useState } from 'react';
import { agregarFoto, eliminarFoto } from '../api/Propiedades';
import type { Foto } from '../types';

const CLOUD_NAME = 'dljrdvcir';
const UPLOAD_PRESET = 'ubdkqnvf';

interface Props {
    propiedadId: number;
    fotosIniciales: Foto[];
}

export default function GaleriaFotos({ propiedadId, fotosIniciales }: Props) {
    const [fotos, setFotos] = useState<Foto[]>(fotosIniciales);
    const [subiendo, setSubiendo] = useState(false);
    const [error, setError] = useState('');

    const handleSubir = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const archivos = e.target.files;
        if (!archivos || archivos.length === 0) return;

        setSubiendo(true);
        setError('');

        try {
            for (const archivo of Array.from(archivos)) {
                // 1. Subir a Cloudinary
                const formData = new FormData();
                formData.append('file', archivo);
                formData.append('upload_preset', UPLOAD_PRESET);

                const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
                    method: 'POST',
                    body: formData,
                });

                if (!res.ok) throw new Error('Error al subir imagen a Cloudinary');
                const data = await res.json();

                // 2. Guardar la URL en nuestra API
                const nuevaFoto = await agregarFoto(propiedadId, data.secure_url, fotos.length);
                setFotos(prev => [...prev, nuevaFoto]);
            }
        } catch (err) {
            setError('No se pudo subir una o más imágenes. Intentá de nuevo.');
            console.error(err);
        } finally {
            setSubiendo(false);
            e.target.value = ''; // limpia el input para poder subir el mismo archivo de nuevo
        }
    };

    const handleEliminar = async (fotoId: number) => {
        if (!confirm('¿Eliminar esta foto?')) return;
        await eliminarFoto(propiedadId, fotoId);
        setFotos(prev => prev.filter(f => f.id !== fotoId));
    };

    return (
        <div>
            {/* Grid de fotos */}
            {fotos.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-4">
                    {fotos.map((foto, i) => (
                        <div key={foto.id} className="relative group rounded-lg overflow-hidden h-28 bg-gray-100">
                            <img src={foto.url} alt="" className="w-full h-full object-cover" />

                            {/* Badge foto principal */}
                            {i === 0 && (
                                <span className="absolute top-1.5 left-1.5 bg-[#2c3e50] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Principal
                </span>
                            )}

                            {/* Botón eliminar — aparece al hacer hover */}
                            <button
                                onClick={() => handleEliminar(foto.id)}
                                className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600">
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Zona de subida */}
            <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-all ${
                subiendo ? 'border-gray-200 bg-gray-50' : 'border-gray-200 hover:border-[#495057] hover:bg-gray-50'
            }`}>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleSubir}
                    disabled={subiendo}
                    className="hidden"
                />
                {subiendo ? (
                    <p className="text-gray-400 text-sm">Subiendo fotos...</p>
                ) : (
                    <>
                        <span className="text-2xl mb-2">📷</span>
                        <p className="text-sm text-gray-500 font-medium">Hacé clic para subir fotos</p>
                        <p className="text-xs text-gray-400 mt-1">Podés seleccionar varias a la vez</p>
                    </>
                )}
            </label>

            {error && (
                <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2 mt-3">
                    {error}
                </p>
            )}
        </div>
    );
}