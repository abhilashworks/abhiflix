'use client';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const seasons = [
  {
    type: 'WORK EXPERIENCE',
    season: 'SEASON 03',
    title: 'Software Engineering Intern',
    organization: 'GND Solutions India Pvt. Ltd.',
    period: 'Nov 2024 – May 2025',
    icon: Briefcase,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    summary: 'Built responsive UI modules, developed modular reusable React.js components, integrated AWS fundamentals, and managed Git/GitHub collaborative sprints.',
    highlights: ['React.js', 'JavaScript', 'AWS Fundamentals', 'Frontend Architecture', 'Git/GitHub']
  },
  {
    type: 'UNDERGRADUATE DEGREE',
    season: 'SEASON 02',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'GITAM Deemed to be University',
    period: '2025 – 2028 // Pursuing',
    icon: GraduationCap,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    summary: 'Focusing on distributed systems, data structures, algorithms, advanced web architectures, and machine learning principles.',
    highlights: ['Computer Science', 'Distributed Systems', 'Machine Learning', 'Data Structures']
  },
  {
    type: 'POLYTECHNIC DIPLOMA',
    season: 'SEASON 01',
    title: 'Diploma in Computer Science & Engineering',
    organization: 'Loyola Polytechnic College',
    period: '2022 – 2025',
    icon: Award,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    summary: 'Graduated with 96.30% academic distinction. Developed core foundations in C, C++, Java, relational database systems, and web technologies.',
    highlights: ['96.30% Score', 'C / C++', 'Java', 'RDBMS', 'Web Foundations']
  }
];

export default function ExperienceRow() {
  return (
    <section id="experience" className="relative z-10 px-6 md:px-12 py-8">
      {/* Header */}
      <div className="flex items-baseline justify-between mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
            Original Series: Career & Education
          </h2>
          <span className="text-xs font-mono text-emerald-400 hidden sm:inline-block">
            CHRONOLOGICAL SEASONS
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono">3 SEASONS</span>
      </div>

      {/* Grid of Seasons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {seasons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`netflix-card bg-[#14141A] rounded-md p-5 border ${item.borderColor} flex flex-col justify-between`}
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className={`${item.color} font-bold flex items-center gap-1.5`}>
                    <Icon className="w-3.5 h-3.5" /> {item.type}
                  </span>
                  <span className="text-gray-400 text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded">
                    {item.season}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-mono mb-2">{item.organization}</p>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span>{item.period}</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1">
                {item.highlights.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-[10px] font-mono bg-zinc-900 text-gray-300 px-2 py-0.5 rounded border border-white/5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}