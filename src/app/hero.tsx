'use client'
import React from 'react'
import {animate, delay, motion} from "framer-motion"
import Link from 'next/link'
import Image from 'next/image' 
const Hero = () => {
     const image="/skelton.gif"
    const startVariant={
        hidden:{
            opacity:0,
            y:'-100vw'
        },
        visible:{
            opacity:1,
            y:0,
            
            transition:{
                type:"spring",
                delay:1,
                scale:1
            },
            
        }
    }

    const buttonVariants={
        hover:{
            scale:1.1,
            color:"#f8e112",
            textShadow:"0px 0px 8px rgb(255,255,255)",
            boxShadow:"0px 0px 8px rgb(255,255,255)",
            
        },
        
    }
  return (
    <div className=''>

    
    <motion.div
    variants={startVariant}
      initial="hidden"
      animate="visible"
     className='flex h-screen mt-80 justify-center items-center flex-col text-center gap-10  '>
      <motion.h1
      
      className='text-5xl'>Hi honey</motion.h1>
      <motion.p className='text-3xl '>I was wondering if u still love me and thought of asking you out the same! </motion.p>
        <Link href="/ques">
        <motion.button 
        variants={buttonVariants}
        transition={{ repeat:Infinity,
            repeatType:"reverse",
            duration:0.4}}
        whileHover="hover" 
        className='bg-white bg-gradient-to-tr text-3xl from-white via-pink-300 to-white px-10 py-4 rounded-full'
        
>Well lets start!</motion.button></Link>

    </motion.div>
    <div className='flex justify-center items-center'>
    <Image src={image} width={100} height={200} alt="" /></div>
    </div>
  )
}

export default Hero
