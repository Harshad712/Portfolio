import React from 'react';
import {motion} from "framer-motion";

type Props ={
    directionright?:boolean;
    image: string;
    str:string;
}


const SkillR: React.FC<Props> = ({ directionright,image,str}) => {
  return (
    <div className="relative flex group cursor-pointer ">
       <motion.div
                initial={{
                    x:directionright?100:-100,
                    opacity:0
                }}
                transition={{
                    duration:1
                }}
                whileInView={{
                    opacity:1,
                    x:0
                }}                
            >
                <img className='rounded-full border border-gray-500 object-cover
                 h-[4rem] w-[4rem] md:w-[6rem] md:h-[6rem]
                filter  transition duration-300 ease-in-out' src={image}  alt={'My Image'} />
        </motion.div> 
        <div className="absolute opactiy-0 group-hover:opacity-100 transition duration-300 ease-in-out
         group-hover:bg-[#D26412] rounded-full z-0 
         h-[4rem] w-[4rem] md:w-[6rem] md:h-[6rem] ">
            <div className="flex items-center justify-center h-full opacity-0 hover:opacity-100">
                <p className=" text-sm md:text-xl font-bold text-white  "> {str}</p>
            </div>
        </div>
      
      
    </div>
    
  );
};

export default SkillR;
