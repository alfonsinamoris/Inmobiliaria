import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const SERVICE_ID = 'service_f573684';
const TEMPLATE_ID = 'template_l7dmwyi';
const PUBLIC_KEY = '0dZemZjXqxnc59CNL'; 

export default function Contacto() {
    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    });
    const [estado, setEstado] = useState<'idle' | 'enviando' | 'enviado' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Enviando...', form);
        setEstado('enviando');
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.nombre,
                    from_email: form.email,
                    telefono: form.telefono,
                    message: form.mensaje,
                },
                PUBLIC_KEY
            );
            setEstado('enviado');
            setForm({ nombre: '', email: '', telefono: '', mensaje: '' });
        } catch (err) {
            console.error(err);
            setEstado('error');
        }
        
    };

    const inputClass = "w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059] transition-all placeholder:text-slate-400";
    const labelClass = "block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5";

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#c5a059] selection:text-white">
            <Navbar />

            {/* HEADER HERO */}
            <div
                className="relative py-24 text-center text-white bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.92) 100%), url('img/contactanos.png')`,
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

            {/* CONTENIDO PRINCIPAL */}
            <div className="container mx-auto px-4 py-16 max-w-5xl flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 items-start">

                    {/* COLUMNA 1: INFO */}
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
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">📍</div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Ubicación</p>
                                    <p className="text-sm font-medium text-[#0f172a]">San Martín 226</p>
                                    <p className="text-xs text-slate-500 font-light">Tandil, Prov. de Buenos Aires</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">✉️</div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Correo Electrónico</p>
                                    <a href="mailto:lucreciamorenoinmobiliaria@gmail.com"
                                        className="text-sm text-[#0f172a] hover:text-[#946e27] transition-colors break-all font-medium">
                                        lucreciamorenoinmobiliaria@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">📞</div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Línea Telefónica</p>
                                    <a href="tel:+542494607249"
                                        className="text-sm font-medium text-[#0f172a] hover:text-[#946e27] transition-colors">
                                        +54 (249) 460-7249
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#946e27] shrink-0 text-lg shadow-sm">🕒</div>
                                <div>
                                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">Horarios de Atención</p>
                                    <p className="text-sm text-[#0f172a] font-medium">Lunes a Viernes</p>
                                    <p className="text-xs text-slate-500 font-light">9:00 a 13:00 hs</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <a href="https://wa.me/542494607249" target="_blank" rel="noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all shadow-sm">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.83.819 2.796.82h.005c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.767-5.773-5.767zm7.545 5.766c0 4.16-3.385 7.545-7.545 7.545-1.31 0-2.53-.342-3.605-.939l-4.426 1.16 1.182-4.316c-.689-1.127-1.077-2.45-1.077-3.85 0-4.16 3.385-7.545 7.545-7.545 4.16 0 7.546 3.385 7.546 7.545z"/>
                                </svg>
                                Consultar por WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* COLUMNA 2: FORMULARIO */}
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

                        {/* Mensaje de éxito */}
                        {estado === 'enviado' && (
                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 mb-6">
                                <p className="text-emerald-700 text-sm font-medium">✅ ¡Mensaje enviado correctamente! Te responderemos a la brevedad.</p>
                            </div>
                        )}

                        {/* Mensaje de error */}
                        {estado === 'error' && (
                            <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-6">
                                <p className="text-red-600 text-sm font-medium">❌ Hubo un error al enviar el mensaje. Intentá de nuevo o contactanos por WhatsApp.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Nombre completo</label>
                                    <input name="nombre" type="text" value={form.nombre} onChange={handleChange}
                                        placeholder="Ej: Juan Pérez" required className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Correo electrónico</label>
                                    <input name="email" type="email" value={form.email} onChange={handleChange}
                                        placeholder="ejemplo@correo.com" required className={inputClass} />
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Teléfono / WhatsApp</label>
                                <input name="telefono" type="tel" value={form.telefono} onChange={handleChange}
                                    placeholder="Ej: 249 4123456" className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>¿En qué podemos ayudarte?</label>
                                <textarea name="mensaje" rows={5} value={form.mensaje} onChange={handleChange}
                                    placeholder="Contanos qué tipo de propiedad buscás o si necesitás tasar tu inmueble actual..."
                                    required className={`${inputClass} resize-none`} />
                            </div>

                            <button type="submit" disabled={estado === 'enviando'}
                                className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group mt-2 disabled:opacity-60">
                                <span>{estado === 'enviando' ? 'Enviando...' : 'Enviar mensaje'}</span>
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