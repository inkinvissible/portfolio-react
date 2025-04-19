import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaUsers } from "react-icons/fa";

const About = () => {
    const education = {
        title: "Sobre mi educación",
        description: "Soy estudiante de la carrera de Inteligencia Artificial y Robótica en la Universidad Siglo 21. Actualmente estoy cursando el segundo año de la carrera. He aprendido sobre programación, bases de datos y desarrollo web. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades. He hecho diversos cursos en diversas universidades, como la de Helsinki, donde aprendí los fundamentos de React, desarrollo con GraphQl y mucho más.",
        skills: [
            { name: "JavaScript", level: "Intermedio", percentage: 75 },
            { name: "HTML", level: "Avanzado", percentage: 90 },
            { name: "CSS", level: "Intermedio", percentage: 70 },
            { name: "React", level: "Intermedio", percentage: 75 },
            { name: "Python", level: "Intermedio", percentage: 65 },
            { name: "GraphQl", level: "Básico", percentage: 40 }
        ]
    };

    const experience = {
        title: "Sobre mi experiencia",
        description: "He trabajado en diversos proyectos como freelancer y he colaborado en proyectos de código abierto. He aprendido a trabajar en equipo y a comunicarme eficazmente con mis compañeros. Me gusta aprender de mis errores y mejorar constantemente. He trabajado en proyectos de desarrollo web, como por ejemplo, he creado mi propio ecommerce.",
        skills: [
            { name: "Trabajo en equipo", level: "Avanzado", percentage: 95 },
            { name: "Comunicación", level: "Avanzado", percentage: 90 },
            { name: "Resolución de problemas", level: "Avanzado", percentage: 85 },
            { name: "Gestión del tiempo", level: "Avanzado", percentage: 85 },
            { name: "Responsabilidad", level: "Avanzado", percentage: 95 }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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

    const SkillBar = ({ skill }) => (
        <motion.div
            className="mb-4"
            variants={itemVariants}
        >
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-white">{skill.name}</span>
                <span className="text-xs font-semibold text-blue-200">{skill.level}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-[#b3803f] to-[#d09c63]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                />
            </div>
        </motion.div>
    );

    return (
        <section className="py-20 bg-gradient-to-b from-[#384f46] to-[#2c3e38] text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="inline-block text-base font-semibold text-blue-100 bg-blue-500/10 px-4 py-1 rounded-full mb-2">
                        Sobre mí
                    </h2>
                    <p className="font-serif text-4xl text-white mb-4">Mi trayectoria</p>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-[#d3a16c] to-transparent"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education Section */}
                    <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div className="flex items-center mb-6" variants={itemVariants}>
                            <div className="w-12 h-12 rounded-full bg-[#b3803f]/20 flex items-center justify-center mr-4">
                                <FaGraduationCap className="text-2xl text-[#d09c63]" />
                            </div>
                            <h2 className="text-2xl font-medium">{education.title}</h2>
                        </motion.div>

                        <motion.p className="text-gray-300 mb-8" variants={itemVariants}>
                            {education.description}
                        </motion.p>

                        <motion.h3
                            className="text-xl font-medium mb-6 flex items-center"
                            variants={itemVariants}
                        >
                            <FaCode className="mr-2 text-[#d09c63]" />
                            Habilidades técnicas
                        </motion.h3>

                        <div className="space-y-1">
                            {education.skills.map(skill => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <motion.div className="flex items-center mb-6" variants={itemVariants}>
                            <div className="w-12 h-12 rounded-full bg-[#b3803f]/20 flex items-center justify-center mr-4">
                                <FaBriefcase className="text-2xl text-[#d09c63]" />
                            </div>
                            <h2 className="text-2xl font-medium">{experience.title}</h2>
                        </motion.div>

                        <motion.p className="text-gray-300 mb-8" variants={itemVariants}>
                            {experience.description}
                        </motion.p>

                        <motion.h3
                            className="text-xl font-medium mb-6 flex items-center"
                            variants={itemVariants}
                        >
                            <FaUsers className="mr-2 text-[#d09c63]" />
                            Habilidades blandas
                        </motion.h3>

                        <div className="space-y-1">
                            {experience.skills.map(skill => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;