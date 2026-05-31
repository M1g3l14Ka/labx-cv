'use client'
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navigation() {

    return (
        <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration: 0.7 }}
            className="sticky top-0 z-10 w-full bg-black/40 flex justify-center items-center "
        >
            <div className="flex justify-around items-center text-white w-4xl p-3 text-lg font-mono font-bold ">
                <div className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">
                    <Link href="#start" className="p-1 rounded-2xl hover:scale-95">
                        <span className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">Старт</span>
                    </Link> 
                
                </div>   
                
                <div className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">
                    <Link href="#about" className="p-1 rounded-2xl hover:scale-95">
                        <span className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">О себе</span>
                    </Link> 
                </div>            
                
                <div className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">
                    <Link href="#main" className="p-1 rounded-2xl hover:scale-95">
                        <span className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">Кейсы</span>
                    </Link> 
                </div>       
                
                <div className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">
                    <Link href="#contacts" className="p-1 rounded-2xl hover:scale-95">
                        <span className="hover:text-transparent hover:bg-clip-text hover:bg-linear-120 from-orange-400 to-rose-600">Контакты</span>
                    </Link> 
                </div>        
            </div>
        </motion.div>
    )

}