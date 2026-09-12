import Canvas3D from '@/components/Canvas3D';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsRow from '@/components/ProjectsRow';
import MLLabRow from '@/components/MLLabRow';
import SkillsRow from '@/components/SkillsRow';
import ExperienceRow from '@/components/ExperienceRow';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0E] text-white selection:bg-[#E50914] selection:text-white">
      {/* 3D Global Space & Parallax Canvas */}
      <Canvas3D />

      {/* Netflix-Style Top Floating Navigation */}
      <Navbar />

      {/* Main Billboard Hero */}
      <Hero />

      {/* Netflix Horizontal Content Rows */}
      <div className="space-y-4 pb-12">
        <ProjectsRow />
        <MLLabRow />
        <SkillsRow />
        <ExperienceRow />
        <ContactSection />
      </div>

      {/* Netflix Authentic Footer */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-xs font-mono text-gray-500 border-t border-white/5 space-y-4">
        <div className="flex flex-wrap gap-6">
          <span>Terms of Portfolio</span>
          <span>Help Center</span>
          <span>Privacy Architecture</span>
          <span>System Diagnostics</span>
        </div>
        <p className="text-[11px] text-gray-600">
          © 2026 Palem Ganga Abhilash Reddy. All systems operational. Built with Next.js, Three.js, Tailwind CSS & Node.js.
        </p>
      </footer>
    </main>
  );
}