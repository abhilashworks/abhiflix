'use client';
import { Layout, Server, Code, Cpu, Sparkles, Cloud } from 'lucide-react';

const skillGenres = [
  {
    genre: 'GENRE: FRONTEND',
    icon: Layout,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    skills: ['React.js', 'React Native', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI', 'REST APIs']
  },
  {
    genre: 'GENRE: BACKEND',
    icon: Server,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST Architecture', 'JWT Authentication', 'API Security']
  },
  {
    genre: 'GENRE: MACHINE LEARNING',
    icon: Cpu,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'EDA', 'Feature Engineering', 'Regression', 'Classification']
  },
  {
    genre: 'GENRE: AI & GENAI',
    icon: Sparkles,
    color: 'text-pink-400',
    borderColor: 'border-pink-500/30',
    skills: ['OpenAI API', 'AI Endpoints', 'Prompt Engineering', 'NLP Fundamentals', 'Model Ingestion']
  },
  {
    genre: 'GENRE: CORE LANGUAGES',
    icon: Code,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    skills: ['Python', 'Java', 'C', 'C++']
  },
  {
    genre: 'GENRE: TOOLS & CLOUD',
    icon: Cloud,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'AWS Fundamentals']
  }
];

export default function SkillsRow() {
  return (
    <section id="skills" className="relative z-10 px-6 md:px-12 py-8">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Binge-Worthy Tech Stack
          </h2>
          <span className="text-xs font-mono text-cyan-400 hidden sm:inline-block">
            FILTER BY ARCHITECTURE
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono">6 SPECIALIZATIONS</span>
      </div>

      {/* Grid of Clusters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGenres.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`netflix-card bg-[#14141A] rounded-md p-5 border ${item.borderColor} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold flex items-center gap-2 ${item.color}`}>
                    <Icon className="w-4 h-4" /> {item.genre}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500">PRODUCTION</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono bg-zinc-900 text-gray-300 px-2.5 py-1 rounded border border-white/5 hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}