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
            { title: "Extractive Model", desc: "Royalties disappear into founders' wallets. No passive income for holders." },
            { title: "Centralized Control", desc: "Major decisions made by 1-2 people. Community has no real voice." }
          ].map((item, i) => (
            <div key={i} className="glow-box p-6 md:p-8 rounded">
              <h3 className="text-lg font-bold text-emerald-200 mb-3">{item.title}</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bio-gradient border border-emerald-500/20 rounded">
          <div className="flex gap-3 mb-3">
            <AlertCircle size={20} className="text-emerald-400 flex-shrink-0" />
            <p className="text-emerald-200">
              <strong>Result:</strong> NFT market is 90% noise, 10% signal. Builders leave. Speculators dominate.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">The Solution.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <div className="space-y-8">
          {[
            {
              title: "Dual-Royalty System",
              desc: "Every trade generates two revenue streams: 1) Secondary royalties fund passive rewards, 2) Treasury builds sustainable treasury. Economics work on day 1.",
              icon: TrendingUp
            },
            {
              title: "Cytoplasm Rewards",
              desc: "Hold an NFT, earn passive Cytoplasm NFTs every 30 days. Claimable, tradeable, no KYC. Real passive income without crypto volatility.",
              icon: Zap
            },
            {
              title: "1 Carrier = 1 Founder",
              desc: "Every NFT holder votes on expansion, artist partnerships, treasury allocation. Born as a DAO from launch, not bolted on later. True community ownership.",
              icon: Users
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bio-gradient border border-emerald-500/20 p-8 md:p-10 rounded">
                <div className="flex gap-4 mb-4">
                  <Icon size={28} className="text-emerald-400 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-emerald-200">{item.title}</h3>
                </div>
                <p className="text-emerald-100/70 ml-12 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ECONOMICS */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">Economics.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Treasury Allocation */}
          <div className="glow-box p-8 rounded">
            <h3 className="text-lg font-bold text-emerald-200 mb-6">900 NFT @ $40 Avg</h3>
            <div className="space-y-4">
              {[
                { label: "Carrier Zero (Founder)", value: "$5,403", color: "emerald" },
                { label: "Nox (Co-Founder)", value: "$5,403", color: "cyan" },
                { label: "Treasury Reserve", value: "$16,210", color: "emerald" },
                { label: "Community (Royalty)", value: "$7,621", color: "emerald" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-emerald-100/70">{item.label}</span>
                  <span className={`font-bold text-${item.color}-300`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            <div className="glow-box p-6 rounded">
              <p className="text-emerald-400 text-sm mb-2">Standing Buy-Back</p>
              <p className="text-3xl font-bold text-emerald-200">$1 per Cytoplasm</p>
              <p className="text-emerald-100/60 text-xs mt-2">Floor always backed. No liquidation pressure.</p>
            </div>
            
            <div className="glow-box p-6 rounded">
              <p className="text-emerald-400 text-sm mb-2">Royalty Split</p>
              <p className="text-3xl font-bold text-emerald-200">70% Holders / 30% Treasury</p>
              <p className="text-emerald-100/60 text-xs mt-2">Decade 1: 70% royalty to community. Declining as project stabilizes.</p>
            </div>

            <div className="glow-box p-6 rounded">
              <p className="text-emerald-400 text-sm mb-2">Cytoplasm Generation</p>
              <p className="text-3xl font-bold text-emerald-200">50% of Royalty</p>
              <p className="text-emerald-100/60 text-xs mt-2">Half of community royalty converts to claimable Cytoplasm NFTs.</p>
            </div>
          </div>
        </div>

        <div className="bio-gradient border border-emerald-500/20 p-8 rounded">
          <h4 className="text-emerald-300 font-bold mb-3">Example: 1 NFT Holder, Year 1</h4>
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-emerald-400 text-xs mb-1">Monthly Trading Volume</p>
              <p className="text-lg font-bold text-emerald-200">$5,000</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs mb-1">Your Share (70% × 1/900)</p>
              <p className="text-lg font-bold text-emerald-200">$3.89</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs mb-1">Annual Passive</p>
              <p className="text-lg font-bold text-emerald-200">$46.80</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">Governance.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <div className="glow-box p-8 md:p-12 rounded mb-8">
          <h3 className="text-emerald-200 font-bold text-lg mb-6">156 Carriers. 1 Vote Each.</h3>
          
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-500/40 pl-6">
              <p className="text-emerald-400 text-sm font-bold mb-2">Current Phase</p>
              <p className="text-emerald-200">Pre-Launch: Origins whitelist confirmed. 24 Carriers have guaranteed free access.</p>
            </div>

            <div className="border-l-2 border-emerald-500/40 pl-6">
              <p className="text-emerald-400 text-sm font-bold mb-2">Post-Mint Governance</p>
              <p className="text-emerald-200">When all 156 sell: Carriers vote on expansion. Options: Conservative (198), Aggressive (300), Gradual (500), Cap (900), or Organic Only.</p>
            </div>

            <div className="border-l-2 border-emerald-500/40 pl-6">
              <p className="text-emerald-400 text-sm font-bold mb-2">Voting Platform</p>
              <p className="text-emerald-200">X Polls. Transparent. Public results. Every vote counts equally.</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded">
            <p className="text-emerald-300 font-bold mb-2">Phase 2 Governance</p>
            <p className="text-emerald-100/70 text-sm">Carrier votes will decide: artist partnerships, treasury allocation, expansion timeline, even Cytoplasm utility changes. Fully DAO-aligned.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bio-gradient border border-emerald-500/20 p-6 rounded">
            <Lock size={24} className="text-emerald-400 mb-3" />
            <h4 className="text-emerald-200 font-bold mb-2">Treasury Transparency</h4>
            <p className="text-emerald-100/70 text-sm">Public wallet. Monthly reports. Quarterly audits. Community can verify everything on-chain.</p>
          </div>

          <div className="bio-gradient border border-emerald-500/20 p-6 rounded">
            <Zap size={24} className="text-emerald-400 mb-3" />
            <h4 className="text-emerald-200 font-bold mb-2">Anti-Hype Design</h4>
            <p className="text-emerald-100/70 text-sm">No fake urgency. No artificial scarcity. Price increases only when system matures. Organic growth preferred.</p>
          </div>
        </div>
      </section>

      {/* MINT TRACKER */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">Mint Status.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <div className="glow-box p-8 md:p-12 rounded">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { tier: 1, price: "$10.1", supply: "33", status: "TBD" },
              { tier: 2, price: "$20.2", supply: "33", status: "Locked" },
              { tier: 3, price: "$30.3", supply: "33", status: "Locked" },
              { tier: 4, price: "$50.5", supply: "42", status: "Locked" },
            ].map((t, i) => (
              <div key={i} className="bio-gradient border border-emerald-500/20 p-6 rounded text-center">
                <p className="text-emerald-400 text-xs font-bold mb-2">TIER {t.tier}</p>
                <p className="text-2xl font-bold text-emerald-200 mb-2">{t.price}</p>
                <p className="text-xs text-emerald-100/60 mb-3">{t.supply} NFT</p>
                <p className={`text-xs font-bold ${t.status === 'TBD' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {t.status}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-emerald-500/20 pt-8">
            <p className="text-emerald-200 font-bold mb-4">Timeline</p>
            <div className="space-y-3 text-sm">
              <p className="text-emerald-100/70"><span className="text-emerald-400 font-bold">Week 1-2:</span> Tier 1 launch ($10.1). Origins pay free via whitelist.</p>
              <p className="text-emerald-100/70"><span className="text-emerald-400 font-bold">Week 2-4:</span> Tier 2 available ($20.2) when Tier 1 sells 33.</p>
              <p className="text-emerald-100/70"><span className="text-emerald-400 font-bold">Week 4+:</span> Price continues ascending. Governance vote when all tiers near full.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LORE */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">The Five Vials.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <div className="glow-box p-8 md:p-12 rounded">
          <p className="text-emerald-200/80 mb-6 leading-relaxed">
            The laboratory holds five documents. Each unlocks a piece of the mutation. Read slowly. Questions lead to treasure.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {['Vial 1: Origins', 'Vial 2: Evolution', 'Vial 3: The Mutation'].map((vial, i) => (
              <div key={i} className="border border-emerald-500/30 p-6 rounded hover-glow transition-all cursor-pointer">
                <p className="text-emerald-400 font-bold mb-2">{vial}</p>
                <p className="text-emerald-100/60 text-sm">Coming weekly...</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded">
            <p className="text-emerald-300 text-sm">
              <strong>Next release:</strong> Vial 1 drops Nov 28. Read carefully. The answers are in the questions.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">Questions.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <div className="space-y-4 max-w-3xl">
          {[
            {
              q: "What's Cytoplasm?",
              a: "Claimable NFTs earned passively every 30 days. Generated from trading volume of your NFT. Worth ~$1 each on secondary market. Real passive income without crypto volatility."
            },
            {
              q: "How does dual-royalty work?",
              a: "Every time an NFT trades: 15% goes to project. Half that (7.5%) converts to Cytoplasm for holders. Other half (7.5%) funds treasury operations. Both reward holders and sustain the project."
            },
            {
              q: "What's the buy-back guarantee?",
              a: "Standing offer: project buys back Cytoplasm at $1 each. No liquidation pressure. You always have an exit at fair price. This stabilizes the floor."
            },
            {
              q: "How does governance voting work?",
              a: "1 NFT = 1 vote on X Polls. Every major decision (expansion, artist partnerships, treasury allocation) voted by Carriers. Not founder decides. Community decides."
            },
            {
              q: "When's the mint?",
              a: "Launch timing: TBD (tracking organic interest first). Tier 1 at $10.1. Origins get free whitelist access. No rush. Quercia philosophy: slow sustainable growth."
            },
            {
              q: "Is this a security or regulated?",
              a: "Cytoplasm NFTs avoid securities classification by being utility NFTs (claimable items), not investment contracts. Check local regulations, but structure is designed for compliance."
            },
            {
              q: "What happens if I hold and don't trade?",
              a: "You still earn Cytoplasm passively if others trade. But no trading = less royalty volume = less Cytoplasm. System incentivizes organic community trading."
            },
            {
              q: "How do artist partnerships work?",
              a: "At 900 NFT: Community votes on 3 emerging artists. Winners get funding, create custom L3 NFT collections using TheStrainLab organisms. Artists earn royalties. Treasury funds them."
            }
          ].map((item, i) => (
            <div key={i} className="glow-box rounded overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-emerald-500/5 transition-colors"
              >
                <p className="font-bold text-emerald-200">{item.q}</p>
                <ChevronDown 
                  size={20} 
                  className={`text-emerald-400 flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedFaq === i && (
                <div className="px-6 pb-6 border-t border-emerald-500/20">
                  <p className="text-emerald-100/70 leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-32 px-6 md:px-12 max-w-2xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-300 mb-4">Join.</h2>
          <div className="h-1 w-20 bg-emerald-500/40 mb-8" />
        </div>

        <form className="glow-box p-8 md:p-12 rounded space-y-6">
          <div>
            <label className="block text-emerald-300 font-bold mb-2 text-sm">Wallet Address</label>
            <input 
              type="text"
              placeholder="0x..."
              className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded px-4 py-3 text-emerald-200 placeholder-emerald-700/50 focus:outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="block text-emerald-300 font-bold mb-2 text-sm">Twitter Handle</label>
            <input 
              type="text"
              placeholder="@yourhandle"
              className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded px-4 py-3 text-emerald-200 placeholder-emerald-700/50 focus:outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="block text-emerald-300 font-bold mb-2 text-sm">Why TheStrainLab?</label>
            <textarea 
              placeholder="What draws you to this project?"
              rows="4"
              className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded px-4 py-3 text-emerald-200 placeholder-emerald-700/50 focus:outline-none focus:border-emerald-400 resize-none"
            />
          </div>

          <button className="w-full py-3 bg-emerald-500/20 border border-emerald-400 text-emerald-200 font-bold hover:bg-emerald-500/30 hover-glow transition-all">
            Request Whitelist Access
          </button>

          <p className="text-emerald-100/50 text-xs text-center">
            We review applications manually. Genuine interest required.
          </p>
        </form>

        <div className="mt-16 text-center">
          <p className="text-emerald-400 mb-4">Follow for updates</p>
          <div className="flex gap-4 justify-center">
            <a href="https://twitter.com/TheStrainLab" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 transition-colors">
              @TheStrainLab
            </a>
            <a href="https://twitter.com/maximmredfox_" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-emerald-500/30 text-emerald-300 hover:border-emerald-400 transition-colors">
              @maximmredfox_
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-emerald-500/20 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center text-emerald-400/60 text-xs">
          <p>TheStrainLab. Against Mission Obvious.</p>
          <p className="mt-2">Quercia, not ibisco. 🧬</p>
        </div>
      </footer>
    </div>
  );
};

export default TheStrainLab;
