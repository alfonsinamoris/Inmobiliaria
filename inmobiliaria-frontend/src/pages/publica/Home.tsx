import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getPropiedades } from '../../api/Propiedades';
import type { Propiedad } from '../../types';

export default function Home() {
    const [destacadas, setDestacadas] = useState<Propiedad[]>([]);

    useEffect(() => {
        getPropiedades({ destacada: true })
            .then(setDestacadas)
            .catch(console.error);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero */}
            <section
                className="relative flex items-center justify-center text-center text-white py-32"
                style={{
                    background: 'linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1350&q=80) center/cover',
                }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold uppercase tracking-widest mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Inmobiliaria Lucrecia Moreno
                    </h1>
                    <p className="text-lg font-light opacity-90 mb-8">
                        Tu inmobiliaria de confianza en Tandil.<br />Alquiler y venta de propiedades.
                    </p>
                    <Link to="/propiedades"
                          className="bg-white text-[#2c3e50] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 inline-block">
                        Ver propiedades
                    </Link>
                </div>
            </section>

            {/* Servicios */}
            <section className="py-20 bg-[#f4f7f6]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-[#2c3e50] mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            Nuestros Servicios
                        </h2>
                        <p className="text-gray-500 text-sm">Acompañamos cada etapa de tu búsqueda inmobiliaria</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: '🏠', titulo: 'Alquileres', desc: 'Encontrá tu próximo hogar entre nuestras propiedades disponibles para alquiler en Tandil y zona.' },
                            { icon: '🔑', titulo: 'Ventas', desc: 'Asesoramiento profesional para la compra y venta de propiedades con toda la documentación en orden.' },
                            { icon: '📋', titulo: 'Tasaciones', desc: 'Valuación profesional de tu propiedad con criterios actuales del mercado inmobiliario local.' },
                        ].map((s) => (
                            <div key={s.titulo}
                                 className="bg-white rounded-xl p-8 text-center shadow-sm border-t-4 hover:-translate-y-1 hover:shadow-lg transition-all"
                                 style={{ borderTopColor: '#2c3e50' }}>
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                    {s.icon}
                                </div>
                                <h3 className="font-bold uppercase tracking-wide text-[#2c3e50] mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                                    {s.titulo}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Propiedades Destacadas */}
            {destacadas.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#2c3e50] mb-2"
                                style={{ fontFamily: 'Oswald, sans-serif' }}>
                                Propiedades Destacadas
                            </h2>
                            <p className="text-gray-500 text-sm">Una selección de nuestras mejores propiedades</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {destacadas.map((p) => (
                                <div key={p.id}
                                     className="bg-[#f4f7f6] rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">

                                    {/* Foto */}
                                    <div className="h-48 bg-gray-200 overflow-hidden relative">
                                        {p.fotos && p.fotos.length > 0 ? (
                                            <img src={p.fotos[0].url} alt={p.titulo}
                                                 className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                                Sin fotos
                                            </div>
                                        )}
                                        {/* Badge destacada */}
                                        <span className="absolute top-3 left-3 bg-[#2c3e50] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                                            ⭐ Destacada
                                        </span>
                                    </div>

                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-[#2c3e50] text-base leading-tight"
                                                style={{ fontFamily: 'Oswald, sans-serif' }}>
                                                {p.titulo}
                                            </h3>
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ml-2 shrink-0 ${
                                                p.tipo === 'Alquiler' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                            }`}>
                                                {p.tipo}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-xs mb-3">📍 {p.ubicacion || 'Sin ubicación'}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.descripcion}</p>
                                    </div>

                                    <div className="px-5 py-4 border-t border-gray-200 flex justify-between items-center">
                                        <span className="font-bold text-[#2c3e50] text-lg"
                                              style={{ fontFamily: 'Oswald, sans-serif' }}>
                                            $ {p.precio?.toLocaleString('es-AR')}
                                        </span>
                                        <Link to={`/propiedades/${p.id}`}
                                              className="bg-[#2c3e50] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#1a252f] transition-all">
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <Link to="/propiedades"
                                  className="border-2 border-[#2c3e50] text-[#2c3e50] font-semibold px-8 py-3 rounded-lg hover:bg-[#2c3e50] hover:text-white transition-all inline-block">
                                Ver todas las propiedades
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20 text-white text-center" style={{ background: 'linear-gradient(135deg, #2c3e50, #495057)' }}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold uppercase tracking-wide mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        ¿Tenés una consulta?
                    </h2>
                    <p className="opacity-75 mb-8">Escribinos y te respondemos a la brevedad</p>
                    <Link to="/contacto"
                          className="bg-white text-[#2c3e50] font-semibold px-10 py-3 rounded-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 inline-block">
                        Contactanos
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}