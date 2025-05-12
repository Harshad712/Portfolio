// NavBar.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 1, text: 'Projects', href: '#projects' },
    { id: 2, text: 'Skills', href: '#skills' },
    { id: 3, text: 'About', href: '#about' },
    { id: 4, text: 'Contact', href: '#contact' },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#0A0A0A] shadow-md px-4 md:px-8">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-white">
          Harshad
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-white hover:text-blue-400 transition"
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
          className="lg:hidden focus:outline-none transition duration-300"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col space-y-4 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={closeMenu}
                className="text-white hover:text-blue-400 transition text-lg px-2"
              >
                {item.text}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
