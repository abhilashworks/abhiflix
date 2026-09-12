'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Search, Bell } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-12 py-3 flex items-center justify-between ${
        isScrolled ? 'bg-[#0B0B0E]/95 backdrop-blur-md shadow-2xl border-b border-white/5' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      {/* Left: Netflix Ribbon "A" Logo & Links */}
      <div className="flex items-center gap-8">
        <a href="#hero" className="flex items-center gap-2 group">
          {/* Custom Netflix "A" Ribbon Icon */}
          <div className="relative w-8 h-9 flex items-center justify-center font-black text-2xl tracking-tighter text-[#E50914] drop-shadow-[0_0_12px_rgba(229,9,20,0.8)] select-none">
            <span className="text-3xl font-extrabold transform group-hover:scale-110 transition-transform">
              A
            </span>
          </div>
          <span className="font-extrabold tracking-wider text-lg text-white hidden sm:inline-block">
            ABHI<span className="text-[#E50914]">FLIX</span>
          </span>
        </a>

        {/* Navigation Categories */}
        <nav className="hidden md:flex items-center gap-5 text-xs text-gray-300 font-medium">
          <a href="#hero" className="text-white hover:text-gray-300 transition-colors">Home</a>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Top Picks</a>
          <a href="#ml-lab" className="hover:text-gray-300 transition-colors">ML Lab</a>
          <a href="#skills" className="hover:text-gray-300 transition-colors">Tech Stack</a>
          <a href="#experience" className="hover:text-gray-300 transition-colors">Episodes & Career</a>
        </nav>
      </div>

      {/* Right: Search, Notifications & User Avatar */}
      <div className="flex items-center gap-5 text-gray-300">
        <a href="#contact" className="hidden sm:inline-block px-3 py-1 rounded bg-[#E50914] text-white text-xs font-bold hover:bg-[#b80710] transition-colors shadow-[0_0_15px_rgba(229,9,20,0.5)]">
          HIRE ME
        </a>
        <Search className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
        <Bell className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
        
        {/* Profile Avatar with Red Border */}
        <a href="#about" className="relative w-8 h-8 rounded overflow-hidden border border-red-600 hover:scale-105 transition-transform">
          <Image 
            src="/images/dp.jpeg" 
            alt="Palem Ganga Abhilash Reddy" 
            fill 
            className="object-cover object-top"
          />
        </a>
      </div>
    </header>
  );
}