'use client'
import React from 'react'
import {animate, motion} from "framer-motion"
import { useState } from 'react'
import Link from 'next/link'
const ques = () => {
  const [no,setNo]=useState(false)
  const headingVariant={
    hidden:{opacity:0,x:'-100vw'},
    visible:{
      opacity:1,
      x:0,
      transition:{type:"spring",duration:1}
    }
  }
  const buttonVariants1={
    hidden:{
      opacity:0
    },
    animate:{opacity:1},
    hover:{
     
        scale:2.4,
        color:"#f8e112",
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
        transition:{
           
        }
    },
    
}
const buttonVariants2={
  hidden:{
    opacity:0
  },
  animate:{opacity:1,duration:5},
  hover:{
    opacity:1,
    scale:2.4,
    boxShadow: "0px 4px 6px rgba(255, 0, 0, 0.3)"
  }
}
  return (

    <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-blue-200 to-pink-300'>
      <motion.h1
        variants={headingVariant}
       initial="hidden"
       animate="visible"
       className='text-3xl'>Do u still get butterflies when u see me?</motion.h1>
      <div className='flex mt-10 justify-between gap-20'>

        <Link href="/valentines">
      <motion.button 
      variants={buttonVariants1}
      animate="animate"
      initial="hidden"
      whileHover="hover"
      transition={{}}
      className='p-2'
      >Yes</motion.button>
      </Link>


      <motion.button 
      variants={buttonVariants2}
      animate="animate"
      initial="hidden"
      whileHover="hover"
      className='p-2'
      onClick={()=>setNo(true)}
      >No</motion.button>

     
      </div>
      {no &&<motion.p
          className='text-2xl mt-20 text-red-500'
          initial={{ opacity: 0, y: 50 }} // Start position off-screen
          animate={{ opacity: 1, y: 0 }}  // End position on screen
          transition={{ ease: "easeInOut", duration: 0.7 }}
        >
          Mai janti hu ati h butterflies yes pe click kro to move ahead warna breakup
        </motion.p>}
    </div>
  )
}

export default ques
