import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPropiedades } from '../../api/Propiedades';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import type { FiltrosPropiedades, Propiedad } from '../../types';

const CATEGORIAS = ['Casa', 'Departamento', 'Terreno', 'Duplex', 'Local', 'Galpon', 'Fondo de comercio'];

const formatPrecio = (precio: number, moneda: string) => {
    if (moneda === 'USD') {
        return `U$D ${precio?.toLocaleString('es-AR')}`;
    }
    return `$ ${precio?.toLocaleString('es-AR')}`;
};

export default function Propiedades() {
    const [propiedades, setPropiedades] = useState<Propiedad[]>([]);
    const [loading, setLoading] = useState(true);
    const [filtros, setFiltros] = useState<FiltrosPropiedades>({});

    const [ubicacionInput, setUbicacionInput] = useState('');
    const [tipoInput, setTipoInput] = useState('');
    const [categoriaInput, setCategoriaInput] = useState('');
    const [monedaInput, setMonedaInput] = useState('');
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
        if (monedaInput) f.moneda = monedaInput;
        if (precioMinInput) f.precioMin = Number(precioMinInput);
        if (precioMaxInput) f.precioMax = Number(precioMaxInput);
        setFiltros(f);
        cargar(f);
    };

    const limpiar = () => {
        setUbicacionInput('');
        setTipoInput('');
        setCategoriaInput('');
        setMonedaInput('');
        setPrecioMinInput('');
        setPrecioMaxInput('');
        setFiltros({});
        cargar();
    };

    const hayFiltros = Object.keys(filtros).length > 0;

    const selectClass = "w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all";
    const inputClass = "w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all placeholder:text-slate-400";
    const labelClass = "block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5";

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#c5a059] selection:text-white">
            <Navbar />

            {/* HEADER HERO */}
            <div
                className="relative py-24 text-center text-white bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.78) 0%, rgba(15, 23, 42, 0.90) 100%), url('/img/propiedades.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <span className="text-xs uppercase tracking-widest text-[#e6ca91] font-semibold block mb-3">
                        Cartera Exclusiva en Tandil
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight mb-4">
                        PROPIEDADES DISPONIBLES
                    </h1>
                    <div className="w-12 h-0.5 bg-[#c5a059] mx-auto mb-4"></div>
                    <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
                        Explorá nuestras opciones de compra y alquiler en Tandil.
                    </p>
                </div>
            </div>

            {/* BUSCADOR */}
            <div className="container mx-auto px-4 -mt-10 relative z-20 mb-14 max-w-6xl">
                <form
                    onSubmit={buscar}
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200/80"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

                        {/* Ubicación */}
                        <div className="lg:col-span-1">
                            <label className={labelClass}>¿Dónde buscás?</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#946e27]">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    value={ubicacionInput}
                                    onChange={e => setUbicacionInput(e.target.value)}
                                    placeholder="Ej: Centro, El Cerrito..."
                                    className={`${inputClass} pl-10`}
                                />
                            </div>
                        </div>

                        {/* Operación */}
                        <div>
                            <label className={labelClass}>Operación</label>
                            <select value={tipoInput} onChange={e => setTipoInput(e.target.value)} className={selectClass}>
                                <option value="">Todas (Venta y Alquiler)</option>
                                <option value="Venta">Venta</option>
                                <option value="Alquiler">Alquiler</option>
                            </select>
                        </div>

                        {/* Categoría */}
                        <div>
                            <label className={labelClass}>Tipo de inmueble</label>
                            <select value={categoriaInput} onChange={e => setCategoriaInput(e.target.value)} className={selectClass}>
                                <option value="">Todas las tipologías</option>
                                {CATEGORIAS.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        {/* Moneda */}
                        <div>
                            <label className={labelClass}>Moneda</label>
                            <select value={monedaInput} onChange={e => setMonedaInput(e.target.value)} className={selectClass}>
                                <option value="">Todas</option>
                                <option value="ARS">$ Pesos (ARS)</option>
                                <option value="USD">U$D Dólares (USD)</option>
                            </select>
                        </div>

                        {/* Rango de precio */}
                        <div className="lg:col-span-2">
                            <label className={labelClass}>
                                Rango de precio {monedaInput === 'USD' ? '(U$D)' : '($)'}
                            </label>
                            <div className="flex gap-2 items-center">
                                <input
                                    type="number"
                                    value={precioMinInput}
                                    onChange={e => setPrecioMinInput(e.target.value)}
                                    placeholder="Mínimo"
                                    min="0"
                                    className={inputClass}
                                />
                                <span className="text-slate-300 font-light shrink-0">—</span>
                                <input
                                    type="number"
                                    value={precioMaxInput}
                                    onChange={e => setPrecioMaxInput(e.target.value)}
                                    placeholder="Máximo"
                                    min="0"
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Acciones */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium text-xs uppercase tracking-wider px-7 py-3 rounded-xl transition-all shadow-sm flex items-center gap-2"
                            >
                                <svg className="w-4 h-4 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                                Buscar Inmuebles
                            </button>
                            {hayFiltros && (
                                <button
                                    type="button"
                                    onClick={limpiar}
                                    className="text-slate-500 hover:text-slate-800 text-xs font-semibold px-4 py-3 rounded-xl hover:bg-slate-100 transition-all"
                                >
                                    Limpiar filtros
                                </button>
                            )}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                            {propiedades.length} {propiedades.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
                        </p>
                    </div>
                </form>
            </div>

            {/* GRILLA */}
            <div className="container mx-auto px-4 pb-24 max-w-6xl flex-1">
                {loading ? (
                    <div className="text-center py-24 text-slate-400 flex flex-col items-center justify-center gap-3">
                        <div className="w-8 h-8 border-2 border-[#c5a059] border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-xs uppercase tracking-wider font-medium">Cargando propiedades...</span>
                    </div>
                ) : propiedades.length === 0 ? (
                    <div className="text-center py-24 bg-white rounded-2xl border border-slate-200/80 p-8 max-w-md mx-auto shadow-sm">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#946e27]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                            </svg>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-[#0f172a] mb-2">No se encontraron resultados</h3>
                        <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                            Probá ajustando los criterios de búsqueda o limpiá los filtros aplicados.
                        </p>
                        <button onClick={limpiar}
                            className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm">
                            Ver todas las propiedades
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {propiedades.map((p) => (
                            <div key={p.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-slate-300 transition-all duration-300 flex flex-col group">

                                {/* Foto */}
                                <div className="h-56 bg-slate-100 overflow-hidden relative">
                                    {p.fotos && p.fotos.length > 0 ? (
                                        <img src={p.fotos[0].url} alt={p.titulo}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-sm gap-2">
                                            <svg className="w-8 h-8 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                            </svg>
                                            <span className="text-xs">Sin fotos disponibles</span>
                                        </div>
                                    )}

                                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                                        {p.categoria ? (
                                            <span className="bg-[#0f172a]/90 backdrop-blur-sm text-[#e6ca91] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                                                {p.categoria}
                                            </span>
                                        ) : <span></span>}
                                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider ${
                                            p.tipo === 'Alquiler' ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'
                                        }`}>
                                            {p.tipo}
                                        </span>
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs text-slate-400 font-medium flex items-center gap-1 mb-2">
                                            <svg className="w-3.5 h-3.5 text-[#946e27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                            {p.ubicacion || 'Tandil, Buenos Aires'}
                                        </p>
                                        <h3 className="font-serif font-semibold text-[#0f172a] text-lg leading-snug mb-2 group-hover:text-[#946e27] transition-colors">
                                            {p.titulo}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
                                            {p.descripcion}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                        <div>
                                            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">Valor</span>
                                            <span className="font-serif font-bold text-[#0f172a] text-xl">
                                                {formatPrecio(p.precio, p.moneda || 'ARS')}
                                            </span>
                                        </div>
                                        <Link to={`/propiedades/${p.id}`}
                                            className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all inline-flex items-center gap-1.5 shadow-sm">
                                            Ver ficha <span className="text-xs">→</span>
                                        </Link>
                                    </div>
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