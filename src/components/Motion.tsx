'use client'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Phone from './Phone'
 
function Motion({images,initialPosition, finalPosition, duration}:{images:Array<string>,initialPosition:string, finalPosition:string, duration:number}) {

    const containerRef = useRef(null)

    const isView = useInView(containerRef, {once: true, amount:0.4})

  return (
    <div  ref={containerRef} className='w-full flex flex-col items-center h-full overflow-hidden'> 
    <motion.div
         initial={{y: initialPosition}}
         animate={{y: finalPosition}}
         transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'linear'
         }}
         style={{ willChange : 'transform'}}
    >
     
        {images.map((item, i)=>
         <div key={i} className='py-10'>
        <Phone imgSrc={item} />
        </div>
        )}   
    </motion.div>
    <motion.div
         initial={{y: initialPosition}}
         animate={{y: finalPosition}}
         transition={{
            duration: duration,
            repeat: Infinity,
            ease: 'linear'
         }}
         style={{ willChange : 'transform'}}
    >    
 
        {images.map((item, i)=>
           <div key={i}  className='py-10'>
        <Phone imgSrc={item} />
        </div>
        )}
    </motion.div>
    </div>
  )
}

export default Motion