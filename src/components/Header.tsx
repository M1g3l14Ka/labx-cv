'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import { BorderTrail } from "@/components/motion-primitives/border-trail"

export default function Header() {

    return (
        <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration: 0.7 }}
            className="sticky top-0 w-full bg-[#050505] min-h-screen flex justify-center items-center flex-col"
        >

            <div className="absolute top-1/2 right-[40%] -translate-y-1/2 w-5xl h-128 bg-orange-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="flex flex-col lg:flex-row justify-center items-center w-full p-6 gap-12 max-w-7xl mx-auto z-10">

                {/* Блок с текстом: по центру на мобилке, слева на ПК */}
                <div className="flex flex-col gap-4 text-white text-center lg:text-left order-2 lg:order-1"> 
                    <span className="text-4xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-160 from-orange-400 to-rose-600 leading-tight">
                        Кацион Михаил
                    </span>
                    <h1 className="text-xl lg:text-2xl font-mono font-bold mt-2">
                        Создаю сайты, приложения, генерирую тонну данных, поглощая тонну кофе.
                    </h1>
                    <p className="text-gray-400 font-mono mt-4">
                        Все закрутилось с 2024 года
                    </p>
                </div>

                {/* Блок с фоткой: стоит первым на мобилке (order-1), вторым на ПК (order-2) */}
                <div className="relative h-100 w-full max-w-[320px] lg:h-125 lg:max-w-100 overflow-hidden rounded-3xl shrink-0 order-1 lg:order-2 border border-white/10">
                    <Image
                        fill
                        src="/author.webp"
                        alt="author"
                        className="object-cover"
                    />
                    <BorderTrail
                        style={{
                            boxShadow: '0px 0px 60px 30px rgb(255 255 255 / 20%), 0 0 100px 60px rgb(255 150 75 / 40%)', 
                        }}
                        size={120}
                    />
                </div>
                    
            </div>
        </motion.div>
    )

}