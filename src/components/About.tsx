    'use client';

    import { Download } from "lucide-react";
    import { motion } from "framer-motion";
    import { skills, values } from "@/data/data";

    const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
    };

    const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    export default function AboutPage() {
    return (
        <div className="relative min-h-screen">

            <div className="absolute top-1/2 left-[40%] -translate-y-1/2 w-full h-256 bg-orange-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-6 py-12 text-white font-mono font-bold">
                {/* Секция "О себе" */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4">
                        O <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-rose-600">себе</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Frontend / FullStack <br/>Разработчик современных веб-приложений с энтузиазмом
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <a
                            href="/cv/ru/Michael_Frontend.pdf"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-mono text-white hover:border-purple-500/30 hover:scale-105 transition-all"
                            >
                            <Download className="w-5 h-5" />
                            Скачать CV
                        </a>
                    </div>
                </motion.div>

                    {/* Секция "Навыки"*/}
                    <motion.section
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariant}
                    >
                        <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
                            <span className="text-purple-500">#</span> Навыки
                        </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill) => (
                            <motion.div key={skill.name} variants={itemVariant} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 ">
                                <div className="flex justify-between mb-2">
                                <span className="font-mono text-sm ">{skill.name}</span>
                                <span className="font-mono text-sm text-purple-400">{skill.level}%</span>
                                </div>
                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-linear-to-r from-orange-400 to-rose-600 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                                </div>
                            </motion.div>
                        ))}
                        </div>  
                    </motion.section>
                    
                    {/* Секция "Ценности" */}
                    <motion.section
                        className="mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariant}
                    >
                        <motion.h2 variants={itemVariant} className="text-3xl font-mono mb-8 text-center">
                            <span className="text-purple-500">#</span> Ценности
                        </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={itemVariant}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
                            >
                                <div className="text-purple-400 mb-3">{value.icon}</div>
                                <h3 className="font-mono text-lg mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                        </div>
                    </motion.section>
                </div>
            </div>
        );
    }
