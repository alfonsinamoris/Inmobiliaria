

import { createContext, useContext, useState, type ReactNode } from 'react';
import { login as loginApi } from '../api/Propiedades';

interface AuthContextType {
    token: string | null;
    username: string | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [username, setUsername] = useState<string | null>(localStorage.getItem('username'));

    const login = async (username: string, password: string) => {
        const data = await loginApi(username, password);
        setToken(data.token);
        setUsername(data.username);
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
    };

    const logout = () => {
        setToken(null);
        setUsername(null);
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    };

    return (
        <AuthContext.Provider value={{
            token,
            username,
            isAuthenticated: !!token,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para usar el contexto fácilmente en cualquier componente
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
    return context;
}