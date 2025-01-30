import {motion} from "motion/react";
import Header from "./Header.jsx";
import {Element} from "react-scroll";
import Index from "./Home/index.jsx";

const Backgound = () => {
    return(
        <motion.div
            className="container h-screen relative overflow-hidden w-full"
            style={{
                backgroundImage: "linear-gradient(270deg, #508f7e, #384f46)",
                backgroundSize: "300% 300%",
            }}
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        >
            {/* Partículas de fondo */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={`back-${i}`}
                    className="absolute w-8 h-8 bg-gray-800 rounded-full shadow-lg"
                    style={{
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        zIndex: 0, // Partículas traseras
                    }}
                    animate={{
                        y: ["-10vh", "110vh"],
                        x: ["-10vw", "110vw"],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />
            ))}

            {/* Contenido principal */}
            <div className="relative" style={{ zIndex: 10 }}>
                <Header />
                <Element name="home">
                    <Index />
                </Element>
            </div>

            {/* Partículas frontales */}
            {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                    key={`front-${i}`}
                    className="absolute w-8 h-8 bg-gray-800 rounded-full shadow-lg"
                    style={{
                        top: `${Math.random() * 100}vh`,
                        left: `${Math.random() * 100}vw`,
                        zIndex: 20, // Partículas delanteras
                    }}
                    animate={{
                        y: ["-10vh", "110vh"],
                        x: ["-10vw", "110vw"],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                />
            ))}
        </motion.div>
    )
}
export default Backgound