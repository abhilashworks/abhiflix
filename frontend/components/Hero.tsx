'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Play, Info } from 'lucide-react';
import ProjectModal, { ProjectData } from './ProjectModal';
import { projectsData } from './ProjectsRow';

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  // Sadhana Hostel is project 01
  const heroProject = projectsData[0];

  return (
    <section id="hero" className="relative h-[92vh] sm:h-[95vh] w-full flex items-center justify-start overflow-hidden bg-[#0B0B0E]">
      
      {/* Full-Bleed Widescreen Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/kerala.jpeg"
          alt="Palem Ganga Abhilash Reddy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%] md:object-[68%_55%] scale-105 filter contrast-105 saturate-110 brightness-95 transition-transform duration-1000"
        />
        
        {/* Netflix Left Gradient: Keeps text crisp while leaving your face and arms bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0E] via-[#0B0B0E]/70 md:via-[#0B0B0E]/40 to-transparent w-full md:w-[62%]" />
        
        {/* Top Vignette for Navbar readability */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B0B0E]/80 to-transparent" />

        {/* Bottom Fade to blend seamlessly into project rows */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0E] via-[#0B0B0E]/60 to-transparent" />
      </div>

      {/* Netflix Billboard Content Overlay */}
      <div className="relative z-10 max-w-2xl px-6 sm:px-12 space-y-4 sm:space-y-6 mt-16 sm:mt-10">
        
        {/* Netflix Ranking Tag */}
        <div className="flex items-center gap-2">
          <span className="bg-[#E50914] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded tracking-wider uppercase shadow-[0_0_15px_rgba(229,9,20,0.7)]">
            #1 IN FULL-STACK & ML TODAY
          </span>
          <span className="text-xs font-mono text-cyan-400 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            99% MATCH FOR RECRUITERS
          </span>
        </div>

        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-[1.05]">
          PALEM GANGA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
            ABHILASH REDDY
          </span>
        </h1>

        {/* Synopsis */}
        <p className="text-sm sm:text-base text-gray-200 font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Full-Stack Architect & Machine Learning Engineer delivering scalable systems. 
          Architect of production portals like the <span className="text-white font-semibold underline decoration-[#E50914] decoration-2">Sadhana Hostel Platform</span>, 
          AI-driven NLP analyzers, and high-throughput web architectures.
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
          <a
            href={heroProject.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded bg-white text-black font-extrabold text-xs sm:text-sm hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            <Play className="w-4 h-4 fill-black text-black ml-0.5" />
            <span>Explore Live System</span>
          </a>

          <button
            onClick={() => setSelectedProject(heroProject)}
            className="flex items-center gap-2 px-5 sm:px-7 py-3 rounded bg-zinc-800/80 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-all transform hover:scale-105 border border-white/20 shadow-lg"
          >
            <Info className="w-4 h-4" />
            <span>More Info & Specs</span>
          </button>
        </div>

      </div>

      {/* Detail Modal Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}