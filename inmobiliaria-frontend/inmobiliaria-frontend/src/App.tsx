import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Páginas públicas
import Home from './pages/publica/Home';
import Propiedades from './pages/publica/Propiedades';
import DetallePropiedad from './pages/publica/DetallePropiedad';
import Contacto from './pages/publica/Contacto';

// Páginas admin
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import FormularioPropiedad from './pages/admin/FormularioPropiedad';

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