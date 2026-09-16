import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getPropiedades, eliminarPropiedad } from '../../api/propiedades';
import type { Propiedad } from '../../types';

export default function Dashboard() {
    const { username, logout } = useAuth();
    const navigate = useNavigate();
    const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
    const [loading, setLoading] = useState(true);

    const cargar = async () => {
        setLoading(true);
        try {
            const data = await getPropiedades();
            setPropiedades(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { cargar(); }, []);

    const handleEliminar = async (id: number) => {
        if (!confirm('¿Seguro que querés eliminar esta propiedad?')) return;
        await eliminarPropiedad(id);
        cargar();
    };

    const alquileres = propiedades.filter(p => p.tipo?.toLowerCase() === 'alquiler').length;
    const ventas = propiedades.filter(p => p.tipo?.toLowerCase() === 'venta').length;

    return (
        <div className="min-h-screen bg-[#f4f7f6]">

            {/* Header */}
            <div className="text-white py-6" style={{ background: 'linear-gradient(135deg, #2c3e50, #495057)' }}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            Panel de Administración
                        </h1>
                        <p className="text-white/70 text-sm mt-0.5">Inmobiliaria Lucrecia Moreno · {username}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/home" className="text-white/70 text-sm hover:text-white transition-all">Ver sitio →</Link>
                        <button onClick={logout} className="text-white/70 text-sm hover:text-white transition-all">Cerrar sesión</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {[
                        { num: propiedades.length, label: 'Total de propiedades', color: '#495057' },
                        { num: alquileres, label: 'En alquiler', color: '#0d6efd' },
                        { num: ventas, label: 'En venta', color: '#198754' },
                    ].map((s) => (
                        <div key={s.label} className="bg-white rounded-xl p-5 shadow-sm" style={{ borderLeft: `4px solid ${s.color}` }}>
                            <p className="text-3xl font-bold text-gray-800">{s.num}</p>
                            <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Tabla */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
                        <h2 className="font-bold uppercase tracking-wide text-[#2c3e50] text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>
                            Propiedades cargadas
                        </h2>
                        <Link to="/admin/nuevo"
                              className="bg-[#2c3e50] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a252f] transition-all">
                            + Agregar propiedad
                        </Link>
                    </div>

                    {loading ? (
                        <div className="text-center py-16 text-gray-400 text-sm">Cargando...</div>
                    ) : propiedades.length === 0 ? (
                        <div className="text-center py-16 text-gray-400">
                            <p className="text-sm mb-3">No hay propiedades cargadas todavía.</p>
                            <Link to="/admin/nuevo" className="text-[#2c3e50] underline text-sm">Agregar la primera</Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                <tr className="bg-gray-50 text-left">
                                    {['#', 'Título', 'Ubicación', 'Tipo', 'Precio', 'Acciones'].map(h => (
                                        <th key={h} className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {propiedades.map((p) => (
                                    <tr key={p.id} className="border-t border-gray-50 hover:bg-gray-50/50 transition-all">
                                        <td className="px-4 py-4 text-gray-400 text-sm">{p.id}</td>
                                        <td className="px-4 py-4">
                                            <p className="font-medium text-[#2c3e50] text-sm">{p.titulo}</p>
                                            <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{p.descripcion}</p>
                                        </td>
                                        <td className="px-4 py-4 text-gray-500 text-sm">{p.ubicacion || '—'}</td>
                                        <td className="px-4 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.tipo === 'Alquiler' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                          {p.tipo || '—'}
                        </span>
                                        </td>
                                        <td className="px-4 py-4 font-semibold text-[#2c3e50] text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>
                                            {p.precio ? `$ ${p.precio.toLocaleString('es-AR')}` : '—'}
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex gap-2">
                                                <button onClick={() => navigate(`/admin/editar/${p.id}`)}
                                                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all">
                                                    Modificar
                                                </button>
                                                <button onClick={() => handleEliminar(p.id)}
                                                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-all">
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}