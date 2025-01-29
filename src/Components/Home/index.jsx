import {motion} from "motion/react";
import {Link as ScrollLink} from "react-scroll";
import TypingAnimation from "./TypingAnimation.jsx";

const Index = () => {
    return (


            <div className="flex flex-col w-full items-start justify-center h-screen z-20 p-6">
                <motion.div
                    className="relative"
                    whileHover="hover"
                    initial="initial"
                >
                    <motion.p
                        className="text-gray-200 md:mx-4 md:text-xl text-sm font-serifq tracking-widest"
                        variants={{
                            initial: { color: "#E5E7EB" },
                            hover: { color: "#ffe225" }
                        }}

                        transition={{ duration: 0.3 }}
                    >
                        Creador, diseñador y desarrollador de ideas
                    </motion.p>
                    <motion.span
                        className="absolute bottom-0 left-4 h-[1px] bg-[#ffe225]"
                        variants={{
                            initial: { width: 0 },
                            hover: { width: "92%" }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>            <h1 className="text-3xl md:text-9xl text-white my-4 font-serif">Soy Agustín Martin</h1>
                <TypingAnimation />
                <ScrollLink to="proyectos" className="cursor-pointer" smooth={true} duration={500}>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        className="mt-4 p-2 bg-white text-black rounded cursor-pointer"
                    >
                        Proyectos
                    </motion.button>
                </ScrollLink>
            </div>

    );
};

export default Index;
