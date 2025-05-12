import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';
import Link from 'next/link';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import {riseWithFade, profileAnimation, staggerChildren, wordAnimation, delayedWordAnimation} from "../components/animations"

type Props = {}


function Hero({}: Props) {

    const [text] = useTypewriter({
            words: ["Backend.py ","{ Opensource.sl }","{AI Agents}","[ Movies ] = [ Life.exe ]","__ML & DL.py__"],
            loop: true,   
            typeSpeed:40,                  
            delaySpeed:700,            
    })
        
     return (
        <motion.div className='h-screen relative top-0 flex flex-row space-y-8 lg:text-7xl items-center justify-center text-left overflow-hidden' 
            initial="initial" 
            animate="animate" >
            
            <BackgroundCircles />
            
            <div className='z-20 '> 
                
                <h1 className='text-3xl pb-2 p-1 md:text-6xl lg:text-7xl font-semibold md:px-10 '>
                    <div className='overflow-hidden '>
                        <AnimateWords title="Hi&nbsp;there,&nbsp;I'm&nbsp;"/> <br/>
                    </div>
                    <motion.div                    
                        className='overflow-hidden '>
                        <span className='text-[#E2711E] font-bold '>
                            <AnimateWd title="Harshad"/>
                        </span>
                    </motion.div>
                </h1>
                
                <motion.h1 
                    initial={{
                        scale:0.8,
                        opacity:0
                    }}
                    animate={{
                        scale:1,
                        opacity:1
                    }}
                    transition={{
                        ease:easeInOut,
                        duration:2
                    }}
                    className='text-center pb-3 text-lg lg:text-xl text-gray-500'>
                    <span >{text}</span>
                    <Cursor cursorColor='xl'/>
                </motion.h1>           

                <motion.div 
                    initial={{
                        y:100,
                        opacity:0
                    }}
                    animate={{
                        y:0,
                        opacity:1
                    }}
                    transition={{
                        ease:easeIn, 
                        duration:1.8
                    }} 
                
                    className='pt-2 gap-2 flex items-center justify-center'>
                    
                    <Link href="#projects" className='gap-2'>  
                        <button className="hoverButton tracking-[2px] text-xs md:text-xl font-bold">Projects</button>
                    </Link>

                    <Link href="#contact" className='gap-2'>                  
                        <button className="hoverButton tracking-[2px] text-xs md:text-xl font-bold">Connect </button>
                    </Link> 
                </motion.div>               

            </div>            

            <motion.div className='flex flex-col items-center gap-2 justify-center text-center overflow-hidden'>
  <motion.img
    variants={profileAnimation}
    className='flex-shrink-0 
      w-40 h-auto   // shrunk from w-56
      md:w-72       // shrunk from 440px
      xl:w-80       // shrunk from 540px
      object-cover 
      z-10'
    width={320} height={320} 
    src="/H2.jpg" alt={'My Image'}
    style={{ marginLeft: '20px' }}  // Adjust margin to move the image right
  />
  
  <motion.h2
    variants={riseWithFade}
    className='text-sm md:text-xl font-bold text-gray-500 pb-2'
  >
     Backend Developer & AI Enthusiast
  </motion.h2>
</motion.div>



        </motion.div>    
            
            
    )
    }   

    type AnimateWordsProps={
        title:string
    };
    
    
    const AnimateWords: React.FC<AnimateWordsProps> = ({title}) => {
        return (
            <motion.span variants={staggerChildren}>
                {title.split(' ').map((word,i)=>(
                    <motion.div  key={i} className="inline-block">
                        <motion.span variants={wordAnimation} className="inline-block">{word}</motion.span>
                    </motion.div>
                ))}
            </motion.span>
        );
      };
      const isSpace =(char:string):boolean=>{
        if(char==" ")return true;
        return false;
      }
    
      const AnimateWd: React.FC<AnimateWordsProps> = ({title}) => {
        return (            
            
            <motion.span variants={staggerChildren}>
                {title.split("").map((word,i) => (  
                    
                    <motion.div key={i} className="inline-block ">
                        <motion.span variants={delayedWordAnimation} className="inline-block">
                            {word}
                        </motion.span>                       
                        
                    </motion.div>
                ))}
            </motion.span>
        );

        
    };
    



export default Hero
