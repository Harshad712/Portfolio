import React from 'react';
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';
import { CiInstagram,CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";


type Props = {}

function Socials({}: Props) {
  return (
    <div  className='flex max-h-[20rem] relative overflow-hidden items-center min-h-[50vh] justify-center flex-row p-10 md:p-20 lg:p-40' >
        
        <div id="page1">
            <div id="moving-div" className='w-[80%] md:w-[44%]'>
                <div id="blur-left"></div>
                <div className="move gap-4">
                  <Link href="https://instagram.com/harshadkokkinti" target="_blank" className='text-base flex flex-col hover:text-[#E2711E] items-center justify-center'>
                    <CiInstagram className="text-6xl"/>
                    {/* <SocialIcon  url="https://instagram.com/harshadkokkinti" fgColor="gray" bgColor= "transparent" target="_blank"/> */}
                    <h1 className='text-base tracking-[2px] font-bold md:text-2xl  text-gray-500 hover:text-[#E2711E]  pb-2 py-3'>
                      Instagram            
                    </h1>
                  </Link>

                  <Link href="https://leetcode.com/Harshad712" target="_blank" className='text-base flex hover:text-[#E2711E] flex-col items-center justify-center'>
                    <TbBrandLeetcode className='text-6xl'/>
                    <h1 className='tracking-[2px] font-bold md:text-2xl text-base  text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                      LeetCode            
                    </h1>
                  </Link>
                  <Link href="https://www.linkedin.com/in/harshad-kokkinti-53a7b5305" target="_blank" className='text-base flex hover:text-[#E2711E] flex-col items-center justify-center' >
                    <CiLinkedin className="text-6xl"/>
                    <h1 className=' text-base tracking-[2px] font-bold md:text-2xl   text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                      LinkedIn 
                    </h1>
                  </Link>  

                  <Link href="https://github.com/Harshad712" target="_blank" className='text-base flex flex-col hover:text-[#E2711E] items-center justify-center'>
                    <FaGithub className='text-6xl'/> 
                    <h1 className='text-base tracking-[2px] font-bold md:text-2xl   text-gray-500 hover:text-[#E2711E]  pb-2  py-3' >
                      Github
                    </h1>
                  </Link> 
                    
                </div>
                <div className="move gap-4">
                  <span>&nbsp; </span>
                  <Link href="https://instagram.com/harshadkokkinti" target="_blank" className='text-base hover:text-[#E2711E] flex flex-col items-center justify-center'>
                    <CiInstagram className="text-6xl"/>
                    <h1 className='text-base tracking-[2px] font-bold md:text-2xl  text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                      Instagram            
                    </h1>
                  </Link>

                  <Link href="https://leetcode.com/Harshad712" target="_blank" className='text-base hover:text-[#E2711E] flex flex-col items-center justify-center'>
                    <TbBrandLeetcode className='text-6xl'/>
                    <h1 className='tracking-[2px] font-bold md:text-2xl text-base   text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                      LeetCode            
                    </h1>
                  </Link>
                  <Link href="https://www.linkedin.com/in/harshad-kokkinti-53a7b5305" target="_blank" className='text-base hover:text-[#E2711E] flex flex-col items-center justify-center' >
                   
                    <CiLinkedin className="text-6xl"/>
                    <h1 className=' text-base tracking-[2px] font-bold md:text-2xl   text-gray-500 hover:text-[#E2711E] pb-2 py-3'>
                      LinkedIn 
                    </h1>
                  </Link>  

                  <Link href="https://github.com/Harshad712" target="_blank" className='text-base hover:text-[#E2711E] flex flex-col items-center justify-center'> 
                    <FaGithub className='text-6xl'/> 
                    <h1 className='text-base tracking-[2px] font-bold md:text-2xl  text-gray-500 hover:text-[#E2711E]  pb-2  py-3' >
                      Github
                    </h1>
                  </Link> 
                </div>
                <div id="blur-right"></div>

            </div>
        </div>

    </div>
  )
}
export default Socials