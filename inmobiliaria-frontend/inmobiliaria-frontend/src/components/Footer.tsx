export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#2c3e50' }} className="text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between gap-8 mb-8">

                    {/* Logo y descripción */}
                    <div className="flex flex-col">
                        <img src="/img/logoInmo.png" alt="Logo" className="h-[90px] w-auto mb-3"/>
                        <p className="text-white/45 text-sm max-w-[200px] leading-relaxed">
                            Tu inmobiliaria de confianza en Tandil desde hace años.
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col">
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Contacto</p>
                        <p className="text-white/75 text-sm mb-2">📍 San Martín 226, Tandil</p>
                        <p className="text-white/75 text-sm mb-2">✉️ lucreciamorenoinmobiliaria@gmail.com</p>
                        <p className="text-white/75 text-sm mb-2">📞 +54 249 4607249</p>
                    </div>

                    {/* Redes */}
                    <div className="flex flex-col">
                        <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Seguinos</p>
                        <div className="flex gap-3 items-center">
                            <a href="https://www.instagram.com/lucrecia_moreno_inmobiliaria/"
                               target="_blank" rel="noreferrer"
                               className="hover:opacity-75 transition-opacity">
                                <img src="/img/instagram.png" alt="Instagram" className="h-8 w-8 object-contain"/>
                            </a>
                            <a href="#"
                               target="_blank" rel="noreferrer"
                               className="hover:opacity-75 transition-opacity">
                                <img src="/img/facebook.png" alt="Facebook" className="h-8 w-8 object-contain"/>
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="border-white/10 mb-5"/>
                <p className="text-white/40 text-xs text-center">
                    © 2025 Inmobiliaria Lucrecia Moreno · Tandil, Buenos Aires
                </p>
            </div>
        </footer>
    );
}