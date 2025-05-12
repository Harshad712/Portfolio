import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { FaLaptopCode } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (    
        <div className="flex md:flex-row overflow-hidden relative w-full bg-[#0e0e0e] bottom-0 p-4
        text-left md:px-10 justify-center md:justify-between mx-auto items-start z-0 flex-col ">
            <div className='pb-8'>
                <Link href="#hero">
                    <div className='uppercase text-[#E2711E] text-3xl md:text-4xl font-bold tracking-[1px] md:tracking-[4px] z-30' >Harshad Kokkinti</div> 
                </Link>
                <div>Copyright &#169;HarshadKokkinti All rights reserved.</div>
            </div>
            <div className='flex md:flex-row gap-10'>
                <div className='flex flex-col items-start justify-center text-[#D7CBC4] font-bold text-sm md:text-2xl'>
                    <span className='pl-2 text-xl text-[#E2711E] uppercase'>Sections</span>
                    <Link href="#projects" className=' p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center'> <FaLaptopCode className=' text-[#818180] text-lg md:text-3xl'/> Projects</Link>
                    <Link href="#experience" className=' p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center'> <FaListCheck className=' text-[#818180] text-lg md:text-3xl'/> Experience</Link>
                    <Link href="#skills" className=' p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center'> <MdOutlineWorkOutline className=' text-[#818180] text-lg md:text-3xl'/>Skills</Link>
                </div>
                <div className="flex flex-col font-bold text-sm md:text-xl" >
                    <span className='text-xl pl-2 uppercase text-[#E2711E]'>Socials</span>
                    <div className=" p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center">
                        <Link href="https://github.com/Harshad712" className='flex gap-2' target="_blank">
                            <FaGithub className=' text-[#818180] text-lg md:text-3xl'/> 
                            Harshad-Kokkinti
                        </Link>                        
                                              
                    </div>
                    <div className=" p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center">
                        <Link href="https://instagram.com/harshadkokkinti" className='flex gap-2' target="_blank">
                            <FaInstagram className=' text-[#818180] text-lg md:text-3xl'/> 
                            harshad_kokkinti
                        </Link>       
                        </div>
                    <div className=" p-2 flex flex-row gap-6 items-center hover:text-[#E2711E] justify-center">
                    <Link href="https://www.linkedin.com/in/harshad-kokkinti-53a7b5305/" className='flex gap-2' target="_blank">
                            <FaLinkedin className=' text-[#818180] text-lg md:text-3xl'/> 
                            Harshad Kokkinti
                        </Link>  
                    </div>
                </div>
            </div>
            
        </div>        
    
  )
}

export default Footer
