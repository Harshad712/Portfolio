import React from 'react';
import { motion } from "framer-motion";

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0,        
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[.1,.2,.4,.8,.1,1],
        borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2.5
    }}
    className='relative flex  flex-row-reverse justify-center items-center'>
        <div className='absolute border border-[#E69254] opacity-10 h-[100px] w-[100px] rounded-[10%] rotate-[-90deg]  mt-52 animate-ping '/>
        <div className='absolute border border-[#E69254] opacity-20 h-[200px] w-[200px] rounded-full mt-52 animate-ping '/>
        <div className='absolute border border-[#E69254] opacity-10 h-[300px] w-[300px] rounded-[20%]  rotate-45 mt-52 animate-ping '/>
        <div className='absolute border border-[#E69254] opacity-20 h-[450px] w-[450px] rounded-full mt-52  animate-ping'/>
        <div className='absolute border border-[#E2711E] opacity-10 h-[500px] w-[500px] rounded-[30%] rotate-180 mt-52 animate-ping'/>
        
    </motion.div>
  )
}

export default BackgroundCircles     