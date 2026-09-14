import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path ? 'text-white' : 'text-white/70 hover:text-white hover:bg-white/10';

    return (
        <nav className="sticky top-0 z-50 h-[70px] flex items-center" style={{ backgroundColor: '#2c3e50' }}>
            <div className="container mx-auto px-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/home">
                    <img src="/img/logosolo.png" alt="Inmobiliaria Lucrecia Moreno" className="h-[110px] w-auto" />
                </Link>

                {/* Links */}
                <div className="flex items-center gap-1">
                    <Link to="/home"
                          className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all ${isActive('/home')}`}>
                        Inicio
                    </Link>
                    <Link to="/propiedades"
                          className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all ${isActive('/propiedades')}`}>
                        Propiedades
                    </Link>
                    <Link to="/contacto"
                          className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all ${isActive('/contacto')}`}>
                        Contacto
                    </Link>

                    {isAuthenticated ? (
                        <>
                            <Link to="/admin/dashboard"
                                  className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white/85 bg-white/12 border border-white/20 hover:bg-white/20 transition-all">
                                Admin
                            </Link>
                            <button onClick={logout}
                                    className="ml-1 px-3 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all">
                                Salir
                            </button>
                        </>
                    ) : (
                        <Link to="/login"
                              className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-white/85 bg-white/12 border border-white/20 hover:bg-white/20 transition-all">
                            Admin
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}