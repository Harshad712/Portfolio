import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="">
      
        <h3 className="text-4xl text-center text-[#E2711E] pb-2 lg:text-7xl font-bold px-10 realtive 
        top-0 uppercase tracking-[4px] md:tracking-[14px] xl:pb-8 "> 
            Projects
        </h3>

        <BentoGrid className="max-w-7xl p-4 mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon} 
              projectlink={item.link} 
            />
          ))}
        </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "RKV SPORTS",
    description: "RKV Sports is a comprehensive sports management system developed for organizing and managing sports events, teams, and player information at RK Valley.",
    header:   <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-neutral-100 bg-transparent">
                <img src="/Sports.webp" className='w-full h-[13rem]' alt="" />
              </div>,
    className: "col-span-1 row-span-1 ",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://github.com/Harshad712/RKV-SPORTS-API",
  },
  
  {
    title: "De-Lit",
    description: "De-Lit is a literature club platform designed to connect literature enthusiasts, writers, and readers in a collaborative and interactive space.",
    header:  <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-transparent">
              <img src="/delit.jpg" className='w-full h-[13rem] md:h-auto' alt="" />
            </div>,  
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://de-lit.vercel.app",
  },
  {
    title: "ReachNews",
    description: "ReachNews is a platform designed to streamline the distribution of news, stories, and updates. It enables users to access the latest content, read summaries, and explore different perspectives on current events.",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-transparent">
              <img src="/reachnews.webp" className='w-full h-[14rem] md:h-auto' alt="" />
            </div>,
    className: "col-span-1 row-span-1 md:row-span-2 ",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://reachnews.netlify.app",
  },
  {
    title: "Audio Filtering System",
    description:
      "Audio Filtering System is a real-time noise reduction tool built using deep learning techniques to isolate the primary speaker’s voice from background noise.",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-transparent">
              <img src="/audio.webp" className='w-full h-[13rem]' alt="" />
            </div>,
    className: "md:col-span-1",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://github.com/Harshad712/Audio-Filtering-System",
  },
  {
    title: "Store Monitoring API",
    description:
      "Store Monitoring API is a backend system designed to track and analyze the operational status of retail stores in real-time.",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-transparent">
              <img src="/store.webp" className='w-full h-[13rem]' alt="" />
            </div>,
    className: "md:col-span-1",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://github.com/Harshad712/Harshad_25-04-25",
  },
  {
    title: "BloodVision",
    description:
      "BloodVision is a web-based deep learning application that detects and classifies blood-related objects in images using a trained object detection model.",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-transparent">
              <img src="/blood.webp" className='w-full h-[13rem]' alt="" />
            </div>,
    className: "md:col-span-1",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://huggingface.co/spaces/Harshad712/object-detection-app",
  },
  {
    title: "News Analyzer",
    description:
      "News Sentiment Analyzer is an AI-powered tool that processes news articles to determine their underlying sentiment—positive, negative, or neutral.",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-transparent">
              <img src="/news.webp" className='w-full h-[13rem]' alt="" />
            </div>,
    className: "md:col-span-1",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://huggingface.co/spaces/Harshad712/news-analyzer-frontend",
  },
  {
    title: "Travel Planner",
    description:
      "Travel Planner is a smart itinerary management tool that helps users organize and optimize their travel plans .",
    header: <div className="flex flex-1 w-full  overflow-hidden h-full min-h-[6rem] rounded-xl bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent bg-transparent">
              <img src="/travel.webp" className='w-full h-[13rem]' alt="" />
            </div>,
    className: "md:col-span-1",
    icon: <FaExternalLinkAlt className="h-4 w-4 text-neutral-500" />,
    link:"https://huggingface.co/spaces/Harshad712/Travel_planner",
  },
  
];

export default Projects