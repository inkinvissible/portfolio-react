import {motion} from "motion/react";

const BentoGrid = ({titles, descriptions, imgUrls, links}) => {
    return (
        <motion.div initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.4,
                        scale: {visualDuration: 0.4},
                    }} className="py-24 sm:py-32 bg-[#384f46]">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-blue-100 font-headings">Mis Proyectos</h2>
                <p className="mx-auto mt-2 max-w-lg text-center font-serif text-4xl font-semibold tracking-tight text-balance text-gray-100 sm:text-5xl">
                    Algunos proyectos que he hecho
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-[#d3a16c] lg:rounded-l-[2rem]"></div>
                        <div
                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">
                                    {titles[0]}
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    {descriptions[0]}
                                </p>
                                <motion.a
                                    href={links[0]}
                                    target="_blank"
                                    className="relative text-blue-750"
                                    initial={{ scale: 1, color: "#508f7e" }}
                                    whileHover={{
                                        color: "#2b7fff",
                                        transition: { duration: 0.3 },
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Ver sitio
                                </motion.a>
                            </div>
                            <div
                                className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                <div
                                    className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <img
                                        className="size-full object-cover object-top"
                                        src={imgUrls[0]}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>


                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-[#d3a16c] max-lg:rounded-t-[2rem]"></div>
                        <div
                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">{titles[1]}</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    {descriptions[1]}
                                </p>
                                <motion.a
                                    href={links[1]}
                                    target="_blank"
                                    className="relative text-blue-750"
                                    initial={{ scale: 1, color: "#508f7e" }}
                                    whileHover={{
                                        color: "#2b7fff",
                                        transition: { duration: 0.3 },
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Ver sitio
                                </motion.a>
                            </div>
                            <div
                                className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                <img
                                    className="w-full max-lg:max-w-xs"
                                    src={imgUrls[1]}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>


                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-[#d3a16c]"></div>
                        <div
                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">{titles[2]}</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    {descriptions[2]}
                                </p>
                                <motion.a
                                    href={links[2]}
                                    target="_blank"
                                    className="relative text-blue-750"
                                    initial={{ scale: 1, color: "#508f7e" }}
                                    whileHover={{
                                        color: "#2b7fff",
                                        transition: { duration: 0.3 },
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Ver sitio
                                </motion.a>
                            </div>
                            <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <img
                                    className="h-[min(152px,40cqw)] ml-6 mt-2 rounded-xs object-cover"
                                    src={imgUrls[2]}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>


                    <div className="relative lg:row-span-2">
                        <div
                            className="absolute inset-px rounded-lg bg-[#d3a16c] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div
                            className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">
                                    {titles[3]}
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-800 max-lg:text-center">
                                    {descriptions[3]}
                                </p>
                                <motion.a
                                    href={links[3]}
                                    target="_blank"
                                    className="relative text-blue-500"
                                    initial={{ scale: 1, color: "#508f7e" }}
                                    whileHover={{
                                        color: "#2b7fff",
                                        transition: { duration: 0.3 },
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    Ver sitio
                                </motion.a>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div
                                    className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div
                                                className="border-r border-b border-r-white/10 border-b-white/20 bg-[#d3a16c]/5 px-4 py-2 text-white">
                                                Quiz.jsx
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                        </div>
                                    </div>
                                    <div className="px-6 pt-6 pb-14 text-white">
                                        <pre>
        <code className="language-jsx">
            {`import { useState } from 'react'
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

export default App`}
        </code>
    </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default BentoGrid