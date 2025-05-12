import React from 'react';
import {motion} from "framer-motion";
import ExperienceCard from './ExperienceCard';


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    
    initial={{opacity:0}}
    whileInView ={{opacity:1}}
    transition={{duration:1.5}}

    className='h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
       <h1 className="text-4xl text-center upper text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 absolute top-24 tracking-[4px] md:tracking-[14px] "> 
       EXPERIENCE
            
        
        </h1> 
       

        <div className='w-full flex space-x-5 overflow-x-scroll pl-20 pr-10 pb-10 snap-x absolute top-48
        snap-mandatory scrollbar-thin scrollbar-thumb-rounded-md
        scrollbar-track-gray-400/20 scrollbar-thumb-[#E2711E]/80'>
   
            <ExperienceCard 
              imageSrc="SRC.jpg"
              position="Backend Developer" 
              companyName="SRC CLUB" 
              techUsed={[
                { src: '/mongodb.png', alt: 'MongoDb' }, 
                { src: '/firebase.png', alt: 'Firebase' },
                { src: '/react.png', alt: 'React' },
                { src: '/nextjs.png', alt: 'Next.js' },
                { src: '/fastapi.png', alt: 'FastAPI' 
              }]}
              dates='Sept 2024 - Present'
              description={[
                  "Built a community platform for literature enthusiasts.",
                  "Handled Firebase auth, image uploads, and dynamic feeds.",
                  "Deployed the app using Vercel and Firebase Hosting."

              ]}                           
            />   
            <ExperienceCard 
              imageSrc="preswald.png"
              position="Open Source Contributor" 
              companyName="Preswald" 
              techUsed={[
                { src: '/mongodb.png', alt: 'MongoDb' }, 
                { src: '/react.png', alt: 'React' }, 
                { src: '/python.png', alt: 'Python' }, 
                { src: '/fastapi.png', alt: 'FastAPI' }
              ]}
              dates='APR 2025 - Present'
              description={[
                  "Built customizable sidebar branding (dynamic logo & title) with fallbacks.",
                  "Raised well-documented Pull Requests aligned with community guidelines.",
                  "Collaborated with maintainers to refine feature behavior and design."
                                     
              ]}                           
            />   
               
           
            
        </div>   
    </motion.div>
  )
}

export default WorkExperience

/*<h2 className=' pt-4 text-center font-medium text-lg lg:text-xl text-gray-500 tracking-[2px] md:tracking-[4px] '>
                        Swipe <span className='text-[#E2711E]'>{"-->"}</span>
            </h2>*/