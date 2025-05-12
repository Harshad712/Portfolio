
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type NavItem = {
  name: string;
  link: string;
};

type MenuButtonProps = {
    isMenuOpen: boolean;
    onToggle: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ isMenuOpen, onToggle }) => {
    return (
      <button
        className="focus:outline-none transition duration-1000 "
        onClick={onToggle}
      >
        {isMenuOpen ? (
        
        <motion.div 
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:.25
        }}
        
        className=' transition translate-x-[9rem] md:translate-x-[14.4rem]'>            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" >
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 
              12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>           
            
        </motion.div>
 
        ) : (      
          <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" >
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 
              0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 
              0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </div>
          

        )}
      </button>
      
    );
  };

const NavBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: '.About( )', link: '#about' },
    { name: '.Project( )', link: '#projects' },
    { name: '.Experience( )', link: '#experience' },
    { name: '.Skills( )', link: '#skills' },
    { name: '.Contact( )', link: '#contact' },
  ];

  return (
    <nav className="text-base md:text-xl ">
      <div className="container mx-auto flex justify-between items-center ">
        
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <motion.a
            initial={{
                x :50,
                opacity : 0,
                scale : 0.5
              }}
              animate={{
                x: 0,
                opacity : 1,
                scale : 1
              }}
  
              transition={{
                duration:1.5
              }}
              key={item.name}
              href={item.link}
              className="hover:text-[#E2711E] focus:text-[#D26412] px-3 py-2 transition duration-300"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        <div className="lg:hidden flex items-center ">          
          <MenuButton isMenuOpen={isMenuOpen} onToggle={() => setMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-right mt-2 w-full space-y-2 h-screen">
          {navItems.map((item,index) => (
            <motion.a
            initial={{
                x :500,
                opacity : 0,
                scale : 0.5
              }}
              animate={{
                x: 0,
                opacity : 1,
                scale : 1
              }}
  
              transition={{
                duration:0.5,
                delay: index * 0.05
              }}
              key={item.name}
              href={item.link}           
              onClick={() => setMenuOpen(false)}
            >
              <button className="hoverNav p-4 text-xl font-bold md:text-4xl ">{item.name}</button> 
              
            </motion.a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const navItems = [
//       { name: '.About( )', link: '#about' },
//       { name: '.Project( )', link: '#projects' },
//       { name: '.Achievements( )', link: '#achievements' },
//       { name: '.Experience( )', link: '#experience' },
//       { name: '.Skills( )', link: '#skills' },
//       { name: '.Contact( )', link: '#contact' },
//     ];

//     return (
//         <nav className="fixed top-0 left-0 w-full z-50 p-1 bg-[#0A0A0A] backdrop-blur-sm shadow-md shadow-[#D7CBC4]/5">
//             <div className="container mx-auto px-4 flex items-center justify-between h-16">
//                 <div className="text-xl font-bold text-[#D7CBC4] capitalize">KINSHUK</div>
//                 <button
//                     className="md:hidden flex items-center text-[#D7CBC4] focus:outline-none"
//                     onClick={toggleMenu}
//                 >
//                     {isMenuOpen ? (
//                         <motion.div
//                             initial={{ opacity: 0, rotate: 90 }}
//                             animate={{ opacity: 1, rotate: 0 }}
//                             transition={{ duration: 0.25 }}
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
//                                 <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
//                             </svg>
//                         </motion.div>
//                     ) : (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.25 }}
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
//                                 <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
//                             </svg>
//                         </motion.div>
//                     )}
//                 </button>
//                 <div className="hidden md:flex space-x-6">
//                     {navItems.map((item) => (
//                         <a
//                             key={item.name}
//                             href={item.link}
//                             className="px-4 py-2 text-xl  text-[#D7CBC4] hover:text-[#E2711E] transition duration-300"
//                         >
//                             {item.name}
//                         </a>
//                     ))}
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute top-16 left-0 w-full  bg-[#0A0A0A] backdrop-blur-sm shadow-[#D7CBC4]/5 shadow-md md:hidden"
//                 >
//                     <ul className="flex flex-col space-y-4 p-4">
//                         {navItems.map((item) => (
//                             <li key={item.name} className="border-b border-white/[0.2]">
//                                 <a
//                                     href={item.link}
//                                     onClick={() => setIsMenuOpen(false)}
//                                     className="block px-4 py-2 text-xl text-[#D7CBC4] hover:text-[#E2711E] transition duration-300"
//                                 >
//                                     {item.name}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </motion.div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



