import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPropiedades } from '../../api/Propiedades';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import type { FiltrosPropiedades, Propiedad } from '../../types';

const CATEGORIAS = ['Casa', 'Departamento', 'Terreno', 'Duplex', 'Local'];

export default function Propiedades() {
    const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
    const [loading, setLoading] = useState(true);
    const [filtros, setFiltros] = useState<FiltrosPropiedades>({});

    // Inputs del formulario
    const [ubicacionInput, setUbicacionInput] = useState('');
    const [tipoInput, setTipoInput] = useState('');
    const [categoriaInput, setCategoriaInput] = useState('');
    const [precioMinInput, setPrecioMinInput] = useState('');
    const [precioMaxInput, setPrecioMaxInput] = useState('');

    const cargar = async (f?: FiltrosPropiedades) => {
        setLoading(true);
        try {
            const data = await getPropiedades(f);
            setPropiedades(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { cargar(); }, []);

    const buscar = (e: React.FormEvent) => {
        e.preventDefault();
        const f: FiltrosPropiedades = {};
        if (tipoInput) f.tipo = tipoInput;
        if (categoriaInput) f.categoria = categoriaInput;
        if (ubicacionInput) f.ubicacion = ubicacionInput;
        if (precioMinInput) f.precioMin = Number(precioMinInput);
        if (precioMaxInput) f.precioMax = Number(precioMaxInput);
        setFiltros(f);
        cargar(f);
    };

    const limpiar = () => {
        setUbicacionInput('');
        setTipoInput('');
        setCategoriaInput('');
        setPrecioMinInput('');
        setPrecioMaxInput('');
        setFiltros({});
        cargar();
    };

    const hayFiltros = Object.keys(filtros).length > 0;

    const selectClass = "border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10 w-full";
    const inputClass = "border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10 w-full";
    const labelClass = "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block";

    return (
        <div className="flex flex-col min-h-screen bg-[#f4f7f6]">
            <Navbar />

            {/* Header */}
            <div className="text-white text-center py-16 relative"
                 style={{
                     background: 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1350&q=80) center/cover',
                 }}>
                <h1 className="text-4xl font-bold uppercase tracking-widest mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Propiedades
                </h1>
                <p className="opacity-80 text-sm">Encontrá tu próxima propiedad en Tandil y zona</p>
            </div>

            {/* Buscador */}
            <div className="container mx-auto px-4 -mt-8 relative z-10 mb-12">
                <form onSubmit={buscar} className="bg-white rounded-xl shadow-lg px-7 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">

                        {/* Ubicación */}
                        <div className="lg:col-span-2">
                            <label className={labelClass}>¿Dónde buscás?</label>
                            <input
                                type="text"
                                value={ubicacionInput}
                                onChange={e => setUbicacionInput(e.target.value)}
                                placeholder="Ej: Tandil, centro..."
                                className={inputClass}
                            />
                        </div>

                        {/* Operación */}
                        <div>
                            <label className={labelClass}>Operación</label>
                            <select value={tipoInput} onChange={e => setTipoInput(e.target.value)} className={selectClass}>
                                <option value="">Todas</option>
                                <option value="Alquiler">Alquiler</option>
                                <option value="Venta">Venta</option>
                            </select>
                        </div>

                        {/* Categoría */}
                        <div>
                            <label className={labelClass}>Tipo de propiedad</label>
                            <select value={categoriaInput} onChange={e => setCategoriaInput(e.target.value)} className={selectClass}>
                                <option value="">Todas</option>
                                {CATEGORIAS.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        {/* Rango de precio */}
                        <div>
                            <label className={labelClass}>Rango de precio ($)</label>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="number"
                                    value={precioMinInput}
                                    onChange={e => setPrecioMinInput(e.target.value)}
                                    placeholder="Mín"
                                    min="0"
                                    className={inputClass}
                                />
                                <span className="text-gray-300 text-sm shrink-0">—</span>
                                <input
                                    type="number"
                                    value={precioMaxInput}
                                    onChange={e => setPrecioMaxInput(e.target.value)}
                                    placeholder="Máx"
                                    min="0"
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex items-center gap-3">
                        <button type="submit"
                                className="bg-[#2c3e50] text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-[#1a252f] transition-all text-sm">
                            Buscar
                        </button>
                        {hayFiltros && (
                            <button type="button" onClick={limpiar}
                                    className="text-gray-500 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-all text-sm">
                                Limpiar filtros
                            </button>
                        )}
                        {hayFiltros && (
                            <p className="text-gray-400 text-xs ml-auto">
                                {propiedades.length} resultado{propiedades.length !== 1 ? 's' : ''}
                            </p>
                        )}
                    </div>
                </form>
            </div>

            {/* Grilla */}
            <div className="container mx-auto px-4 pb-16">
                {loading ? (
                    <div className="text-center py-20 text-gray-400">Cargando propiedades...</div>
                ) : propiedades.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-lg">No hay propiedades que coincidan con tu búsqueda.</p>
                        <button onClick={limpiar} className="mt-4 text-[#2c3e50] underline text-sm">Ver todas</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {propiedades.map((p) => (
                            <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                                {/* Foto principal o placeholder */}
                                <div className="h-48 bg-gray-200 overflow-hidden relative">
                                    {p.fotos && p.fotos.length > 0 ? (
                                        <img src={p.fotos[0].url} alt={p.titulo} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                            Sin fotos
                                        </div>
                                    )}
                                    {/* Badge categoría */}
                                    {p.categoria && (
                                        <span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                                            {p.categoria}
                                        </span>
                                    )}
                                </div>

                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-bold text-[#2c3e50] text-base leading-tight"
                                            style={{ fontFamily: 'Oswald, sans-serif' }}>
                                            {p.titulo}
                                        </h3>
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ml-2 shrink-0 ${
                                            p.tipo === 'Alquiler' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                        }`}>
                                            {p.tipo}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-xs mb-3">📍 {p.ubicacion || 'Sin ubicación'}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{p.descripcion}</p>
                                </div>

                                <div className="px-5 py-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="font-bold text-[#2c3e50] text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
                                        $ {p.precio?.toLocaleString('es-AR')}
                                    </span>
                                    <Link to={`/propiedades/${p.id}`}
                                          className="bg-[#2c3e50] text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-[#1a252f] transition-all">
                                        Ver más
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}