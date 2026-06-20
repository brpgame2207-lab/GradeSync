import { Scan, RefreshCw, Layers, ShieldAlert, ArrowRight } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      id: "01",
      icon: Scan,
      title: "Upload Answer Sheets",
      desc: "Upload scanned answer-booklet front pages as a PDF along with the CONTINUO Excel template. The platform automatically prepares the files for processing without changing your existing workflow."
    },
    {
      id: "02",
      icon: Layers,
      title: "Intelligent Marks Extraction",
      desc: "The system reads handwritten USNs and question-wise marks from predefined answer-booklet grids. Fixed-layout recognition ensures high accuracy across all departments."
    },
    {
      id: "03",
      icon: ShieldAlert,
      title: "Automatic Validation",
      desc: "Built-in verification checks totals, missing entries, invalid marks, and USN mismatches. Low-confidence records are highlighted for quick faculty review."
    },
    {
      id: "04",
      icon: RefreshCw,
      title: "One-click Ready Export",
      desc: "Generate a fully populated Excel sheet compatible with CONTINUO. Review flagged entries, download the file, and upload it directly to the ERP."
    }
  ];

  return (
    <section id="workflow" className="py-12 md:py-16 px-6 sm:px-8 lg:px-12 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E5E5E0] to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Step Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FF6B35] font-bold block">
            HOW IT WORKS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A17] tracking-tight">
            Paper to ERP in Four Air steps
          </h2>
          <p className="text-[#5C5C54] text-sm sm:text-base font-light leading-relaxed">
            Eliminate hours of manual data transcription and prevent the critical typos typical of manual academic database updates.
          </p>
        </div>

        {/* Diagonal or Timeline Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          
          {/* Connector Line in Background for desktop */}
          <div className="hidden lg:block absolute top-[45%] left-10 right-10 h-0.5 border-t border-dashed border-[#E5E5E0] z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F7F7F5] border border-[#E5E5E0] rounded-[24px] p-8 hover:bg-white hover:shadow-lg transition-all duration-300 relative z-10 group"
              >
                
                {/* Step number on Top Right */}
                <div className="absolute top-6 right-8 font-mono text-2xl font-black text-[#FF6B35]/25 group-hover:text-[#FF6B35]/45 transition-colors">
                  {step.id}
                </div>

                {/* Circle Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E5E0] flex items-center justify-center text-[#1A1A17] mb-8 group-hover:border-[#FF6B35] group-hover:bg-[#FFF3EE] group-hover:text-[#FF6B35] transition-all duration-300">
                  <Icon className="w-5.5 h-5.5" />
                </div>

                {/* Title and desc */}
                <h3 className="font-display font-extrabold text-[#1A1A17] text-base sm:text-lg tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[#5C5C54] text-xs sm:text-sm font-light leading-relaxed">
                  {step.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
