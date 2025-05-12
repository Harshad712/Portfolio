"use client";
import React,{useState} from 'react';
import {motion} from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link';


type Props ={ }
type NavItem = {
  name: string;
  position: string;
  link: string;
};


const navItems: NavItem[] = [
  { name: 'Smart India Hackathon, 2022 ', position: 'Runnerups', link:'https://www.linkedin.com/feed/update/urn:li:activity:6971134465020489728/' },
  { name: 'Poornima Hackathon, 2022', position: '25 th / 540 teams', link:'https://www.linkedin.com/posts/vipulchauhan89_fantastic-experience-innovators-activity-7040226214787096576-stMQ?utm_source=share&utm_medium=member_desktop ' },
  { name: 'A.I. 2.0, Yahama 2023', position: '10 th / 140 teams', link:'https://www.linkedin.com/posts/vipulchauhan89_ymsli-hardwork-dedication-activity-7060448324402708480-I0Km?utm_source=share&utm_medium=member_desktop ' },  
  { name: 'Biweekly Contest 119, 2023', position: '4436 / 20179', link:'https://leetcode.com/kinshuk-dewari/' },  
  // { name: 'Smart India Hackathon, 2023 ', position: 'Pre-Qualifiers', link:' ' },
  { name: 'Weekly Contest 364, 2023', position: '4013 / 21263', link:'https://leetcode.com/kinshuk-dewari/' },  
];



const Achievements: React.FC = () =>  {
   
  const [isHovered, setIsShow] = useState(false);
  return (
    <div>
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView ={{
        opacity:1
    }}
    transition={{
        duration:1.5
    }}
    
    className='h-screen flex overflow-hidden flex-col md:text-left  relative
    justify-center items-center mx-auto text-center  '>
        <h3 className=' absolute text-4xl text-center text-[#E2711E]  pb-4 lg:text-7xl font-bold px-10 top-24 uppercase tracking-[4px] md:tracking-[14px] '>
        Achievements
        </h3> 
{/* 
        <h3 className=' top-36 uppercase text-gray-500 pb-2 tracking-[4px] absolute pt-4 text-center 
        font-medium text-lg lg:text-xl lg:pt-6 xl:pt-8'>my college journey</h3>   */}

        <div className='flex flex-col justify-between absolute top-52 items-start '>
        {navItems.map((item,key) => (            
            
              <Link key={key} href={item.link} target="_blank" className='border-b border-white/[0.2] '>
                <div  className='text-[#c7b6ad] w-[80vw] m-2 max-w-7xl space-y-4 flex flex-row items-start justify-between hover:bg-gray-600/10 hover:text-[#E2711E] transition ease-in-out delay-75 duration-300 overflow-hidden rounded-xl p-2'>
                    <div className='flex flex-col items-start justify-center'>
                      <h1 className=' text-2xl text-start font-bold capitalize md:text-5xl xl:text-6xl '>{item.name}   </h1>
                      <span className=' text-gray-500  text-sm md:text-lg uppercase'> {item.position} </span>      
                    </div>
                    <FaExternalLinkAlt className="h-4 w-4 text-[#E2711E]" />
                </div>
              </Link>

        ))}
        <div className='flex gap-1 mt-3 flex-row-reverse w-full'>
          <div className='bg-[#c7b6ad] h-2 w-2 rounded-full'></div>
          <div className='bg-[#c7b6ad] h-2 w-2 rounded-full'></div>
          <div className='bg-[#c7b6ad] h-2 w-2 rounded-full'></div>
        </div>
        </div>
        

    </motion.div>
    </div> 
  )
}
export default Achievements;
 

