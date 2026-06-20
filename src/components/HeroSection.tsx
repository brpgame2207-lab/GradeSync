import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, CheckSquare, Scan, RefreshCw, Layers, CheckCircle, AlertTriangle, Play } from 'lucide-react';

interface HeroSectionProps {
  onSignIn: () => void;
  onSeeWorkflow: () => void;
}

export default function HeroSection({ onSignIn, onSeeWorkflow }: HeroSectionProps) {
  // Spotlight mappings (percentage within the button area)
  const [pos1, setPos1] = useState({ x: 50, y: 50 });
  const [pos2, setPos2] = useState({ x: 50, y: 50 });

  // Elastic 3D Parallax using Framer Motion springs
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);
  const springX1 = useSpring(x1, { stiffness: 180, damping: 22 });
  const springY1 = useSpring(y1, { stiffness: 180, damping: 22 });
  const rotateX1 = useTransform(springY1, [-120, 120], [15, -15]);
  const rotateY1 = useTransform(springX1, [-120, 120], [-15, 15]);

  // Dual-layer soft caustics shadows moving realistically in opposite parallax offset
  const causticX1 = useTransform(springX1, [-120, 120], [18, -18]);
  const causticY1 = useTransform(springY1, [-120, 120], [18, -18]);

  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const springX2 = useSpring(x2, { stiffness: 180, damping: 22 });
  const springY2 = useSpring(y2, { stiffness: 180, damping: 22 });
  const rotateX2 = useTransform(springY2, [-120, 120], [15, -15]);
  const rotateY2 = useTransform(springX2, [-120, 120], [-15, 15]);

  const causticX2 = useTransform(springX2, [-120, 120], [18, -18]);
  const causticY2 = useTransform(springY2, [-120, 120], [18, -18]);

  const handleMouseMove1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xVal = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;
    x1.set(xVal);
    y1.set(yVal);

    // Spotlight mapping percentage
    const spotX = ((e.clientX - rect.left) / rect.width) * 100;
    const spotY = ((e.clientY - rect.top) / rect.height) * 100;
    setPos1({ x: spotX, y: spotY });
  };

  const handleMouseLeave1 = () => {
    x1.set(0);
    y1.set(0);
    setPos1({ x: 50, y: 50 });
  };

  const handleMouseMove2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xVal = e.clientX - rect.left - rect.width / 2;
    const yVal = e.clientY - rect.top - rect.height / 2;
    x2.set(xVal);
    y2.set(yVal);

    // Spotlight mapping percentage
    const spotX = ((e.clientX - rect.left) / rect.width) * 100;
    const spotY = ((e.clientY - rect.top) / rect.height) * 100;
    setPos2({ x: spotX, y: spotY });
  };

  const handleMouseLeave2 = () => {
    x2.set(0);
    y2.set(0);
    setPos2({ x: 50, y: 50 });
  };
  return (
    <section className="relative overflow-hidden pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10 px-6 sm:px-8 lg:px-12 bg-[#F7F7F5]">
      
      {/* Background Soft Blurred Shapes / Ambient Gradient Circles */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-100/40 via-orange-100/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-orange-100/30 via-cream-100/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute right-[20%] bottom-[10%] w-[350px] h-[350px] rounded-full bg-orange-50/40 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Editorial Typography & Copy */}
        <div className="lg:col-span-6 flex flex-col space-y-8 text-left max-w-2xl lg:max-w-none">
          
          {/* Subtle Tagline Accent */}
          <div className="inline-flex items-center space-x-2 bg-white/85 border border-[#E5E5E0] px-4 py-1.5 rounded-full w-fit shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-[#FF6B35] animate-pulse" />
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#5C5C54] font-medium">
              Eliminate Manual Grade Entry
            </span>
          </div>

          {/* Huge Hero Headline (3-4 lines, dominating typography) */}
          <h1 className="font-display font-black text-[#1A1A17] text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[0.92] tracking-tighter">
            Faculty Time <br className="hidden sm:inline" />
            <span className="text-[#1A1A17] relative inline-block">
              Belongs To Teaching
            </span> <br />
            <span className="text-[#FF6B35]">
              Not Data Entry
            </span>
          </h1>

          {/* Short product description: Max 2 lines */}
          <p className="text-[#5C5C54] text-base sm:text-lg leading-relaxed max-w-lg font-medium">
            <span className="line-through decoration-[#FF3B30] decoration-3 text-[#3A3A35] font-bold text-lg sm:text-xl tracking-wide mr-2 inline-block">
              TYPING MARKS MANUALLY
            </span>
            <br />
            Reduce hours of manual marks entry to a few minutes by converting evaluated answer sheets into CONTINUO-ready spreadsheets
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-3 relative z-20">
            {/* BUTTON 1: Sign In (Champagne Glass & Parallax) */}
            <div className="relative flex items-center justify-center w-full sm:w-auto">
              {/* Refractive Wireframes behind Button 1 */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 overflow-hidden">
                <svg className="w-[180px] h-[90px] text-neutral-400" viewBox="0 0 200 100">
                  <circle cx="100" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                  <circle cx="100" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <circle cx="100" cy="50" r="64" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="20" y1="50" x2="180" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="100" y1="10" x2="100" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Caustics Shadow below (Moves realistically in opposite parallax offset) */}
              <motion.div 
                style={{ 
                  x: causticX1, 
                  y: causticY1,
                }}
                className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-orange-500/25 via-orange-400/15 to-amber-500/20 blur-xl opacity-80 pointer-events-none group-hover/btn1:opacity-100 transition-all duration-300"
              />

              {/* Glass Button Frame */}
              <motion.button
                onClick={onSignIn}
                onMouseMove={handleMouseMove1}
                onMouseLeave={handleMouseLeave1}
                style={{
                  rotateX: rotateX1,
                  rotateY: rotateY1,
                  background: `radial-gradient(circle at ${pos1.x}% ${pos1.y}%, rgba(254, 215, 170, 0.85) 0%, rgba(251, 146, 60, 0.55) 50%, rgba(249, 115, 22, 0.3) 100%)`,
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                  backdropFilter: 'blur(28px) saturate(160%) contrast(110%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(160%) contrast(110%)',
                  border: '1px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: `
                    inset 0 2px 4px 0 rgba(255, 255, 255, 0.95),
                    inset 0 6px 14px 0 rgba(255, 255, 255, 0.4),
                    inset 0 -6px 14px 0 rgba(249, 115, 22, 0.35),
                    inset 0 16px 24px 0 rgba(255, 255, 255, 0.25),
                    0 12px 24px -6px rgba(249, 115, 22, 0.25),
                    0 3px 6px -1px rgba(0, 0, 0, 0.04)
                  `,
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 450, damping: 20 }}
                className="relative w-full sm:w-auto px-10 py-4 rounded-full font-sans font-bold text-lg select-none flex items-center justify-center space-x-2.5 overflow-hidden transition-shadow duration-300 animate-glass-float group/btn1"
              >
                {/* 3D Liquid Edge Highlight (Top lip) */}
                <span className="absolute top-[1.5px] left-[10%] right-[10%] h-[3px] rounded-full bg-gradient-to-r from-transparent via-white/95 to-transparent blur-[0.3px] pointer-events-none" />
                
                {/* 3D Edge Refraction (Bottom lip) */}
                <span className="absolute bottom-[2px] left-[15%] right-[15%] h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-[#FFF0E2]/25 to-transparent blur-[0.2px] pointer-events-none" />

                {/* Specular Glare streak */}
                <span className="absolute top-1 left-2 w-4 h-4 rounded-full bg-white/70 blur-[0.5px] pointer-events-none" />

                {/* Content */}
                <span className="relative z-10 flex items-center space-x-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.95)] text-[#3E352C]">
                  <span>SIGN-IN</span>
                  <ArrowRight className="w-5 h-5 text-[#FF6B35] group-hover/btn1:translate-x-1.5 transition-transform duration-300" />
                </span>
              </motion.button>
            </div>

            {/* BUTTON 2: See Workflow (Smoky Crystal Glass & Parallax) */}
            <div className="relative flex items-center justify-center w-full sm:w-auto">
              {/* Refractive Wireframes behind Button 2 */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 overflow-hidden">
                <svg className="w-[180px] h-[90px] text-neutral-400" viewBox="0 0 200 100">
                  <circle cx="100" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                  <circle cx="100" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <circle cx="100" cy="50" r="64" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="20" y1="50" x2="180" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="100" y1="10" x2="100" y2="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>
              </div>

              {/* Caustics Shadow overlay */}
              <motion.div 
                style={{ 
                  x: causticX2, 
                  y: causticY2,
                }}
                className="absolute -inset-2.5 rounded-full bg-neutral-900/10 blur-xl opacity-60 pointer-events-none group-hover/btn2:opacity-90 transition-all duration-300"
              />

              {/* Glass Button Frame */}
              <motion.button
                onClick={onSeeWorkflow}
                onMouseMove={handleMouseMove2}
                onMouseLeave={handleMouseLeave2}
                style={{
                  rotateX: rotateX2,
                  rotateY: rotateY2,
                  background: `radial-gradient(circle at ${pos2.x}% ${pos2.y}%, rgba(255, 255, 255, 0.6) 0%, rgba(245, 245, 240, 0.3) 50%, rgba(220, 220, 215, 0.15) 100%)`,
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                  backdropFilter: 'blur(20px) saturate(120%) contrast(100%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(120%) contrast(100%)',
                  border: '1px solid rgba(255, 255, 255, 0.65)',
                  boxShadow: `
                    inset 0 1.5px 3px 0 rgba(255, 255, 255, 0.8),
                    inset 0 5px 12px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -5px 10px 0 rgba(140, 140, 135, 0.1),
                    inset 0 14px 20px 0 rgba(255, 255, 255, 0.1),
                    0 10px 22px -6px rgba(90, 90, 85, 0.15),
                    0 2px 5px -1px rgba(0, 0, 0, 0.03)
                  `,
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 450, damping: 20 }}
                className="relative w-full sm:w-auto px-10 py-4 rounded-full font-sans font-bold text-lg select-none flex items-center justify-center space-x-2.5 overflow-hidden transition-shadow duration-300 animate-glass-float group/btn2"
              >
                {/* Top edge lip highlight */}
                <span className="absolute top-[1.5px] left-[10%] right-[10%] h-[2.5px] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[0.4px] pointer-events-none" />

                {/* Specular glare streak */}
                <span className="absolute top-1 left-2 w-3.5 h-3.5 rounded-full bg-white/45 blur-[0.5px] pointer-events-none" />

                {/* Button content */}
                <span className="relative z-10 flex items-center space-x-2 drop-shadow-[0_1px_1.5px_rgba(255,255,255,0.95)] text-[#5F5F58]">
                  <Play className="w-4 h-4 text-[#FF6B35] fill-[#FF6B35] group-hover/btn2:scale-110 transition-transform duration-300" />
                  <span>See Workflow</span>
                </span>
              </motion.button>
            </div>
          </div>

          {/* Bullet proofs */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 pt-4 font-mono text-[11px] text-[#8A8A80]">
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>99.8% OCR Accuracy</span>
            </div>
          </div>

        </div>

        {/* Right Side: Floating Stacked Product Showcase */}
        {/* We use perspective-1000 and custom rotations/depths to map floating dynamic cards with beautiful overlays */}
        <div className="lg:col-span-6 h-[400px] md:h-[450px] lg:h-[500px] w-full relative flex items-center justify-center select-none pt-12 lg:pt-0">
          
          {/* Main Visual Frame Layer */}
          <div className="relative w-full max-w-[460px] h-[380px] md:h-[420px] perspective-[1200px] flex items-center justify-center">

            {/* CARD 1: Original Marksheet Card (Bottom layer, tilted far right) */}
            <motion.div
              style={{ '--rot': '12deg' } as React.CSSProperties}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[280px] bg-white border border-[#E5E5E0]/60 rounded-2xl p-4 shadow-md origin-center z-[11] translate-x-12 translate-y-16 rotate-12 select-none pointer-events-none"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
                <span className="font-mono text-[9px] text-gray-400">PHYSICAL EXAM PAPER</span>
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-500">Q1 Max 10:</span>
                  <span className="font-display font-extrabold text-[#1A1A17] text-md bg-[#FFF3EE] px-2 py-0.5 rounded text-right text-[#FF6B35]">08</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-500">Q2 Max 20:</span>
                  <span className="font-display font-extrabold text-[#1A1A17] text-md bg-[#FFF3EE] px-2 py-0.5 rounded text-right text-[#FF6B35]">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gray-500">Q3 Max 20:</span>
                  <span className="font-display font-extrabold text-[#1A1A17] text-md bg-[#FFF3EE] px-2 py-0.5 rounded text-right text-[#FF6B35]">15</span>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-gray-600">Total Marks:</span>
                  <span className="font-mono text-sm font-bold text-[#1A1A17]">41 / 50</span>
                </div>
              </div>
              <div className="mt-3 flex justify-center">
                <div className="border border-dashed border-[#FF6B35]/20 bg-[#FFF3EE] rounded-lg py-1 px-3 text-[9px] font-mono text-[#FF6B35] flex items-center space-x-1">
                  <span>Paper ID: PHYS-2026-04</span>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: OCR Extraction Process Card (Left bottom middle layer) */}
            <motion.div
              style={{ '--rot': '-8deg' } as React.CSSProperties}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[300px] bg-white border border-[#E5E5E0] rounded-2xl p-5 shadow-lg origin-center z-[12] -translate-x-6 translate-y-10 -rotate-6 select-none pointer-events-none"
            >
              <div className="flex items-center space-x-2 border-b border-gray-100 pb-3 mb-3">
                <div className="p-1 rounded bg-[#FFF3EE] text-[#FF6B35]">
                  <Scan className="w-4 h-4" />
                </div>
                <span className="font-display font-bold text-xs text-[#1A1A17]">AI OCR Extraction</span>
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  {/* Neon laser bar scanning simulation */}
                  <div className="absolute top-[20%] left-[-2%] right-[-2%] h-0.5 bg-[#FF6B35]/70 shadow-[0_0_8px_#FF6B35] animate-pulse" />
                  <div className="flex justify-between items-center text-[10px] font-mono p-1.5 rounded bg-[#F7F7F5] border border-[#E5E5E0]">
                    <span className="text-[#5C5C54]">Extracted Score</span>
                    <span className="text-[#1A1A17] font-bold">41</span>
                    <span className="text-emerald-600 bg-emerald-50 px-1 rounded">99.4% conf</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono p-1.5 rounded bg-[#F7F7F5] border border-red-100 flex items-center justify-between">
                  <span className="text-red-500 flex items-center space-x-1">
                    <AlertTriangle className="w-3 h-3 text-red-500 shrink-0" />
                    <span>Roll No Match</span>
                  </span>
                  <span className="font-bold text-gray-700">92% conf</span>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: ERP Sync / Submission Channel (Center, floating high, tilted left) */}
            <motion.div
              style={{ '--rot': '3deg' } as React.CSSProperties}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[330px] bg-white border-2 border-[#FF6B35]/40 rounded-2xl p-5 shadow-xl origin-center z-[15] translate-y-[-20px] translate-x-[5px] rotate-[1.5deg]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded bg-[#FFF3EE] text-[#FF6B35]">
                    <RefreshCw className="w-4 h-4 animate-spin" style={{ animationDuration: '4s' }} />
                  </div>
                  <span className="font-display font-extrabold text-sm text-[#1A1A17]">Gradebook</span>
                </div>
                <span className="text-[9px] font-mono tracking-wider font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                  Analysing
                </span>
              </div>

              {/* ERP payload status */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-[#F7F7F5] border border-[#E5E5E0] space-y-1">
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Course:</span>
                    <span className="text-[#1A1A17] font-semibold">MATH-302-Fall26</span>
                  </div>
                </div>

                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#FF6B35] h-full w-[84%] rounded-full" />
                </div>
                
                <div className="flex justify-between items-center text-[10px] text-gray-400">
                  <span>Data mapping...</span>
                  <span className="font-bold text-[#1A1A17]">42 of 50 student records complete</span>
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Faculty Approval Card (Floating Top-Right layer) */}
            <motion.div
              style={{ '--rot': '-15deg' } as React.CSSProperties}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[280px] bg-white border border-[#E5E5E0] rounded-2xl p-4 shadow-lg origin-center z-[14] translate-x-16 translate-y-[-70px] -rotate-12 select-none pointer-events-none"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center text-white">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span className="font-display font-extrabold text-xs text-[#1A1A17]">Faculty Approval</span>
              </div>

              <div className="space-y-2 mt-3 font-mono text-[10px]">
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Dean Signature:</span>
                  <span className="text-[#1A1A17] font-bold">DR. ELENA R.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status Code:</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">VERIFIED_APPROVED</span>
                </div>
              </div>
            </motion.div>

            {/* CARD 5: Integrity & Compliance Verification Card (Top Left layer) */}
            <motion.div
              style={{ '--rot': '10deg' } as React.CSSProperties}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[240px] bg-white border border-[#E5E5E0] rounded-2xl p-4 shadow-md origin-center z-[13] -translate-x-16 translate-y-[-75px] rotate-6 select-none pointer-events-none"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-display font-bold text-[11px] text-[#1A1A17]">Compliance & Safety</span>
                <span className="text-[#FF6B35] text-[10px] font-mono font-bold uppercase">FERPA APPROVED</span>
              </div>
              <div className="w-full bg-[#F7F7F5] p-2 rounded-lg border border-[#E5E5E0] font-mono text-[9px] text-[#5C5C54] space-y-1">
                <div className="flex justify-between">
                  <span>SSN Masking:</span>
                  <span className="text-emerald-600 font-bold">ACTIVE</span>
                </div>
                <div className="flex justify-between">
                  <span>Encryption:</span>
                  <span className="text-[#1A1A17]">AES-256</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}
