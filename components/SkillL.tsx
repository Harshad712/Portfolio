import React from 'react';
import {motion} from "framer-motion";

type Props ={
    directionleft?:boolean;
    image: string;
    str:string;
}


const SkillL: React.FC<Props> = ({directionleft,image,str}) => {
  return (
    <div className="relative flex group cursor-pointer ">
    <motion.div
      initial={{
        x: directionleft ? -100 : 100,
        opacity: 0
      }}
      transition={{
        duration: 1
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
    >
      <img
        className='rounded-full border border-gray-500 object-cover 
          w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem]
          filter transition duration-300 ease-in-out'
        src={image}
        alt={'My Image'}
      />
    </motion.div>
    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out
      group-hover:bg-[#D26412] rounded-full z-0
      h-[4rem] w-[4rem] md:w-[6rem] md:h-[6rem]">
      <div className="flex items-center justify-center h-full opacity-0 hover:opacity-100">
        <p className="text-sm md:text-xl font-bold text-white">{str}</p>
      </div>
    </div>
  </div>
  
    
  );
};

export default SkillL;
