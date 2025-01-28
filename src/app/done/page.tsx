'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
const page = () => {
    const image="/cat.gif"
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
  return (
    <div className='bg-gradient-to-br from-blue-200 to-pink-300 '>

    
    <motion.div variants={startVariant}
          initial="hidden"
          animate="visible"
           className='h-screen flex flex-col justify-center items-center '>
      <h1 className='text-5xl text-black'>yayayayayaay Love you babyyyyy wohooooooooo</h1>
        <Image src={image} width={200} height={200 } alt=''/>


    </motion.div>
    </div>
  )
}

export default page
