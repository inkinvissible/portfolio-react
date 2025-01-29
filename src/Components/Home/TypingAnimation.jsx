import { motion } from "motion/react";
import { useState, useEffect } from "react";

const TypingAnimation = () => {
    const [text, setText] = useState("");
    const fullText =
        "Desarrollador Full Stack y especialista en Machine Learning con habilidades en distintos lenguajes de programación, frameworks y librerías.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1)); // Usa slice para obtener la parte correcta del texto
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 30); // Ajusta la velocidad de tipeo aquí
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.h2
            className="text-white md:text-xl my-4 w-3/4 h-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {text}
        </motion.h2>
    );
};

export default TypingAnimation;
