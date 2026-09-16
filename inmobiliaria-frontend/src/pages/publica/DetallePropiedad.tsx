import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getPropiedad } from '../../api/Propiedades';
import type { Propiedad } from '../../types';

export default function DetallePropiedad() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [propiedad, setPropiedad] = useState<Propiedad | null>(null);
    const [loading, setLoading] = useState(true);
    const [fotoActiva, setFotoActiva] = useState(0);

    useEffect(() => {
        if (!id) return;
        getPropiedad(Number(id))
            .then(setPropiedad)
            .catch(() => navigate('/propiedades'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-[#f4f7f6]">
                <Navbar />
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                    Cargando propiedad...
                </div>
                <Footer />
            </div>
        );
    }

    if (!propiedad) return null;

    const fotos = propiedad.fotos ?? [];

    return (
        <div className="flex flex-col min-h-screen bg-[#f4f7f6]">
            <Navbar />

            <div className="container mx-auto px-4 py-10 max-w-5xl flex-1">

                {/* Breadcrumb */}
                <Link to="/propiedades" className="text-gray-400 text-sm hover:text-[#2c3e50] transition-all mb-6 inline-block">
                    ← Volver a propiedades
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">

                    {/* Galería de fotos */}
                    <div>
                        <div className="rounded-xl overflow-hidden bg-gray-200 h-72 lg:h-96 mb-3">
                            {fotos.length > 0 ? (
                                <img
                                    src={fotos[fotoActiva].url}
                                    alt={propiedad.titulo}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                    Sin fotos disponibles
                                </div>
                            )}
                        </div>

                        {/* Miniaturas */}
                        {fotos.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {fotos.map((foto, i) => (
                                    <button
                                        key={foto.id}
                                        onClick={() => setFotoActiva(i)}
                                        className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                            fotoActiva === i ? 'border-[#2c3e50]' : 'border-transparent opacity-60 hover:opacity-100'
                                        }`}>
                                        <img src={foto.url} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex flex-col gap-5">

                        {/* Título y tipo */}
                        <div>
                            <div className="flex items-start justify-between gap-3 mb-2">
                                <h1 className="text-2xl font-bold text-[#2c3e50] leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
                                    {propiedad.titulo}
                                </h1>
                                <span className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full ${
                                    propiedad.tipo === 'Alquiler' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                }`}>
                  {propiedad.tipo}
                </span>
                            </div>
                            <p className="text-gray-400 text-sm">📍 {propiedad.ubicacion || 'Sin ubicación'}</p>
                        </div>

                        {/* Precio */}
                        <div className="bg-white rounded-xl p-5 shadow-sm" style={{ borderLeft: '4px solid #2c3e50' }}>
                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Precio</p>
                            <p className="text-3xl font-bold text-[#2c3e50]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                                $ {propiedad.precio?.toLocaleString('es-AR')}
                            </p>
                            {propiedad.tipo === 'Alquiler' && propiedad.indiceActualizacion && (
                                <p className="text-xs text-gray-400 mt-1">
                                    Actualización por índice {propiedad.indiceActualizacion}
                                </p>
                            )}
                        </div>

                        {/* Descripción */}
                        {propiedad.descripcion && (
                            <div className="bg-white rounded-xl p-5 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Descripción</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{propiedad.descripcion}</p>
                            </div>
                        )}

                        {/* Datos del contrato si es alquiler */}
                        {propiedad.tipo === 'Alquiler' && propiedad.fechaInicioContrato && (
                            <div className="bg-white rounded-xl p-5 shadow-sm">
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Contrato</p>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Inicio de contrato</span>
                                    <span className="text-[#2c3e50] font-medium">
                    {new Date(propiedad.fechaInicioContrato).toLocaleDateString('es-AR')}
                  </span>
                                </div>
                            </div>
                        )}

                        {/* Botón de contacto */}
                        <Link to="/contacto"
                              className="w-full bg-[#2c3e50] text-white font-semibold py-3 rounded-xl text-center hover:bg-[#1a252f] transition-all text-sm">
                            Consultar por esta propiedad
                        </Link>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}