import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await login(username, password);
            navigate('/admin/dashboard');
        } catch {
            setError('Usuario o contraseña incorrectos');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f7f6]">
            <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-sm">

                {/* Logo */}
                <div className="text-center mb-8">
                    <img src="/img/logosolo.png" alt="Logo" className="h-16 w-auto mx-auto mb-4" />
                    <h1 className="text-xl font-bold uppercase tracking-widest text-[#2c3e50]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                        Panel Admin
                    </h1>
                    <p className="text-gray-400 text-xs mt-1">Inmobiliaria Lucrecia Moreno</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-medium text-gray-500 mb-1 block">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="admin"
                            required
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-gray-500 mb-1 block">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                            {error}
                        </p>
                    )}

                    <button type="submit" disabled={loading}
                            className="w-full bg-[#2c3e50] text-white font-semibold py-3 rounded-lg hover:bg-[#1a252f] transition-all text-sm disabled:opacity-60 mt-2">
                        {loading ? 'Ingresando...' : 'Ingresar'}
                    </button>
                </form>

            </div>
        </div>
    );
}