'use client';
import { useState } from 'react';
import { Play, Info } from 'lucide-react';
import ProjectModal, { ProjectData } from './ProjectModal';

export const projectsData: ProjectData[] = [
  {
    id: '01',
    title: 'Sadhana Hostel Management',
    type: 'PRODUCTION FULL-STACK',
    match: '99% Match',
    rating: '16+',
    badge: 'ABHI ORIGINAL',
    desc: 'Live full-stack accommodation portal managing student onboarding, room allocation, maintenance complaints, and administrative dues.',
    longDesc: 'Engineered as a full-stack student accommodation and facility management web application. Automates resident registration, room assignments, attendance logs, and financial records via secure authenticated endpoints.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://www.sadhanahostel.in/',
    features: [
      'Role-based Student & Warden authentication',
      'Automated room inventory & allocation',
      'Real-time complaint logging & resolution status',
      'Fee records & billing dashboard'
    ]
  },
  {
    id: '02',
    title: 'AI Resume Analyzer',
    type: 'AI INTELLIGENCE',
    match: '98% Match',
    rating: '13+',
    badge: 'TOP TRENDING',
    desc: 'Intelligent career tool extracting PDF text, scoring ATS keyword density, and offering contextual improvements using OpenAI APIs.',
    longDesc: 'Connects React interfaces with backend OpenAI LLM endpoints. Parses uploaded resumes, extracts skill vectors, matches keywords against target job descriptions, and provides actionable rewrite suggestions.',
    tags: ['OpenAI API', 'React.js', 'Node.js', 'Express.js', 'NLP Concepts'],
    githubUrl: 'https://github.com/abhilashworks/ai-resume-analyzer.git',
    features: [
      'Resume text extraction engine',
      'ATS score & keyword density computation',
      'AI-powered bullet point improvement suggestions',
      'Instant job-description matching'
    ]
  },
  {
    id: '03',
    title: 'Smartfins E-Commerce',
    type: 'COMMERCE ENGINE',
    match: '96% Match',
    rating: 'ALL',
    badge: 'COLLABORATION',
    desc: 'Modular storefront platform featuring dynamic product search, category filtering, cart state management, and authenticated checkout.',
    longDesc: 'A responsive full-stack online storefront supporting categorized catalog browsing, instant product filtering, persistent shopping cart sessions, and authenticated checkouts.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/charan-builds/smartfins-commerce.git',
    features: [
      'Instant catalog filtering & search indexing',
      'Persistent cart state architecture',
      'JWT token-based user authentication',
      'Modular REST API services'
    ]
  },
  {
    id: '04',
    title: 'Civic Issue Reporting System',
    type: 'SMART INDIA HACKATHON',
    match: '97% Match',
    rating: 'ALL',
    badge: 'SIH HACKATHON',
    desc: 'Smart city platform for citizens to report civic issues with real-time geolocation mapping, image uploads, and admin resolution workflows.',
    longDesc: 'Developed for the Smart India Hackathon. Enables citizens to report municipal concerns directly using device geolocation, photographic proof, and categorized status channels.',
    tags: ['React Native', 'React.js', 'Tailwind CSS', 'REST API', 'Geolocation'],
    features: [
      'Live geolocation capture & interactive mapping',
      'Visual photo evidence upload',
      'Municipal administrative resolution portal',
      'Status notification pipeline'
    ]
  },
  {
    id: '05',
    title: 'Automatic Message Sender',
    type: 'PYTHON AUTOMATION',
    match: '94% Match',
    rating: 'ALL',
    badge: 'UTILITY',
    desc: 'Automated scheduled messaging pipeline engineered with Python datetime scheduling, browser automation, and a visual Turtle interface.',
    longDesc: 'A scheduled automation pipeline built using Python to automate message dispatches via browser sessions, integrated with custom datetime triggers and visual controls.',
    tags: ['Python', 'Browser Automation', 'Turtle GUI', 'Datetime'],
    features: [
      'Datetime triggered scheduling',
      'WhatsApp Web automated sessions',
      'Interactive Turtle GUI controls',
      'Automated dispatch logger'
    ]
  }
];

export default function ProjectsRow() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="relative z-10 px-4 sm:px-6 md:px-12 py-8">
      {/* Row Header */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Top Picks for Recruiters
          </h2>
          <span className="text-xs font-mono text-cyan-400 hidden sm:inline-block">
            TAP CARD TO OPEN STREAM PREVIEW
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono">5 TITLES AVAILABLE</span>
      </div>

      {/* Responsive Row: Mobile horizontal touch-scroll + Desktop grid */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 scrollbar-none snap-x snap-mandatory">
        {projectsData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProject(item)}
            className="min-w-[270px] sm:min-w-0 snap-start netflix-card group relative bg-[#14141A] rounded-md overflow-hidden border border-white/5 cursor-pointer flex flex-col justify-between p-4"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="bg-[#E50914] text-white text-[9px] font-black px-1.5 py-0.5 rounded tracking-tighter uppercase">
                  {item.badge}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-bold">
                  {item.match}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-[10px] font-mono text-gray-400 mb-2">{item.type}</p>

              <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Inspect project"
                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-black text-black ml-0.5" />
                </button>
                <button
                  type="button"
                  aria-label="Inspect specs"
                  className="w-7 h-7 rounded-full border border-gray-500 flex items-center justify-center hover:border-white text-gray-300 hover:text-white transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono bg-zinc-800/80 text-gray-300 px-1.5 py-0.5 rounded border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cinematic Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}