'use client';
import { Cpu, Play, CheckCircle2, Clock } from 'lucide-react';

const mlEpisodes = [
  {
    ep: 'EP 01',
    title: 'Data Ingestion & EDA',
    duration: 'Python • Pandas • NumPy',
    status: 'COMPLETED',
    desc: 'Handling raw tabular data, executing exploratory data analysis, identifying distributions, and eliminating null values for robust model readiness.'
  },
  {
    ep: 'EP 02',
    title: 'Feature Engineering',
    duration: 'Scikit-learn • Matplotlib',
    status: 'COMPLETED',
    desc: 'One-hot encoding, feature scaling, variance analysis, and vector transformations to optimize inputs for algorithmic learning.'
  },
  {
    ep: 'EP 03',
    title: 'Supervised Model Pipelines',
    duration: 'Scikit-learn Algorithms',
    status: 'COMPLETED',
    desc: 'Training regression and classification models with hyperparameter tuning, evaluated using confusion matrices, precision, recall, and F1 metrics.'
  },
  {
    ep: 'EP 04',
    title: 'AI & Generative Integration',
    duration: 'OpenAI API • Prompt Systems',
    status: 'COMPLETED',
    desc: 'Bridging full-stack interfaces with Large Language Model APIs for automated document reasoning, resume parsing, and semantic extraction.'
  },
  {
    ep: 'EP 05',
    title: 'Predictive Analytics In Production',
    duration: 'Currently Building',
    status: 'IN PRODUCTION',
    desc: 'Developing end-to-end predictive forecasting and recommendation services connected directly to web applications.'
  }
];

export default function MLLabRow() {
  return (
    <section id="ml-lab" className="relative z-10 px-6 md:px-12 py-8">
      {/* Row Header */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Trending Now: ML Engineering Series
          </h2>
          <span className="text-xs font-mono text-purple-400 hidden sm:inline-block">
            SEASON 1 // FROM PIPELINES TO INTELLIGENCE
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono">5 EPISODES</span>
      </div>

      {/* Episodes Grid Styled Like Netflix Episode Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {mlEpisodes.map((ep, idx) => (
          <div
            key={idx}
            className="netflix-card bg-[#14141A] rounded-md p-4 border border-purple-500/20 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-purple-400 font-bold">{ep.ep}</span>
                {ep.status === 'COMPLETED' ? (
                  <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                    <CheckCircle2 className="w-3 h-3" /> VERIFIED
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1 text-[10px] animate-pulse">
                    <Clock className="w-3 h-3" /> BUILDING
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors mb-1">
                {ep.title}
              </h3>
              <p className="text-[10px] font-mono text-gray-400 mb-2">{ep.duration}</p>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                {ep.desc}
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
              <span className="text-gray-400">ML LAB</span>
              <button 
                type="button"
                aria-label={`Inspect ${ep.title}`}
                className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-black transition-colors"
              >
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}