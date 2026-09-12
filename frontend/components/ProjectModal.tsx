'use client';
import { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  type: string;
  match: string;
  rating: string;
  badge: string;
  desc: string;
  longDesc?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#14141A] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-white hover:text-black flex items-center justify-center transition-colors text-gray-300"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Banner */}
        <div className="relative h-56 sm:h-72 w-full bg-gradient-to-t from-[#14141A] via-[#1b1b24] to-black flex flex-col justify-end p-6 border-b border-white/5">
          <div className="space-y-2">
            <span className="bg-[#E50914] text-white text-[10px] font-black px-2 py-0.5 rounded tracking-tighter uppercase">
              {project.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-md">
              {project.title}
            </h2>
            <div className="flex items-center gap-3 text-xs font-mono text-gray-300">
              <span className="text-emerald-400 font-bold">{project.match}</span>
              <span className="px-1.5 py-0.5 border border-gray-600 rounded bg-black/40 text-[10px]">{project.rating}</span>
              <span className="text-cyan-400">{project.type}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Action Triggers */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded bg-white text-black font-bold text-xs hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <ExternalLink className="w-4 h-4" /> Open Live System
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs border border-white/10 transition-colors"
              >
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View Source Repository
              </a>
            )}

            {!project.liveUrl && !project.githubUrl && (
              <div className="text-xs font-mono text-gray-400 flex items-center gap-1.5 py-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Repository indexing in progress
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">System Architecture & Overview</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              {project.longDesc || project.desc}
            </p>
          </div>

          {/* Key Engineering Features */}
          {project.features && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">Key Engineering Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-gray-300">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-black/40 p-2.5 rounded border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div className="space-y-2 pt-2 border-t border-white/5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">Technologies Utilized</h3>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}