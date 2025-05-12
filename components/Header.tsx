import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import NavBar from './NavBar';




type Props = {}

function Header({}: Props) {

 
  return (
    
    <header className="sticky backdrop-blur-sm shadow-md shadow-[#D7CBC4]/5 top-0 flex p-5 items-start  justify-between w-full mx-auto z-30 xl:items-center"> 
        <motion.div 
            initial={{
              x :-500,
              opacity : 0,
              scale : 0.5
            }}
            animate={{
              x: 0,
              opacity : 1,
              scale : 1
            }}

            transition={{
              duration:1.5
            }}
            className='flex flex-row items-center justify-center'>

                <Link href="#hero">
                  <div className='uppercase text-[#D7CBC4] text-xl sm:text-2xl font-bold tracking-[4px] z-30' >
                    Harshad
                  </div> 
                </Link>
                
        </motion.div>
       
        
          
          <motion.div 
            initial={{
              x:500,
              opacity:0,
              scale:0.5
            }}
            animate={{
              x: 0,
              opacity : 1,
              scale : 1
            }}

            transition={{
              duration:1.5
            }}
            
            className='flex flow-row items-left text-sm md:text-base text-gray-300 cursor-pointer'>
                
            <NavBar/>               
                    
                
          </motion.div>
        
      
        
      </header>
  )
}

export default Header