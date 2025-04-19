import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import TypingAnimation from "./TypingAnimation.jsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
    const socialLinks = [
        { icon: <FaGithub size={24} />, url: "https://github.com/inkinvissible" },
        { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/agust%C3%ADn-martin-40aa67312/" },
    ];

    return (
        <div className="relative flex flex-col w-full items-start justify-center min-h-screen z-20 px-6 md:px-12 lg:px-20">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-20"
                        style={{
                            background: "linear-gradient(45deg, #ffe225, #ff6b6b)",
                            width: `${Math.random() * 300 + 100}px`,
                            height: `${Math.random() * 300 + 100}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25],
                            y: [0, Math.random() * 50 - 25],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: Math.random() * 10 + 10,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="w-full max-w-4xl">
                {/* Introduction text with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="relative inline-block"
                        whileHover="hover"
                        initial="initial"
                    >

                        <motion.span
                            className="absolute bottom-0 left-0 h-[1px] bg-[#ffe225]"
                            variants={{
                                initial: { width: 0 },
                                hover: { width: "100%" }
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Name with staggered letter animation */}
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-9xl text-white my-4 font-serif font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {Array.from("Soy Agustín Martin").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5 + index * 0.03,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                            className="inline-block"
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Typing animation */}
                <div className="my-8">
                    <TypingAnimation />
                </div>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                >
                    <ScrollLink to="proyectos" smooth={true} duration={500} className="cursor-pointer">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#ffe225", color: "#000" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-white text-black rounded-full font-medium shadow-lg transition-all flex items-center gap-2"
                        >
                            Ver Proyectos
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </ScrollLink>

                    <ScrollLink to="contacto" smooth={true} duration={500} className="cursor-pointer">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-transparent text-white border border-white rounded-full font-medium transition-all"
                        >
                            Contactarme
                        </motion.button>
                    </ScrollLink>
                </motion.div>

                {/* Social Media Links */}
                <motion.div
                    className="flex gap-6 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <p className="text-gray-400 text-sm mb-2">Desplaza para más</p>
                <motion.div
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                >
                    <motion.div
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ y: [0, 13, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Index;