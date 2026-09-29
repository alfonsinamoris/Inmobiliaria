import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Páginas públicas
import Contacto from './pages/publica/Contacto';
import DetallePropiedad from './pages/publica/DetallePropiedad';
import Home from './pages/publica/Home';
import SobreNosotros from './pages/publica/Nosotros';
import Propiedades from './pages/publica/Propiedades';

// Páginas admin
import Dashboard from './pages/admin/Dashboard';
import FormularioPropiedad from './pages/admin/FormularioPropiedad';
import Login from './pages/admin/Login';

// Componente que protege rutas admin
function RutaProtegida({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function AppRoutes() {
    return (
        <Routes>
            {/* Públicas */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/propiedades" element={<Propiedades />} />
            <Route path="/propiedades/:id" element={<DetallePropiedad />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<SobreNosotros />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />

            {/* Admin — protegidas */}
            <Route path="/admin/dashboard" element={<RutaProtegida><Dashboard /></RutaProtegida>} />
            <Route path="/admin/nuevo" element={<RutaProtegida><FormularioPropiedad /></RutaProtegida>} />
            <Route path="/admin/editar/:id" element={<RutaProtegida><FormularioPropiedad /></RutaProtegida>} />

            {/* Cualquier ruta inexistente → home */}
            <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    );
}