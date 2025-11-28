import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Users, TrendingUp, AlertCircle, Lock } from 'lucide-react';

const TheStrainLab = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('problem');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mintTier, setMintTier] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const GlowEffect = ({ intensity = 0.5 }) => (
    <div 
      className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
      style={{
        background: `radial-gradient(circle, rgba(0, 255, 200, ${intensity}), transparent)`,
        filter: 'blur(60px)',
      }}
    />
  );

  const BioloText = ({ text, delay = 0 }) => (
    <div 
      className="inline-block opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );

  return (
    <div className="bg-black text-white font-mono overflow-hidden">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 200, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 200, 0.6); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .glow-box {
          animation: glow-pulse 3s infinite;
          border: 1px solid rgba(0, 255, 200, 0.3);
        }
        
        .float {
          animation: float 6s ease-in-out infinite;
        }
        
        .bio-gradient {
          background: linear-gradient(135deg, rgba(0, 255, 200, 0.1), rgba(0, 150, 150, 0.1));
        }

        .scan-line {
          position: relative;
          overflow: hidden;
        }

        .scan-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 200, 0.3), transparent);
          animation: scan 3s infinite;
        }

        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(0, 255, 200, 0.5);
        }
      `}</style>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <GlowEffect intensity={0.8} />
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-6xl md:text-7xl font-bold mb-4 tracking-tighter">
              <span className="text-emerald-300">Web3 Origins</span>
            </div>
            <div className="text-2xl md:text-3xl text-emerald-200/80 mb-6">
              coming to make the mutation.
            </div>
          </div>

          <div className="mb-12 text-emerald-300/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            <p>156 Carriers. 1 DAO. Against Mission Obvious.</p>
            <p className="mt-4">Sustainable NFT economics. Real governance. No hype.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#join" className="px-8 py-3 bg-emerald-500/20 border border-emerald-400 hover:bg-emerald-500/30 hover-glow transition-all">
              Join Pre-Launch
            </a>
            <a href="#learn" className="px-8 py-3 bg-transparent border border-emerald-400/30 hover:border-emerald-400 transition-all">
              Learn More
            </a>
          </div>

          <div className="flex justify-center items-center gap-2 text-emerald-300/60 animate-bounce">
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section id="learn" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">The Problem.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Hype Economy", desc: "Projects launch on speculation. Founders exit. Community left holding bags." },
            { title: "Extra
