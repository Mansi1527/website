'use client'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'
const page = () => {


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

  const buttonVariants2 = {
    hidden: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    hover: {
      // Start by moving to the top left
      x: "-50vw",  // Moves to the left off-screen (left-most)
         // Moves to the top of the screen (top-most)
  
     
    },
  };


  
  const zoom={
    hidden:{
      opacity:0
    },
    visible:{
      scale:1.1,
      opacity:1,
      
    }

  }
  return (
    <div className='h-screen flex justify-center items-center flex-col bg-gradient-to-br text-white from-pink-500 via-black to-pink-700'>

     <motion.h1 className=' text-4xl'>So do u wanna be my &nbsp; 
      <motion.span
     variants={zoom}
     initial="hidden"
     animate="visible"
     transition={{
      repeat:Infinity,
      repeatType:"reverse",
      duration:0.4
     }}

     className="underline text-red-500 ">Valentine?</motion.span></motion.h1>
        <div className='flex gap-20 mt-20'>
          <Link href="/done">
        <motion.button
        variants={buttonVariants1}
        initial="hidden"
        animate="animate"
        whileHover="hover"
        transition={{
          repeat:Infinity,
          repeatType:"reverse",
          duration:0.4}}
        className='bg-gradient-to-br text-black from-pink-200 via-white to-pink-500 p-2 rounded-full'
        >yes</motion.button>
        </Link>
        
        <motion.button
variants={buttonVariants2}
initial="hidden"
animate="animate"
whileHover="hover"
transition={{
  type: "tween",
  damping:25,
  stiffness:100,   // smoothens the stop
  duration: 0.1, }}
className='bg-red-500 p-3 rounded-full'
        >No</motion.button>
        </div>
            
        
    </div>
  )
}

export default page
