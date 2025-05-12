import React from 'react';
import {motion} from "framer-motion";
import Image from 'next/image';

type Props = {
    companyName:string;
    position:string;
    dates:string;
    imageSrc:string;
    techUsed: { src: string; alt: string; }[];
    description: string[];
}

function ExperienceCard({position, companyName,dates, techUsed, description, imageSrc}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[400px] md:w-[500px] xl:w-[600px]  snap-center bg-[#111111] p-10 
    duration-200 overflow-hidden '>
        <motion.img 
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{
            once:true
        }}
        className=' h-28 w-28 xl:w-32 xl:h-32 shadow-md shadow-green-700 rounded-full object-cover object-center overflow-hidden'
        src={imageSrc} alt={companyName+'image'} 
        
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-bold text-[#E2711E]'>{position}</h4>     {/* position */}

            <p className=' font-semibold text-xl mt-1'>{companyName}</p>        {/* company */}

            <div className='flex space-x-2 my-2'>                     {/* tech used  */}
                {techUsed.map((tech, index) => (
                    <Image key={index} className='rounded-full' src={tech.src} width='30' height='30' alt={tech.alt} />
                ))}
            </div>

            <p className='uppercase py-5 text-base text-gray-300'>                     {/* dates */}
                {dates}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>      {/*description*/}
                {description.map((desc, index) => (
                    <li key={index} className="text-sm md:text-base">{desc}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
