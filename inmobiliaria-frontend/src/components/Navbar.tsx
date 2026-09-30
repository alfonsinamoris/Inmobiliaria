import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [menuAbierto, setMenuAbierto] = useState(false);

    const isActive = (path: string) =>
        location.pathname === path
            ? 'text-[#c5a059] font-medium border-b-2 border-[#c5a059]'
            : 'text-slate-300 hover:text-white transition-colors';

    const isActiveMobile = (path: string) =>
        location.pathname === path
            ? 'text-[#c5a059] font-medium border-l-2 border-[#c5a059] pl-3'
            : 'text-slate-300 hover:text-white transition-colors pl-3';

    const links = [
        { to: '/home', label: 'Inicio' },
        { to: '/propiedades', label: 'Propiedades' },
        { to: '/nosotros', label: 'Nosotros' },
        { to: '/contacto', label: 'Contacto' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 transition-all">
            <div className="container mx-auto px-4 lg:px-8 h-24 flex justify-between items-center">

                {/* Logo */}
                <Link to="/home" className="flex items-center gap-3 group py-2">
                    <img
                        src="/img/logosolo.png"
                        alt="Inmobiliaria Lucrecia Moreno"
                        className="h-16 md:h-18 max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow"
                    />
                </Link>

                {/* Links desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map(l => (
                        <Link key={l.to} to={l.to}
                            className={`text-xs uppercase tracking-widest py-2 ${isActive(l.to)}`}>
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Botón hamburguesa — solo mobile */}
                <button
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    aria-label="Abrir menú">
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuAbierto ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Menú mobile desplegable */}
            {menuAbierto && (
                <div className="md:hidden bg-[#0f172a] border-t border-white/10 px-6 py-5 flex flex-col gap-5">
                    {links.map(l => (
                        <Link key={l.to} to={l.to}
                            onClick={() => setMenuAbierto(false)}
                            className={`text-xs uppercase tracking-widest ${isActiveMobile(l.to)}`}>
                            {l.label}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}