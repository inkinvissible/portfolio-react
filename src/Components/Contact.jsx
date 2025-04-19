import {motion} from "framer-motion";
import {useState} from "react";

const Contact = ({ socialMedia }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const constructWhatsappLink = (email, name, message) =>{
        const phoneNumber = "5493512050889"
        const encodedMessage = encodeURIComponent(`Hola, soy ${name}. Mi mensaje es el siguiente: ${message}`)
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    }

    const redirectToWhatsapp = (email, name, message)=>{
        const whatsappLink = constructWhatsappLink(email, name, message)
        window.open(whatsappLink, "_blank")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setFormStatus("sending");
        setTimeout(() => {
            setFormStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
        const email = formData.email
        const name = formData.name
        const message = formData.message

        redirectToWhatsapp(email,  name,  message)

    };



    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-[#2c3e38] to-[#384f46] w-full overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="inline-block text-base font-semibold text-blue-100 bg-blue-500/10 px-4 py-1 rounded-full mb-2">
                        Contacto
                    </h2>
                    <p className="font-serif text-4xl text-white mb-4">
                        Contáctame
                    </p>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-[#d3a16c] to-transparent"></div>
                    <p className="mt-6 text-blue-50 max-w-2xl mx-auto">
                        Ya sea que tengas una idea, que quieras que construyamos juntos un proyecto o que necesites
                        asesoramiento, estoy aquí para ayudarte.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-8 items-start">
                    {/* Contact Form */}
                    <motion.div
                        className="md:col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-medium text-white mb-6">Envíame un mensaje</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-blue-50 mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-white/50"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-blue-50 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-white/50"
                                        placeholder="tu@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-blue-50 mb-1">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-white/50"
                                        placeholder="¿En qué puedo ayudarte?"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-gradient-to-r from-[#b3803f] to-[#d09c63] text-white font-medium rounded-lg shadow-lg flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={formStatus === "sending"}
                                >
                                    {formStatus === "sending" ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : "Enviar mensaje"}
                                </motion.button>

                                {formStatus === "success" && (
                                    <motion.div
                                        className="text-sm text-green-300 mt-2 text-center"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ¡Mensaje enviado con éxito! Te estoy redirigiendo a mi WhatsApp.
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>

                    {/* Social Media Links */}
                    <motion.div
                        className="md:col-span-2 space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-medium text-white mb-6">O contáctame por</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                            {socialMedia.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-4 transition-all duration-200"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#b3803f]/20 flex items-center justify-center">
                                        <i className={`
                                            ${social.icon === "fa-envelope"
                                            ? `fa-solid ${social.icon}`
                                            : `fa-brands ${social.icon}`} 
                                            text-2xl text-white
                                        `}/>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-white">
                                            {social.name}
                                        </h4>
                                        <p className="text-sm text-blue-50/80">
                                            {social.description || `Conecta conmigo en ${social.name}`}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;