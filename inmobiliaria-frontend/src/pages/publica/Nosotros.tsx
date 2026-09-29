import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const equipo = [
    {
        nombre: 'Lucrecia Moreno',
        rol: 'Martillera Pública',
        matricula: 'Mat. 1659',
        foto: '/img/lucrecia.jpg', // reemplazar con foto real
        descripcion:
            'Con más de una década de trayectoria en el mercado inmobiliario de Tandil, Lucrecia combina su profundo conocimiento del sector con un trato cercano y personalizado. Su compromiso es acompañar a cada cliente en cada etapa del proceso, brindando asesoramiento claro, honesto y profesional para lograr la mejor decisión.',
        icono: '🏛️',
    },
    {
        nombre: 'Mariana Lende',
        rol: 'Abogada',
        matricula: 'Especializada en Sucesiones',
        foto: '/img/mariana.jpg', // reemplazar con foto real
        descripcion:
            'Mariana brinda asesoramiento legal especializado en procesos sucesorios, garantizando que cada operación inmobiliaria se realice con total seguridad jurídica. Su expertise permite a los clientes transitar estos procesos con tranquilidad, claridad y respaldo profesional en cada paso.',
        icono: '⚖️',
    },
];

export default function SobreNosotros() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#c5a059] selection:text-white">
            <Navbar />

            {/* HEADER */}
            <div
                className="relative py-24 text-center text-white bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.92) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')`,
                }}
            >
                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <span className="text-xs uppercase tracking-widest text-[#e6ca91] font-semibold block mb-3">
                        Quiénes somos
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight mb-4">
                        SOBRE NOSOTROS
                    </h1>
                    <div className="w-12 h-0.5 bg-[#c5a059] mx-auto mb-4"></div>
                    <p className="text-slate-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
                        Un equipo de profesionales comprometidas con brindarte el mejor servicio inmobiliario en Tandil y zona.
                    </p>
                </div>
            </div>

            {/* INTRO */}
            <section className="container mx-auto px-4 py-16 max-w-3xl text-center">
                <span className="text-[11px] uppercase tracking-widest text-[#946e27] font-semibold block mb-3">
                    Nuestra historia
                </span>
                <h2 className="text-3xl font-serif text-[#0f172a] font-normal mb-4">
                    Experiencia y confianza al servicio de cada cliente
                </h2>
                <div className="w-10 h-0.5 bg-[#c5a059] mx-auto mb-6"></div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Inmobiliaria Lucrecia Moreno nació con el objetivo de ofrecer un servicio inmobiliario cercano, transparente y profesional en la ciudad de Tandil. A lo largo de los años, construimos una sólida reputación basada en la confianza de nuestros clientes y el profundo conocimiento del mercado local.
                </p>
            </section>

            {/* EQUIPO */}
            <section className="container mx-auto px-4 pb-20 max-w-5xl">
                <div className="text-center mb-12">
                    <span className="text-[11px] uppercase tracking-widest text-[#946e27] font-semibold block mb-3">
                        El equipo
                    </span>
                    <h2 className="text-3xl font-serif text-[#0f172a] font-normal">
                        Las profesionales detrás de cada operación
                    </h2>
                    <div className="w-10 h-0.5 bg-[#c5a059] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {equipo.map((persona) => (
                        <div key={persona.nombre}
                            className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">

                            {/* Foto */}
                            <div className="h-64 bg-slate-100 overflow-hidden relative">
                                <img
                                    src={persona.foto}
                                    alt={persona.nombre}
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        // Si no hay foto muestra un placeholder
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = `
                                            <div class="w-full h-full flex flex-col items-center justify-center bg-slate-100">
                                                <span class="text-6xl mb-3">${persona.icono}</span>
                                                <span class="text-slate-400 text-sm">${persona.nombre}</span>
                                            </div>
                                        `;
                                    }}
                                />
                                {/* Badge matrícula */}
                                <span className="absolute bottom-3 left-3 bg-[#0f172a]/80 text-[#e6ca91] text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                                    {persona.matricula}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="p-7">
                                <span className="text-[11px] uppercase tracking-widest text-[#946e27] font-semibold block mb-1">
                                    {persona.rol}
                                </span>
                                <h3 className="text-xl font-serif text-[#0f172a] font-normal mb-4">
                                    {persona.nombre}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-light">
                                    {persona.descripcion}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section
                className="py-16 text-center text-white"
                style={{
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 1))',
                }}>
                <div className="container mx-auto px-4 max-w-xl">
                    <span className="text-[11px] uppercase tracking-widest text-[#e6ca91] font-semibold block mb-3">
                        ¿Tenés una consulta?
                    </span>
                    <h2 className="text-3xl font-serif font-normal mb-4">Hablemos</h2>
                    <div className="w-10 h-0.5 bg-[#c5a059] mx-auto mb-6"></div>
                    <p className="text-slate-400 text-sm font-light mb-8">
                        Estamos para asesorarte en cada paso del proceso inmobiliario.
                    </p>
                    <a href="/contacto"
                        className="inline-block border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#0f172a] font-medium text-xs uppercase tracking-wider py-3.5 px-10 rounded-xl transition-all">
                        Contactanos
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}