import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#0b1120] text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                {/* Estructura balanceada: items-center para alinear verticalmente el logo con el contenido de las otras columnas */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12 items-center">

                    {/* Columna 1: Logo Institucional agrandado y centrado verticalmente */}
                    <div className="md:col-span-5 flex flex-col items-start pr-0 md:pr-4">
                        <Link to="/home" className="inline-block group">
                            <img
                                src="/img/logoInmo.png"
                                alt="Inmobiliaria Lucrecia Moreno"
                                className="h-32 sm:h-36 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                            />
                        </Link>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div className="md:col-span-3 flex flex-col justify-center">
                        <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                            Enlaces Rápidos
                        </p>
                        <ul className="space-y-2.5 text-xs text-slate-400 font-light">
                            <li>
                                <Link to="/home" className="hover:text-[#c5a059] transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/propiedades?tipo=Venta" className="hover:text-[#c5a059] transition-colors">
                                    Propiedades en Venta
                                </Link>
                            </li>
                            <li>
                                <Link to="/propiedades?tipo=Alquiler" className="hover:text-[#c5a059] transition-colors">
                                    Alquileres Disponibles
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="hover:text-[#c5a059] transition-colors">
                                    Tasaciones 
                                </Link>
                            </li>
                            
                        </ul>
                    </div>

                    {/* Columna 3: Contacto Directo */}
                    <div className="md:col-span-4 flex flex-col justify-center">
                        <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                            Contacto Directo
                        </p>
                        <div className="space-y-3.5 text-xs text-slate-300">
                            <div className="flex items-start gap-2.5">
                                <span className="text-sm shrink-0 text-[#c5a059]">📍</span>
                                <div>
                                    <p className="font-normal text-white">San Martín 226</p>
                                    <p className="text-slate-400 text-[11px]">Tandil, Prov. de Buenos Aires</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-sm shrink-0 text-[#c5a059]">✉️</span>
                                <a
                                    href="mailto:lucreciamorenoinmobiliaria@gmail.com"
                                    className="hover:text-[#c5a059] transition-colors break-all"
                                >
                                    lucreciamorenoinmobiliaria@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <span className="text-sm shrink-0 text-[#c5a059]">📞</span>
                                <a
                                    href="tel:+542494607249"
                                    className="hover:text-[#c5a059] transition-colors font-medium text-white"
                                >
                                    +54 (249) 460-7249
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5 pt-0.5 text-slate-400 text-[11px]">
                                <span className="text-xs">🕒</span>
                                <span>Lun a Vie: 9:00 - 18:00 hs</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sub-footer con créditos y términos */}
                <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs text-center sm:text-left">
                    <p>© 2026 Inmobiliaria Lucrecia Moreno. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link to="/contacto" className="hover:text-slate-400 transition-colors">Términos y Condiciones</Link>
                        <Link to="/contacto" className="hover:text-slate-400 transition-colors">Política de Privacidad</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
