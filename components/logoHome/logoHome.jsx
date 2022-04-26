import React from 'react'
import Image from 'next/image'
import style from './logoHome.module.scss'
import { motion } from "framer-motion"
function LogoHome({ menuOpen }) {
    return (
        <div className={`logo-wrapper  `}>
            <div className="head-logo ">
                <Image
                    src="/images/logo-aida-color.png"
                    width={141}
                    height={76}
                />
            </div>
            <motion.div 
             animate={menuOpen ? { height: '76px' } : {height:0}}
            className={style.menuLogo} >
                <Image
                    src="/images/logo-aida-bianco.png"
                    width={141}
                    height={76}
                />
            </motion.div>
        </div>
    )
}

export default LogoHome