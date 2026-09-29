import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path
            ? 'text-[#c5a059] font-medium border-b-2 border-[#c5a059]'
            : 'text-slate-300 hover:text-white transition-colors';

    return (
        <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 transition-all">
            <div className="container mx-auto px-4 lg:px-8 h-24 flex justify-between items-center">
                {/* Logo oficial agrandado con mayor presencia */}
                <Link to="/home" className="flex items-center gap-3 group py-2">
                    <img 
                        src="/img/logosolo.png" 
                        alt="Inmobiliaria Lucrecia Moreno" 
                        className="h-16 md:h-18 max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow" 
                    />
                </Link>

                {/* Navegación Principal */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        to="/home"
                        className={`text-xs uppercase tracking-widest py-2 ${isActive('/home')}`}
                    >
                        Inicio
                    </Link>
                    <Link
                        to="/propiedades"
                        className={`text-xs uppercase tracking-widest py-2 ${isActive('/propiedades')}`}
                    >
                        Propiedades
                    </Link>
                    <Link 
                        to="/nosotros" 
                        className={`text-xs uppercase tracking-widest py-2 ${isActive('/nosotros')}`}
                        >
                        Nosotros
                    </Link>
                    <Link
                        to="/contacto"
                        className={`text-xs uppercase tracking-widest py-2 ${isActive('/contacto')}`}
                    >
                        Contacto
                    </Link>
                </nav>

                
            </div>
        </header>
    );
}
