// import { cn } from "@/utils/cn";
import Link from "next/link";
import { cn } from "../../utils/cn";
import { FaExternalLinkAlt } from "react-icons/fa";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  projectlink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  projectlink: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    
    <div
    className={cn(
      "row-span-1 rounded-xl group/bento hover:shadow-xl bg-[#0a0a0a] hover:shadow-[#E2711E]/50 transition duration-200 shadow-input shadow-none p-4 hover:bg-black  border-white/40 hover:border-white/[0.2] border justify-between flex flex-col space-y-4",
          className
        )}
        >
        {header}
        <Link href={projectlink} target="_blank">     
          <div className="group-hover/bento:  group-hover/bento:text-[#e2711e] rounded-md transition duration-200">
            <div className="flex  items-center justify-start gap-4">
              <div className="font-sans uppercase font-bold text-2xl text-[#E2711E] mb-2 mt-2">
                {title}
              </div>
              <FaExternalLinkAlt className="h-4 w-4 text-[#c7b6ad]" />
              
            </div>
            
            <div className="font-sans font-normal text-gray-600 text-base ">
              {description}
            </div>
          </div>
        </Link>
      </div>
  );
};
