import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const equipo = [
    {
        nombre: 'Lucrecia Moreno',
        rol: 'Martillera Pública',
        matricula: 'Mat. 1659',
        foto: '/img/lucrecia.heic', 
        descripcion:
            ' Martillera y Corredora Pública con trayectoria desde el año 2016, Lucrecia es la fundadora y directora de la firma. Entendiendo que el mercado de bienes raíces va mucho más allá de las propiedades, centra su labor en las historias y los proyectos de vida de quienes confían en ella. Desde la apertura de su propia oficina en 2018, su objetivo ha sido acompañar cada etapa de la operación brindando el profesionalismo, la dedicación y la contención humana que una decisión tan importante requiere, liderando cada gestión con empatía y transparencia.'
    },
    {
        nombre: 'Mariana Lende',
        rol: 'Abogada',
        matricula: 'Especializada en Sucesiones',
        foto: '/img/mariana.heic', 
        descripcion:
        'Con más de una década trabajando como abogada en la ciudad de Tandil, Mariana integra nuestro estudio, brindando asesoramiento  con responsabilidad y compromiso, destacándose por la cercanía en el trato, la búsqueda de soluciones claras y seguras para nuestros clientes. Acompañándonos en todas nuestras operaciones, aporta un servicio diferencial, brindando seguridad jurídica y soporte técnico de manera personalizada. Especializada, en el campo del Derecho Sucesorio, y Derecho Inmobiliario, es la encargada de revisión de documental y estudio de títulos correspondientes a cada operación, procurando que cada persona pueda comprender su situación y tomar decisiones con la tranquilidad de contar con un adecuado respaldo legal.'
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
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.92) 100%), src('public/img/nosotros.heic')`,
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
            
                <div className="w-10 h-0.5 bg-[#c5a059] mx-auto mb-6"></div>
                <p className="mb-6">
                En <strong>Inmobiliaria Lucrecia Moreno</strong> concebimos el mercado de bienes raíces desde una perspectiva diferente. Nuestro diferencial radica en cómo hacemos las cosas. Hemos construido una firma donde la ética profesional, la actualización constante y el trato humano se combinan para brindar un servicio integral. No buscamos simplemente cerrar una venta o un alquiler, sino forjar relaciones de confianza a largo plazo con cada persona que cruza nuestra puerta.
                </p>
                <p className="font-semibold text-slate-800 mb-3">
                    Para lograrlo, nuestro trabajo diario se sostiene sobre tres pilares innegociables:
                </p>
                <ul className="space-y-3 text-left max-w-2xl mx-auto pl-4 md:pl-0">
                    <li className="flex items-start gap-2">
                        <span className="text-[#c5a059] mt-1">▪</span>
                        <span><strong>Responsabilidad:</strong> Cuidamos tu patrimonio legal y comercial garantizando total transparencia en cada paso de la gestión.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#c5a059] mt-1">▪</span>
                        <span><strong>Compromiso:</strong> Nos involucramos al cien por ciento en tu proyecto, buscando soluciones reales y defendiendo tus intereses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-[#c5a059] mt-1">▪</span>
                        <span><strong>Acompañamiento personalizado:</strong> Entendemos que tu caso es único. Te escuchamos y estamos a tu lado desde la primera consulta hasta la entrega de llaves.</span>
                    </li>
                </ul>
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
                                                <span class="text-6xl mb-3">${persona.foto}</span>
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