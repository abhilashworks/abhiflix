'use client';
import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, FileText, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Transmitting message...');

    try {
      const res = await fetch('https://formsubmit.co/ajax/abhipalem0836@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Recruiter Transmission from ${formData.name}`
        })
      });

      if (res.ok) {
        setStatus('Transmission delivered directly to inbox! Thank you.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Direct delivery failed. Please connect via LinkedIn or direct email.');
      }
    } catch {
      setStatus('Network issue. Connecting directly via email...');
      window.location.href = `mailto:abhipalem0836@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(formData.message)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 px-6 md:px-12 py-16 border-t border-white/10 mt-12 bg-gradient-to-t from-black to-transparent">
      
      {/* Netflix Callout Header */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-12">
        <span className="text-xs font-mono text-[#E50914] tracking-widest font-bold">
          READY TO STREAM INTELLIGENT SYSTEMS?
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Start Your Collaboration
        </h2>
        <p className="text-sm text-gray-400 max-w-xl mx-auto">
          Available for Full-Stack Engineering, Machine Learning Pipelines, and high-impact technology positions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Direct Profile Contact Spec */}
        <div className="bg-[#14141A] rounded-md p-6 border border-white/5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="border-b border-white/5 pb-3">
              <h3 className="text-lg font-bold text-white">Palem Ganga Abhilash Reddy</h3>
              <p className="text-xs font-mono text-cyan-400">Full-Stack Developer + ML Engineer</p>
            </div>

            <div className="space-y-3 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E50914]" />
                <a href="tel:+919346131788" className="hover:text-white transition-colors">+91-9346131788</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E50914]" />
                <a href="mailto:abhipalem0836@gmail.com" className="hover:text-white transition-colors">abhipalem0836@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#E50914]" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Social Nodes */}
          <div className="pt-4 border-t border-white/5 space-y-2 font-mono text-xs">
            <p className="text-[10px] text-gray-500 uppercase">EXTERNAL STREAM NODES</p>
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://www.linkedin.com/in/palem-ganga-abhilash-reddy-57981936b" 
                target="_blank" 
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 hover:border-cyan-400 text-gray-300 flex items-center gap-1.5 transition-colors"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3 text-cyan-400" />
              </a>
              <a 
                href="https://github.com/abhilashworks" 
                target="_blank" 
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 hover:border-purple-400 text-gray-300 flex items-center gap-1.5 transition-colors"
              >
                GitHub <ArrowUpRight className="w-3 h-3 text-purple-400" />
              </a>
              <a 
                href="https://leetcode.com/u/GB2024204147/" 
                target="_blank" 
                rel="noreferrer"
                className="px-2.5 py-1 rounded bg-zinc-900 border border-white/10 hover:border-amber-400 text-gray-300 flex items-center gap-1.5 transition-colors"
              >
                LeetCode <ArrowUpRight className="w-3 h-3 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Resume Spec Button */}
          <div className="pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Palem_Ganga_Abhilash_Reddy_Resume.pdf"
              className="w-full py-2.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs flex items-center justify-center gap-2 transition-colors border border-white/10"
            >
              <FileText className="w-4 h-4 text-cyan-400" /> View & Download Resume Specs
            </a>
          </div>
        </div>

        {/* Right: Netflix-style Red Accent Contact Form */}
        <form onSubmit={handleSubmit} className="bg-[#14141A] rounded-md p-6 border border-white/5 space-y-4 font-mono text-xs">
          <div>
            <label className="block text-gray-400 text-[10px] mb-1">RECRUITER / SENDER NAME</label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mercer"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-700 rounded p-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#E50914] transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-[10px] mb-1">OFFICIAL EMAIL ADDRESS</label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-700 rounded p-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#E50914] transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-400 text-[10px] mb-1">PROJECT OR POSITION BRIEF</label>
            <textarea
              rows={4}
              required
              placeholder="Details regarding your team or project requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-zinc-900 border border-zinc-700 rounded p-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#E50914] transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded bg-[#E50914] hover:bg-[#b80710] text-white font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,9,20,0.5)] cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            {isSubmitting ? 'TRANSMITTING...' : 'START TRANSMISSION'}
          </button>

          {status && (
            <div className="text-center text-xs text-cyan-400 pt-2 flex items-center justify-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{status}</span>
            </div>
          )}
        </form>

      </div>
    </section>
  );
}