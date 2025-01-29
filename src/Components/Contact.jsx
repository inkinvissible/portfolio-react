import {motion} from "framer-motion";

const Contact = ({socialMedia}) => {

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {type: "spring", stiffness: 120}
        }
    };

    const hoverEffect = {
        scale: 1.05,
        transition: {type: "spring", stiffness: 300}
    };

    const tapEffect = {
        scale: 0.95
    };

    return (
        <section className="p-2 md:p-6 bg-[#384f46] w-full">
            <div className="container mx-auto md:px-40">
                <motion.h2
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    className="font-serif text-3xl text-center text-white mb-6"
                >
                    Contáctame
                </motion.h2>

                <motion.p
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 0.2}}
                    className="text-blue-100 my-4 mx-auto w-full text-center"
                >
                    Ya sea que tengas una idea, que quieras que construyamos juntos un proyecto o que necesites
                    asesoramiento, estoy aquí para ayudarte.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    className="flex flex-col md:flex-row justify-around items-center space-x-4 mt-2"
                >
                    {socialMedia.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            variants={itemVariants}
                            whileHover={hoverEffect}
                            whileTap={tapEffect}
                        >
                            <div
                                className="flex flex-col justify-center items-center rounded-xl w-2xs bg-white/10 border my-4 border-white/10 shadow-lg backdrop-blur-md p-2 hover:bg-white/20 transition-all duration-300">
                                <h3 className="text-center text-white text-xl mb-2">
                                    {social.name}
                                </h3>
                                <motion.div whileHover={{scale: 1.1}}>
                                    <i className={`
                  ${social.icon === "fa-envelope"
                                        ? `fa-solid ${social.icon}`
                                        : `fa-brands ${social.icon}`} 
                  text-4xl text-white p-2
                `}/>
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
export default Contact