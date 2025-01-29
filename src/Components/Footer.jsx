import { motion } from "framer-motion";

const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemSlide = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 120 }
    }
};


const Footer = () => (
    <div className="bg-[#384f46]">
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={footerVariants}
            className="bg-gradient-to-t from-[#466962] to-[#384f46] border-t border-white/10"
        >
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                    {/* Copyright */}
                    <motion.p
                        variants={itemSlide}
                        className="text-white/60 text-sm font-light"
                    >
                        © {new Date().getFullYear()} Todos los derechos reservados
                    </motion.p>


                    {/* Back to Top */}
                    <motion.a
                        variants={itemSlide}
                        href="#"
                        whileHover={{
                            scale: 1.05,
                            y: -3
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center text-white/80 hover:text-white group"
                    >
                        <span className="mr-2 text-sm font-light">Volver arriba</span>
                        <motion.div
                            animate={{
                                y: [0, -5, 0],
                                transition: {
                                    repeat: Infinity,
                                    duration: 2
                                }
                            }}
                            className="border border-white/30 rounded-full p-2 group-hover:border-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </motion.div>
                    </motion.a>
                </div>
            </div>
        </motion.footer>
    </div>

);

export default Footer