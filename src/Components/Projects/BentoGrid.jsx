import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const BentoGrid = ({ titles, descriptions, imgUrls, links }) => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    // Container for staggered children animations
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const renderProjectCard = (index, extraClasses = "", customStyles = {}) => (
        // In the renderProjectCard function, update the card background
        <motion.div
            className={`relative ${extraClasses}`}
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
            <motion.div
                className="absolute inset-px rounded-lg bg-gradient-to-br from-[#b3803f] to-[#d09c63]"
                whileHover={{ filter: "brightness(1.1)" }}
                style={customStyles}
            />
            <div className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${customStyles.borderRadius || ""}`}>
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                    >
                <span className="inline-flex items-center rounded-md bg-blue-900/40 px-2 py-1 text-xs font-medium text-blue-50 ring-1 ring-inset ring-blue-700/30 mb-2">
                    Proyecto {index + 1}
                </span>
                        <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                            {titles[index]}
                        </p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-100 max-lg:text-center">
                            {descriptions[index]}
                        </p>
                        <motion.div className="mt-4 flex items-center gap-3 max-lg:justify-center">
                            <motion.a
                                href={links[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-white hover:text-blue-200 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Ver sitio <FaExternalLinkAlt size={12} className="inline ml-1" />
                            </motion.a>
                            <motion.a
                                href={links[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-white hover:text-gray-200 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub size={16} className="inline" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Image container - customized for each index */}
                {renderProjectImage(index)}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/10" style={customStyles} />
        </motion.div>
    );

    const renderProjectImage = (index) => {
        switch(index) {
            case 0:
                return (
                    <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                        <motion.div
                            className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl"
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <img className="size-full object-cover object-top" src={imgUrls[0]} alt={titles[0]} />
                        </motion.div>
                    </div>
                );
            case 1:
                return (
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                        <motion.img
                            className="w-full max-lg:max-w-xs rounded-lg shadow-lg"
                            src={imgUrls[1]}
                            alt={titles[1]}
                            whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.3 } }}
                        />
                    </div>
                );
            case 2:
                return (
                    <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                        <motion.img
                            className="h-[min(152px,40cqw)] ml-6 mt-2 rounded-md shadow-md object-cover"
                            src={imgUrls[2]}
                            alt={titles[2]}
                            whileHover={{ scale: 1.1, x: 5, transition: { duration: 0.3 } }}
                        />
                    </div>
                );
            case 3:
                return (
                    <div className="relative min-h-[30rem] w-full grow">
                        <motion.div
                            className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl"
                            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
                        >
                            <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-blue-500/10 px-4 py-2 text-white">
                                        Quiz.jsx
                                    </div>
                                    <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                </div>
                            </div>
                            <div className="px-6 pt-6 pb-14 text-white">
                                <pre className="language-jsx font-mono text-sm overflow-x-auto">
                                    <code>{`import { useState } from 'react'
import Welcome from "./components/Welcome.jsx";
import Quiz from "./components/Quiz.jsx";

import './App.css'

function App() {
    const [navigator, setNavigator] = useState("Welcome")

    if(navigator === "Welcome"){
        return <Welcome setNavigator={setNavigator}/>
    }
    if (navigator === "Quiz"){
        return <Quiz />
    }
}

export default App`}</code>
                                </pre>
                            </div>
                        </motion.div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            variants={staggerContainer}
            className="py-24 sm:py-32 bg-gradient-to-b from-[#2c3e38] to-[#384f46]"
        >
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <motion.div
                    variants={fadeInUp}
                    className="text-center"
                >
                    <h2 className="inline-block text-base/7 font-semibold text-blue-100 font-headings bg-blue-500/10 px-4 py-1 rounded-full mb-2">
                        Mis Proyectos
                    </h2>
                    <p className="mx-auto mt-2 max-w-lg text-center font-serif text-4xl font-semibold tracking-tight text-balance text-gray-100 sm:text-5xl">
                        Algunos proyectos que he hecho
                    </p>
                    <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-[#d3a16c] to-transparent"></div>
                </motion.div>

                <div className="mt-16 grid gap-6 sm:gap-8 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    {renderProjectCard(0, "lg:row-span-2", { borderRadius: "lg:rounded-l-[2rem]" })}
                    {renderProjectCard(1, "max-lg:row-start-1", { borderRadius: "max-lg:rounded-t-[2rem]" })}
                    {renderProjectCard(2, "max-lg:row-start-3 lg:col-start-2 lg:row-start-2")}
                    {renderProjectCard(3, "lg:row-span-2", { borderRadius: "max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" })}
                </div>
            </div>
        </motion.div>
    );
};

BentoGrid.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BentoGrid;