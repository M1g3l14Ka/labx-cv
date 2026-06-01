'use client'

import { useRef, useState,  useEffect } from "react"
import Image from "next/image"
import { ITimelineItem } from "@/types/types"
import {  ExternalLink, Code2 } from "lucide-react"

interface HomePageProps {
    projects: ITimelineItem[];
}

function ProjectCard({ project }: { project: ITimelineItem }) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                project.isInProgress
                    ? 'opacity-60 grayscale hover:opacity-75 hover:grayscale-50'
                    : isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
            } ${!project.isInProgress ? 'hover:border-purple-500/30' : ''}`}
        >
            <div className="relative h-48 bg-white/5 overflow-hidden">
                {project.img && project.img !== '/' ? (
                    <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-600 font-mono">
                        {project.title}
                    </div>
                )}
                {project.isInProgress && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-400 text-sm font-mono backdrop-blur-sm">
                            In Progress
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm font-mono">{project.date}</span>
                    <span className="text-purple-400 text-sm font-mono">{project.category}</span>
                </div>
                <h3 className="font-mono text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                {Array.isArray(project.subtitle) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.subtitle.slice(0, 3).map((tech: string) => (
                            <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs font-mono text-gray-400">
                                {tech}
                            </span>
                        ))}
                        {project.subtitle.length > 3 && (
                            <span className="px-2 py-1 text-xs font-mono text-gray-500">
                                +{project.subtitle.length - 3}
                            </span>
                        )}
                    </div>
                )}

                <div className="flex gap-3">
                    {project.link && project.link !== '/' && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-mono text-purple-400 hover:text-purple-300 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                        </a>
                    )}
                    {project.code && project.code !== '/' && (
                        <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-mono text-gray-400 hover:text-gray-300 transition-colors"
                        >
                            <Code2 className="w-4 h-4" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}




export default function HomePage({ projects }: HomePageProps) {
    return (
        <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
            <div className="absolute top-1/2 right-[40%] -translate-y-1/2 w-full h-256 bg-orange-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="mb-10 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-mono text-white flex justify-center items-center w-full">
                    <span className="text-purple-500">#</span> Кейсы
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

        </div>

    )
}
