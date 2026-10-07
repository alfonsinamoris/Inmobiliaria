import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPropiedades } from '../../api/Propiedades';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import type { Propiedad } from '../../types';

export default function Home() {
    const [destacadas, setDestacadas] = useState<Propiedad[]>([]);

    useEffect(() => {
        getPropiedades({ destacada: true })
            .then(setDestacadas)
            .catch(console.error);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#c5a059] selection:text-white">
            <Navbar />

            {/* HERO SECTION */}
            <section
                className="relative min-h-[80vh] flex items-center justify-center text-center text-white px-4 py-28 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.85) 100%), url('/img/home.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15] mb-6 font-serif">
                        INMOBILIARIA 
                        <span className="block italic font-light text-[#e6ca91]">LUCRECIA MORENO</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-200 font-light max-w-2xl mb-10 leading-relaxed">
                         Cada propiedad tiene una historia y cada decisión inmobiliaria merece ser acompañada con visión y profesionalismo.
                    </p>

                    {/* Acciones principales */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/propiedades"
                            className="bg-[#c5a059] hover:bg-[#b38e47] text-slate-950 font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#c5a059]/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm tracking-wide"
                        >
                            EXPLORAR PROPIEDADES
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                            </svg>
                        </Link>
                        <Link
                            to="/contacto"
                            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-medium px-7 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 text-sm"
                        >
                            <svg className="w-4 h-4 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                            CONTACTAR ASESOR
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECCIÓN SERVICIOS */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs uppercase tracking-widest text-[#946e27] font-semibold block mb-2">Servicios Inmobiliarios</span>
                        <h2 className="text-3xl font-serif text-[#0f172a] mb-4">NUESTROS SERVICIOS</h2>
                        <div className="w-12 h-0.5 bg-[#c5a059] mx-auto mb-4"></div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Acompañamos cada etapa de tu búsqueda e inversión inmobiliaria en Tandil con claridad, seguridad jurídica y calidez humana.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-[#946e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                    </svg>
                                ),
                                titulo: 'ALQUILERES',
                                desc: 'Encontrá tu próximo hogar entre nuestras propiedades seleccionadas para alquiler en Tandil con contratos transparentes.',
                                linkText: 'Ver disponibles',
                                href: '/propiedades?tipo=Alquiler'
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-[#946e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                                    </svg>
                                ),
                                titulo: 'VENTAS',
                                desc: 'Asesoramiento profesional para la compra y venta de propiedades con toda la documentación en orden y gestión integral de cada operación.',
                                linkText: 'Publicar propiedad',
                                href: '/contacto'
                            },
                            {
                                icon: (
                                    <svg className="w-6 h-6 text-[#946e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                ),
                                titulo: 'TASACIONES',
                                desc: 'Valuación profesional de tu inmueble con criterios actualizados del mercado inmobiliario local para defender el valor real de tu patrimonio.',
                                linkText: 'Solicitar tasación',
                                href: '/contacto'
                            },
                        ].map((s) => (
                            <div
                                key={s.titulo}
                                className="bg-[#f8fafc] rounded-2xl p-8 border border-slate-200/80 hover:border-[#c5a059]/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-lg font-serif tracking-wide text-[#0f172a] mb-3 font-semibold">
                                        {s.titulo}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                                        {s.desc}
                                    </p>
                                </div>
                                <Link
                                    to={s.href}
                                    className="text-xs uppercase tracking-wider font-semibold text-[#0f172a] hover:text-[#946e27] inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-slate-200/60"
                                >
                                    {s.linkText}
                                    <span className="text-sm">→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN PROPIEDADES DESTACADAS */}
            {destacadas.length > 0 && (
                <section className="py-24 bg-[#f8fafc]">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="text-xs uppercase tracking-widest text-[#946e27] font-semibold block mb-2">Cartera Seleccionada</span>
                            <h2 className="text-3xl font-serif text-[#0f172a] mb-4">PROPIEDADES DESTACADAS</h2>
                            <div className="w-12 h-0.5 bg-[#c5a059] mx-auto mb-4"></div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                Una selección de nuestras mejores oportunidades en Tandil y zona.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destacadas.map((p) => (
                                <div
                                    key={p.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-slate-300 transition-all duration-300 flex flex-col group"
                                >
                                    {/* Imagen */}
                                    <div className="h-56 bg-slate-100 overflow-hidden relative">
                                        {p.fotos && p.fotos.length > 0 ? (
                                            <img
                                                src={p.fotos[0].url}
                                                alt={p.titulo}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-sm gap-2">
                                                <svg className="w-8 h-8 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                </svg>
                                                <span>Sin fotos disponibles</span>
                                            </div>
                                        )}

                                        {/* Badges superiores */}
                                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                                            <span className="bg-[#0f172a]/90 backdrop-blur-sm text-[#e6ca91] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                                                <span>★</span> Destacada
                                            </span>
                                            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider ${
                                                p.tipo === 'Alquiler'
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-emerald-600 text-white'
                                            }`}>
                                                {p.tipo}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Contenido Card */}
                                    <div className="p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <p className="text-xs text-slate-400 font-medium flex items-center gap-1 mb-2">
                                                <svg className="w-3.5 h-3.5 text-[#946e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                </svg>
                                                {p.ubicacion || 'Tandil, Buenos Aires'}
                                            </p>
                                            <h3 className="font-serif font-semibold text-[#0f172a] text-lg leading-snug mb-2 group-hover:text-[#946e27] transition-colors">
                                                {p.titulo}
                                            </h3>
                                            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                                                {p.descripcion}
                                            </p>
                                        </div>

                                        {/* Barra de Precio y CTA */}
                                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                            <div>
                                                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Valor</span>
                                                <span className="font-serif font-bold text-[#0f172a] text-xl">
                                                    $ {p.precio?.toLocaleString('es-AR')}
                                                </span>
                                            </div>
                                            <Link
                                                to={`/propiedades/${p.id}`}
                                                className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 shadow-sm"
                                            >
                                                Ver ficha
                                                <span className="text-xs">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Botón Ver Todas */}
                        <div className="text-center mt-14">
                            <Link
                                to="/propiedades"
                                className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0f172a] bg-white text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-xl transition-all shadow-sm"
                            >
                                Ver todas las propiedades
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            

            {/* CTA CONTACTO */}
            <section
                className="py-20 text-white text-center relative bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.92)), url('/img/propiedades2.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto px-4 max-w-3xl">
                    <span className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-3">Atención Personalizada</span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-4">
                        ¿Tenés una consulta o querés tasar tu inmueble?
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
                        Coordiná una reunión en nuestras oficinas de San Martín 226 o contactanos vía WhatsApp para recibir atención exclusiva.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contacto"
                            className="bg-[#c5a059] hover:bg-[#b38e47] text-slate-950 font-semibold px-9 py-3.5 rounded-xl shadow-lg shadow-[#c5a059]/20 transition-all transform hover:-translate-y-0.5 inline-block text-xs uppercase tracking-wider"
                        >
                            Contactanos ahora
                        </Link>
                        <a
                            href="https://wa.me/542494607249"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-7 py-3.5 rounded-xl shadow-sm transition-all inline-flex items-center gap-2 text-xs uppercase tracking-wider"
                        >
                            Consultar por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
