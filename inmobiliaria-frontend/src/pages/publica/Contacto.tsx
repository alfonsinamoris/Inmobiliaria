import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contacto() {
    return (
        <div className="flex flex-col min-h-screen bg-[#f4f7f6]">
            <Navbar />

            {/* Header */}
            <div className="text-white text-center py-14" style={{ background: 'linear-gradient(135deg, #2c3e50, #495057)' }}>
                <h1 className="text-4xl font-bold uppercase tracking-widest mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Contacto
                </h1>
                <p className="opacity-75 text-sm">Escribinos y te respondemos a la brevedad</p>
            </div>

            {/* Layout dos columnas */}
            <div className="container mx-auto px-4 py-14 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-7">

                    {/* Info */}
                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5 pb-2 border-b border-gray-100">
                            Información
                        </p>
                        {[
                            { icon: '📍', label: 'Dirección', value: 'San Martín 226, Tandil' },
                            { icon: '✉️', label: 'Email', value: 'lucreciamorenoinmobiliaria@gmail.com' },
                            { icon: '📞', label: 'Teléfono', value: '+54 249 4607249' },
                            { icon: '📷', label: 'Instagram', value: '@lucrecia_moreno_inmobiliaria' },
                        ].map((item) => (
                            <div key={item.label} className="flex gap-3 items-start mb-5">
                                <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-base shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</p>
                                    <p className="text-sm text-[#2c3e50]">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Formulario */}
                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5 pb-2 border-b border-gray-100">
                            Envianos un mensaje
                        </p>
                        <form className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium text-gray-500 mb-1 block">Nombre completo</label>
                                    <input type="text" placeholder="Juan Pérez"
                                           className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10" />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-gray-500 mb-1 block">Email</label>
                                    <input type="email" placeholder="ejemplo@correo.com"
                                           className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-medium text-gray-500 mb-1 block">Teléfono</label>
                                <input type="tel" placeholder="249 4123456"
                                       className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10" />
                            </div>
                            <div>
                                <label className="text-xs font-medium text-gray-500 mb-1 block">Tu consulta</label>
                                <textarea rows={4} placeholder="¿En qué podemos ayudarte?"
                                          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#495057] focus:ring-2 focus:ring-[#2c3e50]/10 resize-none" />
                            </div>
                            <button type="submit"
                                    className="w-full bg-[#2c3e50] text-white font-semibold py-3 rounded-lg hover:bg-[#1a252f] transition-all text-sm">
                                Enviar mensaje
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}