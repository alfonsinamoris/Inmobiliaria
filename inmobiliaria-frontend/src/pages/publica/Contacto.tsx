import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Contacto() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#c5a059] selection:text-white">
            <Navbar />

            {/* HEADER HERO */}
            <div
                className="relative py-24 text-center text-white bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.92) 100%), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80')`,
                }}
            >
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <span className="text-xs uppercase tracking-widest text-[#e6ca91] font-semibold block mb-3">
                        Atención Personalizada en Tandil
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight mb-4">
                        CONTACTANOS
                    </h1>
                    <div className="w-12 h-0.5 bg-[#c5a059] mx-auto mb-4"></div>
                    <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
                        Estamos para asesorarte en la compra, venta o alquiler de tu inmueble. Escribinos o visitanos en nuestras oficinas.
                    </p>
                </div>
            </div>

            {/* CONTENIDO PRINCIPAL: DOS COLUMNAS */}
            <div className="container mx-auto px-4 py-16 max-w-5xl flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 items-start">

                    {/* COLUMNA 1: INFORMACIÓN Y MEDIOS DE CONTACTO */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-8">
                        <div className="mb-6">
                            <span className="text-[11px] uppercase tracking-widest text-[#946e27] font-semibold block mb-1">
                                Canales Directos
                            </span>
                            <h2 className="text-2xl font-serif text-[#0f172a] font-normal">
                                Nuestras Oficinas
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {/* Dirección */}
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">
                                    📍
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Ubicación</p>
                                    <p className="text-sm font-medium text-[#0f172a]">San Martín 226</p>
                                    <p className="text-xs text-slate-500 font-light">Tandil, Prov. de Buenos Aires</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">
                                    ✉️
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Correo Electrónico</p>
                                    <a
                                        href="mailto:lucreciamorenoinmobiliaria@gmail.com"
                                        className="text-sm text-[#0f172a] hover:text-[#946e27] transition-colors break-all font-medium"
                                    >
                                        lucreciamorenoinmobiliaria@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Teléfono */}
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">
                                    📞
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Línea Telefónica</p>
                                    <a
                                        href="tel:+542494607249"
                                        className="text-sm font-medium text-[#0f172a] hover:text-[#946e27] transition-colors"
                                    >
                                        +54 (249) 460-7249
                                    </a>
                                </div>
                            </div>

                            {/* Horario */}
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">
                                    🕒
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Horarios de Atención</p>
                                    <p className="text-sm text-[#0f172a] font-medium">Lunes a Viernes</p>
                                    <p className="text-xs text-slate-500 font-light">9:00 a 18:00 hs</p>
                                </div>
                            </div>
                        </div>

                        {/* Botón WhatsApp directo */}
                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <a
                                href="https://wa.me/542494607249"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-sm"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.83.819 2.796.82h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.773-5.767zm7.545 5.766c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.53-.342-3.605-.939l-4.426 1.16 1.182-4.316c-.689-1.127-1.077-2.45-1.077-3.85 0-4.16 3.385-7.545 7.545-7.545 4.16 0 7.546 3.385 7.546 7.545z"/>
                                </svg>
                                Consultar por WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA 2: FORMULARIO DE CONSULTA */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-8 sm:p-10">
                        <div className="mb-8">
                            <span className="text-[11px] uppercase tracking-widest text-[#946e27] font-semibold block mb-1">
                                Mensaje Online
                            </span>
                            <h2 className="text-2xl font-serif text-[#0f172a] font-normal">
                                Envianos tu consulta
                            </h2>
                            <p className="text-slate-500 text-xs mt-1 font-light">
                                Completá los campos a continuación y te responderemos a la brevedad.
                            </p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ej: Juan Pérez"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all placeholder:text-slate-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="ejemplo@correo.com"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                    Teléfono / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Ej: 249 4123456"
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                                    ¿En qué podemos ayudarte?
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Contanos qué tipo de propiedad buscás o si necesitás tasar tu inmueble actual..."
                                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all placeholder:text-slate-400 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group mt-2"
                            >
                                <span>Enviar mensaje</span>
                                <svg className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                </svg>
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
