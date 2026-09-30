import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#0b1120] text-slate-300 pt-16 pb-8 border-t border-slate-800 font-sans antialiased">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                
                {/* CUERPO PRINCIPAL DEL FOOTER: 4 COLUMNAS ALINEADAS ARRIBA */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 items-start">

                    {/* Columna 1: Logo Oficial (4 cols en desktop) */}
                    <div className="lg:col-span-4 flex flex-col items-start pt-1">
                        <Link to="/home" className="inline-block group">
                            <img
                                src="/img/logoInmo.png"
                                alt="Inmobiliaria Lucrecia Moreno"
                                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow"
                            />
                        </Link>
                    </div>

                    {/* Columna 2: Navegación & Catálogo (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col space-y-3.5">
                        <p className="text-white text-xs font-semibold uppercase tracking-widest border-l-2 border-[#c5a059] pl-2.5 h-4 flex items-center">
                            Navegación & Catálogo
                        </p>
                        <ul className="space-y-2 text-xs text-slate-400 font-light pt-0.5">
                            <li>
                                <Link to="/home" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                                    <span className="text-[10px] text-slate-600">›</span> Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/propiedades?tipo=Venta" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                                    <span className="text-[10px] text-slate-600">›</span> Propiedades en Venta
                                </Link>
                            </li>
                            <li>
                                <Link to="/propiedades?tipo=Alquiler" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                                    <span className="text-[10px] text-slate-600">›</span> Alquileres 
                                </Link>
                            </li>
                            <li>
                                <Link to="/nosotros" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                                    <span className="text-[10px] text-slate-600">›</span> Sobre Nosotros 
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="hover:text-[#c5a059] transition-colors flex items-center gap-1.5">
                                    <span className="text-[10px] text-slate-600">›</span> Tasaciones 
                                </Link>
                            </li>
                            
                        </ul>
                    </div>

                    {/* Columna 3: Estudio Central & Atención (2 cols) */}
                    <div className="lg:col-span-2 flex flex-col space-y-3.5">
                        <p className="text-white text-xs font-semibold uppercase tracking-widest border-l-2 border-[#c5a059] pl-2.5 h-4 flex items-center">
                            Estudio Central
                        </p>
                        <div className="space-y-3 text-xs text-slate-300 font-light pt-0.5">
                            <div className="flex items-start gap-2.5">
                                <span className="text-[#c5a059] text-sm shrink-0 mt-0.5">📍</span>
                                <div>
                                    <p className="text-white font-normal text-xs">San Martín 226</p>
                                    <p className="text-slate-400 text-[11px]">Tandil, Prov. de Buenos Aires</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="text-[#c5a059] text-sm shrink-0 mt-0.5">🕒</span>
                                <div>
                                    <p className="text-white font-normal text-xs">Lun a Vie</p>
                                    <p className="text-slate-400 text-[11px]">9:00 - 18:00 hs</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5">
                                <span className="text-[#c5a059] text-sm shrink-0 mt-0.5">✉️</span>
                                <a
                                    href="mailto:lucreciamorenoinmobiliaria@gmail.com"
                                    className="hover:text-[#c5a059] transition-colors break-all text-[11px]"
                                >
                                    contacto@lucreciamoreno.com.ar
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: Canal Directo & WhatsApp Box (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col space-y-3.5">
                        <p className="text-white text-xs font-semibold uppercase tracking-widest border-l-2 border-[#c5a059] pl-2.5 h-4 flex items-center">
                            Canal Directo
                        </p>
                        
                        <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg shrink-0">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.83.819 2.796.82h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.773-5.773zm7.545 5.766c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.53-.342-3.605-.939l-4.426 1.16 1.182-4.316c-.689-1.127-1.077-2.45-1.077-3.85 0-4.16 3.385-7.545 7.545-7.545 4.16 0 7.546 3.385 7.546 7.545z"/>
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                                        Atención Instantánea
                                    </span>
                                    <a
                                        href="tel:+542494607249"
                                        className="text-white hover:text-[#c5a059] font-medium text-xs transition-colors"
                                    >
                                        +54 (249) 460-7249
                                    </a>
                                </div>
                            </div>

                            <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                                Coordiná una visita o recibí asesoramiento sobre herencias, sucesiones o venta de tu inmueble.
                            </p>

                            <a
                                href="https://wa.me/542494607249"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all shadow-sm"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.83.819 2.796.82h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.773-5.773zm7.545 5.766c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.53-.342-3.605-.939l-4.426 1.16 1.182-4.316c-.689-1.127-1.077-2.45-1.077-3.85 0-4.16 3.385-7.545 7.545-7.545 4.16 0 7.546 3.385 7.546 7.545z"/>
                                </svg>
                                Abrir WhatsApp
                            </a>
                        </div>
                    </div>

                </div>

                {/* SUB-FOOTER CON CRÉDITOS Y TÉRMINOS */}
                <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs text-center sm:text-left">
                    <div className="flex items-center gap-1.5">
                        <p>© 2026 Inmobiliaria Lucrecia Moreno. Todos los derechos reservados.</p>
                        <Link to="/login" className="opacity-30 hover:opacity-100 transition-opacity outline-none" title="Acceso Intranet">
                            <svg 
                                width="10" 
                                height="10" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/contacto" className="hover:text-slate-400 transition-colors">Términos y Condiciones</Link>
                        <Link to="/contacto" className="hover:text-slate-400 transition-colors">Política de Privacidad</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
