import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E5E5E0] py-16 px-6 sm:px-8 lg:px-12 relative text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* Left Column side info */}
        <div className="space-y-4 max-w-xl">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-[#1A1A17] flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-sm tracking-tight text-[#1A1A17]">
                GradeSync
              </span>
              <span className="font-mono text-[8px] tracking-widest uppercase text-[#FF6B35] font-bold leading-none">
                ERP AUTOMATION
              </span>
            </div>
          </div>

          <p className="text-xs text-[#5C5C54] font-light leading-relaxed">
            Eliminating clerical overhead, preventing database alignment typos, and releasing faculty back to high-grade academic research.
          </p>
        </div>

        <div className="text-left md:text-right space-y-2 shrink-0">
          <p className="font-mono text-[10px] text-gray-400">
            © {new Date().getFullYear()} GradeSync Laboratories Inc. All rights reserved.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#E5E5E0]/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-[#5C5C54] uppercase tracking-widest">
        <span>Designed with precision for top-tier academic networks</span>
        <span className="flex items-center space-x-1">
          <span>Staging Server Status:</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span className="text-emerald-600 font-bold">Online</span>
        </span>
      </div>

    </footer>
  );
}
