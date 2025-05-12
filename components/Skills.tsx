import React from 'react'
import {motion} from "framer-motion";

import SkillL from './SkillL';
import SkillR from './SkillR';
type Props = {}

function Skills({}: Props) {
  return (
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
    
    className='min-h-screen flex overflow-hidden flex-col md:text-left  relative
    xl:flex-row max-w-[2000px] xl-px-10 justify-center items-center mx-auto text-center xl:space-y-2'>
        <h3 className='text-4xl text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 uppercase tracking-[4px] md:tracking-[14px]'>

            Skills
        </h3> 

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-56 px-4 pb-20 overflow-y-auto max-h-[70vh] hide-scrollbar">
  
          
            <SkillR directionright image="../mongodb.png"str="MongoDB" />
            <SkillR directionright image="../react.png"str="React" />

            <SkillL directionleft image="../c.png" str="C"/>
            <SkillL directionleft image="../python.png"str="Python" />
            <SkillL directionleft image="../mysql.png"str="MySQL" /> 
            

            <SkillR directionright image="../github.png"str="Github" />
            <SkillR directionright image="../tailwind.png"str="TailWind" />
            <SkillR directionright image="../figma.png"str="Figma" />
            
            <SkillL directionleft image="../html.png" str="HTML"/>
            <SkillL directionleft image="../css.png" str="CSS"/>
            <SkillL directionleft image="../js.png" str="JavaScript"/>
            <SkillL directionleft image="../git.png"str="Git" />          
          
            <SkillR directionright image="../postgres.jpeg" str="Postgres"/>
            <SkillL directionleft image="../fastapi.png" str="FastAPI" />
            <SkillR directionright image="../firebase.png" str="Firebase" />
            <SkillL directionleft image="../machinelearning.jpg" str="Machine Learning" />
            <SkillR directionright image="../deeplearning.png" str="Deep Learning" />
            <SkillL directionleft image="../huggingface.png" str="Hugging Face" />
            <SkillR directionright image="../nlp.jpg" str="NLP" />
            <SkillL directionleft image="../n8n.png" str="n8n" />
            <SkillR directionright image="../nhost.png" str="Nhost" />
            <SkillL directionleft image="../notion.png" str="Notion" />
            <SkillR directionright image="../zapier.png" str="Zapier" />
            <SkillL directionleft image="../openai.png" str="OpenAI" />
            
            
        </div>

    </motion.div>
  )
}

export default Skills
