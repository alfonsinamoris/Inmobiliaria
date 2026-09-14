import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getPropiedad, crearPropiedad, actualizarPropiedad } from '../../api/Propiedades';
import { useAuth } from '../../context/AuthContext';
import type { PropiedadForm } from '../../types';
import GaleriaFotos from '../../components/GaleriaFotos';

const FORM_INICIAL: PropiedadForm = {
    titulo: '',
    descripcion: '',
    precio: '',
    tipo: '',
    ubicacion: '',
    indiceActualizacion: '',
    fechaInicioContrato: '',
};

export default function FormularioPropiedad() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { logout } = useAuth();
    const esEdicion = !!id;

    const [form, setForm] = useState<PropiedadForm>(FORM_INICIAL);
    const [fotosIniciales, setFotosIniciales] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (esEdicion) {
            getPropiedad(Number(id)).then(p => {
                setForm({
                    titulo: p.titulo,
                    descripcion: p.descripcion,
                    precio: p.precio,
                    tipo: p.tipo,
                    ubicacion: p.ubicacion,
                    indiceActualizacion: p.indiceActualizacion || '',
                    fechaInicioContrato: p.fechaInicioContrato || '',
                });
                setFotosIniciales(p.fotos ?? []);
            });
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            if (esEdicion) {
                await actualizarPropiedad(Number(id), form);
            } else {
                await crearPropiedad(form);
            }
            navigate('/admin/dashboard');
        } catch (err: any) {
            const detalles = err.response?.data?.detalles;
            setError(detalles ? detalles.join(', ') : 'Ocurrió un error al guardar');
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10";
    const labelClass = "text-xs font-medium text-gray-500 mb-1 block";
    const sectionLabel = "text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100";

    return (
        <div className="min-h-screen bg-[#f4f7f6]">

            {/* Header */}
            <div className="text-white py-6" style={{ background: 'linear-gradient(135deg, #2c3e50, #495057)' }}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            {esEdicion ? 'Editar Propiedad' : 'Nueva Propiedad'}
                        </h1>
                        <p className="text-white/70 text-sm mt-0.5">Panel de Administración · Inmobiliaria Lucrecia Moreno</p>
                    </div>
                    <button onClick={logout} className="text-white/70 text-sm hover:text-white transition-all">
                        Cerrar sesión
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-2xl mx-auto">

                    {/* Breadcrumb */}
                    <Link to="/admin/dashboard" className="text-gray-500 text-sm hover:text-[#2c3e50] transition-all mb-6 inline-block">
                        ← Volver al panel
                    </Link>

                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {/* Información básica */}
                            <div>
                                <p className={sectionLabel}>Información básica</p>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <label className={labelClass}>Título de la propiedad</label>
                                        <input name="titulo" value={form.titulo} onChange={handleChange}
                                               placeholder="Ej: Casa 3 ambientes en el centro" required className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Descripción</label>
                                        <textarea name="descripcion" value={form.descripcion} onChange={handleChange}
                                                  placeholder="Describí las características principales..." rows={3}
                                                  className={inputClass + ' resize-none'} />
                                    </div>
                                </div>
                            </div>

                            {/* Ubicación y tipo */}
                            <div>
                                <p className={sectionLabel}>Ubicación y operación</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelClass}>Ubicación</label>
                                        <input name="ubicacion" value={form.ubicacion} onChange={handleChange}
                                               placeholder="Ej: San Martín 226, Tandil" required className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Tipo de operación</label>
                                        <select name="tipo" value={form.tipo} onChange={handleChange} required className={inputClass}>
                                            <option value="">Seleccionar...</option>
                                            <option value="Alquiler">Alquiler</option>
                                            <option value="Venta">Venta</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Precio */}
                            <div>
                                <p className={sectionLabel}>Precio</p>
                                <div className="w-1/2">
                                    <label className={labelClass}>Precio ($)</label>
                                    <input name="precio" type="number" value={form.precio} onChange={handleChange}
                                           placeholder="0" min="0" step="0.01" required className={inputClass} />
                                </div>
                            </div>

                            {/* Actualización — solo si tipo = Alquiler */}
                            {form.tipo === 'Alquiler' && (
                                <div>
                                    <p className={sectionLabel}>Actualización de alquiler</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className={labelClass}>Índice de actualización</label>
                                            <select name="indiceActualizacion" value={form.indiceActualizacion} onChange={handleChange} className={inputClass}>
                                                <option value="">Seleccionar...</option>
                                                <option value="IPC">IPC</option>
                                                <option value="ICL">ICL</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className={labelClass}>Fecha inicio contrato</label>
                                            <input name="fechaInicioContrato" type="date" value={form.fechaInicioContrato}
                                                   onChange={handleChange} className={inputClass} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Fotos — solo disponible al editar una propiedad existente */}
                            {esEdicion && (
                                <div>
                                    <p className={sectionLabel}>Fotos de la propiedad</p>
                                    <GaleriaFotos propiedadId={Number(id)} fotosIniciales={fotosIniciales} />
                                </div>
                            )}

                            {!esEdicion && (
                                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
                                    <p className="text-blue-600 text-xs">
                                        💡 Guardá la propiedad primero y luego podrás agregar fotos desde "Modificar".
                                    </p>
                                </div>
                            )}

                            {/* Error */}
                            {error && (
                                <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                                    {error}
                                </p>
                            )}

                            {/* Botones */}
                            <div className="flex items-center gap-3 pt-2">
                                <button type="submit" disabled={loading}
                                        className="bg-[#2c3e50] text-white font-semibold px-7 py-3 rounded-lg hover:bg-[#1a252f] transition-all text-sm disabled:opacity-60">
                                    {loading ? 'Guardando...' : esEdicion ? 'Guardar cambios' : 'Guardar propiedad'}
                                </button>
                                <Link to="/admin/dashboard" className="text-gray-400 text-sm px-5 py-3 rounded-lg hover:bg-gray-100 transition-all">
                                    Cancelar
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}