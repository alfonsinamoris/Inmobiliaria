import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPropiedad } from '../../api/Propiedades';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
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
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased">
                <Navbar />
                <div className="flex-1 flex flex-col items-center justify-center py-32 text-slate-400 gap-3">
                    <div className="w-8 h-8 border-2 border-[#c5a059] border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs uppercase tracking-wider font-medium">Cargando detalles de la propiedad...</span>
                </div>
                <Footer />
            </div>
        );
    }

    if (!propiedad) return null;

    const fotos = propiedad.fotos ?? [];

    const mensajeWhatsApp = encodeURIComponent(
        `¡Hola! Estoy interesado/a en la propiedad: "${propiedad.titulo}" (ID: ${propiedad.id}) ubicada en ${propiedad.ubicacion || 'Tandil'}. ¿Podrían brindarme más información?`
    );

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#c5a059] selection:text-white">
            <Navbar />

            {/* BARRA SUPERIOR DE NAVEGACIÓN Y BREADCRUMB */}
            <div className="bg-white border-b border-slate-200/80 py-4">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl flex flex-wrap items-center justify-between gap-3 text-xs">
                    <nav className="flex items-center gap-2 text-slate-500 font-light">
                        <Link to="/home" className="hover:text-[#946e27] transition-colors">Inicio</Link>
                        <span>/</span>
                        <Link to="/propiedades" className="hover:text-[#946e27] transition-colors">Propiedades</Link>
                        <span>/</span>
                        <span className="text-slate-800 font-medium truncate max-w-xs">{propiedad.titulo}</span>
                    </nav>

                    <Link
                        to="/propiedades"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0f172a] transition-colors"
                    >
                        <span>←</span> Volver al catálogo
                    </Link>
                </div>
            </div>

            {/* CONTENEDOR PRINCIPAL */}
            <div className="container mx-auto px-4 lg:px-8 py-10 max-w-6xl flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-10 items-start">

                    {/* COLUMNA IZQUIERDA: GALERÍA Y DETALLES */}
                    <div className="space-y-8">
                        {/* Visualizador Principal de Fotos */}
                        <div className="bg-white rounded-3xl p-3.5 shadow-sm border border-slate-200/80">
                            <div className="rounded-2xl overflow-hidden bg-slate-100 h-80 sm:h-[440px] relative group">
                                {fotos.length > 0 ? (
                                    <img
                                        src={fotos[fotoActiva]?.url}
                                        alt={propiedad.titulo}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-sm gap-2">
                                        <svg className="w-10 h-10 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                        <span>Sin fotografías disponibles</span>
                                    </div>
                                )}

                                {/* Badges Flotantes sobre la foto */}
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                                    <span className="bg-[#0f172a]/90 backdrop-blur-md text-[#e6ca91] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                                        {propiedad.categoria || 'Inmueble Residencial'}
                                    </span>
                                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider ${
                                        propiedad.tipo === 'Alquiler' ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'
                                    }`}>
                                        {propiedad.tipo}
                                    </span>
                                </div>

                                {fotos.length > 1 && (
                                    <div className="absolute bottom-4 right-4 bg-[#0f172a]/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none">
                                        {fotoActiva + 1} / {fotos.length}
                                    </div>
                                )}
                            </div>

                            {/* Tira de Miniaturas */}
                            {fotos.length > 1 && (
                                <div className="flex gap-2.5 overflow-x-auto pt-3.5 pb-1 px-1">
                                    {fotos.map((foto, i) => (
                                        <button
                                            key={foto.id || i}
                                            onClick={() => setFotoActiva(i)}
                                            className={`shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all relative ${
                                                fotoActiva === i
                                                    ? 'border-[#c5a059] shadow-md ring-2 ring-[#c5a059]/20'
                                                    : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300'
                                            }`}
                                        >
                                            <img src={foto.url} alt="" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Descripción y Especificaciones */}
                        <div className="bg-white rounded-3xl p-8 sm:p-9 shadow-sm border border-slate-200/80">
                            <span className="text-[11px] uppercase tracking-widest text-[#946e27] font-semibold block mb-2">
                                Características y Memoria Descriptiva
                            </span>
                            <h2 className="text-2xl font-serif text-[#0f172a] mb-5 font-normal">
                                Acerca de esta propiedad
                            </h2>

                            <div className="w-12 h-0.5 bg-[#c5a059] mb-6"></div>

                            {propiedad.descripcion ? (
                                <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line font-normal">
                                    {propiedad.descripcion}
                                </p>
                            ) : (
                                <p className="text-slate-400 text-sm italic">
                                    No se ha ingresado una descripción detallada para este inmueble.
                                </p>
                            )}

                            {/* Información adicional de Alquiler / Contrato */}
                            {propiedad.tipo === 'Alquiler' && (propiedad.fechaInicioContrato || propiedad.indiceActualizacion) && (
                                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {propiedad.fechaInicioContrato && (
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                                                Disponibilidad / Contrato
                                            </span>
                                            <p className="text-sm font-medium text-[#0f172a]">
                                                Desde {new Date(propiedad.fechaInicioContrato).toLocaleDateString('es-AR')}
                                            </p>
                                        </div>
                                    )}
                                    {propiedad.indiceActualizacion && (
                                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                                                Criterio de Ajuste
                                            </span>
                                            <p className="text-sm font-medium text-[#0f172a]">
                                                Índice {propiedad.indiceActualizacion}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: VALOR, UBICACIÓN Y TARJETA DE CONTACTO */}
                    <div className="space-y-6 lg:sticky lg:top-28">

                        {/* Tarjeta de Título, Ubicación y Precio */}
                        <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-slate-200/80">
                            <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mb-2.5">
                                <svg className="w-4 h-4 text-[#946e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                {propiedad.ubicacion || 'Tandil, Buenos Aires'}
                            </p>

                            <h1 className="text-2xl sm:text-3xl font-serif text-[#0f172a] font-normal leading-snug mb-5">
                                {propiedad.titulo}
                            </h1>

                            {/* Tarjeta de Precio con protección de quiebre (whitespace-nowrap) y tipografía escalable */}
                            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6">
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block mb-1.5">
                                    Valor de Publicación
                                </span>
                                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                    <span className="font-serif font-bold text-[#0f172a] text-2xl sm:text-3xl xl:text-4xl tracking-tight whitespace-nowrap">
                                        $&nbsp;{propiedad.precio?.toLocaleString('es-AR')}
                                    </span>
                                    {propiedad.tipo === 'Alquiler' && (
                                        <span className="text-xs sm:text-sm text-slate-500 font-light whitespace-nowrap">
                                            / mes
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Botones de acción directa */}
                            <div className="space-y-3">
                                <a
                                    href={`https://wa.me/542494607249?text=${mensajeWhatsApp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider py-4 px-5 rounded-xl transition-all shadow-sm hover:shadow-md"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.83.819 2.796.82h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.773-5.773zm7.545 5.766c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.53-.342-3.605-.939l-4.426 1.16 1.182-4.316c-.689-1.127-1.077-2.45-1.077-3.85 0-4.16 3.385-7.545 7.545-7.545 4.16 0 7.546 3.385 7.546 7.545z"/>
                                    </svg>
                                    Consultar por WhatsApp
                                </a>

                                <Link
                                    to="/contacto"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium text-xs uppercase tracking-wider py-4 px-5 rounded-xl transition-all shadow-sm"
                                >
                                    <svg className="w-4 h-4 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    Enviar Mensaje o Coordinar Visita
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
