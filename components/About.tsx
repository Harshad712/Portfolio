
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}

    
    
        className='h-screen flex relative flex-col text-center  
        md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h1 className="text-4xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute top-24 tracking-[4px] md:tracking-[14px] "> 
                        ABOUT
            <h2 className=' pt-4 text-center font-medium text-lg lg:text-xl text-gray-500 tracking-[1px] md:tracking-[4px] '>
                        Let's keep this  <span className=' text-[#E69254] '>
                                Simple  
                            </span>
            </h2>
        
        </h1> 
        
        <div className='absolute top-56 flex flex-col md:flex-row items-center justify-center'>
                <motion.img
                    initial={{
                        x:-200,
                    }}
                    transition={{
                        duration:1.2,
                    }}
                    whileInView={{ 
                        x:0,
                        opacity:1 
                    }}
                    viewport={{once:true}}

                        src="/H1.jpg"

                        className="w-64 h-64 md:w-80 md:h-80 xl:w-[400px] xl:h-[400px] object-cover rounded-xl shadow-lg shadow-teal-50/40"
                />
            <div className='space-y-10 md:px-10 text-center w-screen md:w-full p-4 md:p-0 top-[16rem] md:top-12 md:relative absolute block'>
                    <h4 className='font-semibold md:text-xl flex flex-col items-center justify-center '>
                                           
                        <p className='text-sm pt-2 xl:text-xl  md:text-base'> 
                        I solve {" "}
                            <span className=' text-[#E69254] '>
                                Real World  
                            </span> Problems, {" "}
                            
                            <span className=' underline decoration-[#D26412] xl:p-2'>
                            using tech
                            </span>.  
                        </p> 
                        <p className='text-sm pt-2 xl:text-xl flex md:text-base'>
                       
                            I <FaHeart className='text-red-600 m-1'/> to participate in  {" "}
                            <span className='text-[#E69254]'>
                            Hackathons 
                            </span> {" "} 
                            to challenge myself.
                        </p>
                        
                        <p className='text-sm pt-2 xl:text-xl  md:text-base'>
                        
                            I also practice{" "} <span className='text-[#E69254] '>
                                DSA
                            </span> {" "} time to time, and currently learning about <span className='text-[#E69254] '>
                                AI Agents
                            </span> .
                            
                        </p>
                        
                    </h4>
                    <motion.div 
                    initial={{
                        x:200,
                        opacity:0
                    }}
                    transition={{
                        duration:1.2,
                    }}
                    whileInView={{ 
                        x:0,
                        opacity:1 
                    }}
                    viewport={{once:true}}
                    className='pt-2 '>
                            <Link href="https://github.com/Harshad712">  
                                <button className="hoverButton z-0 tracking-[2px] md:text-xl font-bold">GitHub</button>                
                            </Link>

                            <Link href="https://drive.google.com/file/d/1w4YTcMhJdAM7MpKg5nDVQoIoH6KB0RKt/view?usp=drive_link" >
                                <button className="hoverButton z-0 tracking-[2px] md:text-xl font-bold">My CV</button>
                            </Link>    
                                
                        
                    </motion.div>
                    
            </div>
        </div>
       
       

      
    </motion.div>
  )
}

export default About
