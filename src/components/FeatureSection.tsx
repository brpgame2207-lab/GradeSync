import React from 'react';
import { FileText, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export default function FeatureSection() {
  const features: FeatureItem[] = [
    {
      icon: FileText,
      title: "Handwritten Marks Recognition",
      description: "Automatically extracts handwritten USNs and question-wise marks from standardized answer-booklet formats."
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Error Detection",
      description: "Identifies missing marks, total mismatches, invalid entries, and low-confidence extractions before export."
    },
    {
      icon: ShieldCheck,
      title: "Local & Secure Processing",
      description: "Answer sheets remain within institution-controlled infrastructure. No external AI services are required for processing."
    },
    {
      icon: Zap,
      title: "CONTINUO-Ready Export",
      description: "Generate Excel sheets compatible with existing CONTINUO workflows without changing examination procedures."
    }
  ];

  return (
    <section id="features" className="py-12 md:py-16 px-6 sm:px-8 lg:px-12 bg-[#F7F7F5] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E5E5E0] to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Title */}
        <div className="max-w-3xl mb-10 text-left">
          <span className="font-mono text-xs tracking-widest uppercase text-[#FF6B35] font-bold block mb-3 animate-pulse">
            PLATFORM CAPABILITIES
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A17] tracking-tight leading-tight">
            Designed for <br />
            Modern Registrar Workflows
          </h2>
          <p className="text-[#5C5C54] text-base sm:text-lg font-light mt-6 max-w-xl leading-relaxed">
            Every feature is engineered to remove the bottleneck of traditional university grade entries, guaranteeing accuracy and saving hundreds of faculty hours.
          </p>
        </div>

        {/* Feature Cards Grid with 32px rounded style and lightweight subtle shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#E5E5E0]/60 rounded-[32px] p-8 hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 flex flex-col justify-between group min-h-[180px] shadow-xs"
              >
                <div>
                  
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF3EE] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300 flex items-center justify-center text-[#FF6B35]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-[#1A1A17] text-lg sm:text-xl tracking-tight leading-none">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#5C5C54] text-xs sm:text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

