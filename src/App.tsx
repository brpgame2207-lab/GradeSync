import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, RefreshCw, ArrowLeft, Mail, Lock, Shield, UserPlus, GraduationCap } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import WorkflowSection from './components/WorkflowSection';
import Footer from './components/Footer';
import logoUrl from './assets/logo.png';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'signin'>('home');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  // Cycle through 3 frames every 2.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(i => (i + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const triggerSignIn = () => {
    setCurrentView('signin');
    setAuthMode('signin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToWorkflow = () => {
    const el = document.getElementById('workflow');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'signin') {
      if (!email || !password) return;
    } else {
      if (!email || !password || !name || !college || password !== confirmPassword) return;
    }
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setCollege('');
    setConfirmPassword('');
    setSent(false);
    setAuthMode('signin');
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] font-sans antialiased selection:bg-[#FF6B35]/20 text-[#1A1A17] flex flex-col justify-between">
      
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow"
          >
            {/* Main Page Core Bodies */}
            <main className="flex-grow">
              {/* Massive Headline Hero Showcase Section */}
              <HeroSection 
                onSignIn={triggerSignIn} 
                onSeeWorkflow={scrollToWorkflow} 
              />

              {/* Lightweight Editorial Feature Cards Block */}
              <FeatureSection />

              {/* Four step procedural academic Workflow walkthrough */}
              <WorkflowSection />
            </main>

            {/* Footer only on home page */}
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="signin"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="flex-grow flex flex-col justify-center py-12 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
          >
            {/* Ambient background glows for the dedicated sign-in page */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-200/30 via-orange-100/15 to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
              
              {/* Sleek top Navigation Header */}
              <div className="flex items-center justify-between mb-12">
                <button
                  onClick={() => {
                    resetForm();
                    setCurrentView('home');
                  }}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 hover:bg-white border border-[#E5E5E0] hover:border-[#FF6B35]/40 rounded-full text-xs font-mono font-bold text-[#1A1A17] tracking-wider uppercase transition-all shadow-sm group cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-[#FF6B35] group-hover:-translate-x-1 transition-transform" />
                  <span>BACK</span>
                </button>

                <div className="flex items-center select-none space-x-2">
                  <img src={logoUrl} alt="Entrix" className="h-8 w-auto object-contain mix-blend-multiply rounded-lg" />
                  <span className="text-sm tracking-tight text-[#1A1A17] uppercase" style={{ fontFamily: '"Black Ops One", system-ui' }}>ENTRIX</span>
                </div>
              </div>

              {/* Main Auth grid layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left informational column – fully animated, all 4 frames same size */}
                <div className="lg:col-span-6 text-left max-w-xl lg:max-w-none">
                  <div className="relative h-52 overflow-hidden">
                    <AnimatePresence mode="wait">

                      {/* Frame 0: Access Your Institutional Workspace */}
                      {slideIndex === 0 && (
                        <motion.div
                          key="slide0"
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -40 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 flex flex-col justify-center"
                        >
                          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A17] leading-[1.05] tracking-tight">
                            Access Your Institutional Workspace
                          </h2>
                        </motion.div>
                      )}

                      {/* Frame 1: Stop Spending Hours On Marks Entry */}
                      {slideIndex === 1 && (
                        <motion.div
                          key="slide1"
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -40 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 flex flex-col justify-center"
                        >
                          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A17] leading-[1.05] tracking-tight">
                            Stop Spending Hours
                          </h2>
                          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#FF6B35] leading-[1.05] tracking-tight">
                            On Marks Entry
                          </h2>
                        </motion.div>
                      )}

                      {/* Frame 2: Upload → Validate → Export */}
                      {slideIndex === 2 && (
                        <motion.div
                          key="slide2"
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -40 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 flex flex-wrap items-center gap-3"
                        >
                          {['Upload', 'Validate', 'Export'].map((word, i) => (
                            <React.Fragment key={word}>
                              <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.13, duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                                className="px-5 py-3 bg-[#1A1A17] text-white font-display font-black text-xl sm:text-2xl rounded-2xl tracking-tight"
                              >
                                {word}
                              </motion.span>
                              {i < 2 && (
                                <span className="text-[#FF6B35] font-black text-3xl select-none">→</span>
                              )}
                            </React.Fragment>
                          ))}
                        </motion.div>
                      )}

                      {/* Frame 3: 😊 */}
                      {slideIndex === 3 && (
                        <motion.div
                          key="slide3"
                          initial={{ opacity: 0, scale: 0.3 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.3 }}
                          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <span className="select-none" style={{ fontSize: '10rem', lineHeight: 1 }} role="img" aria-label="happy">😊</span>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>
                </div>

                {/* Right portal login card */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                  <div className="w-full max-w-md bg-white border border-[#E5E5E0] rounded-[36px] p-8 sm:p-10 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-orange-500 via-[#FF6B35] to-amber-500" />
                    
                    {sent ? (
                      <div className="py-10 text-center flex flex-col items-center justify-center space-y-6">
                        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-200">
                          <CheckCircle2 className="w-8 h-8 text-emerald-500 animate-bounce" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-display font-black text-[#1A1A17] text-2xl tracking-tight">
                            {authMode === 'signin' ? 'Access Granted' : 'Account Created'}
                          </h3>
                          <p className="text-xs text-[#5C5C54] max-w-sm mx-auto leading-relaxed font-medium">
                            {authMode === 'signin' ? (
                              <>Welcome back. You have successfully authenticated as <span className="font-semibold text-orange-600">{email}</span>. Establishing secure workspace.</>
                            ) : (
                              <>Welcome aboard. Your coordinator account for <span className="font-semibold text-orange-600">{email}</span> at <span className="font-semibold text-orange-600">{college}</span> has been provisioned.</>
                            )}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            resetForm();
                            setCurrentView('home');
                          }}
                          className="px-8 py-3 bg-[#1A1A17] hover:bg-[#FF6B35] rounded-full text-xs font-mono font-bold text-white tracking-wider uppercase transition-all cursor-pointer shadow-md"
                        >
                          Enter Portal
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleAuthSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-[#E5E5E0] px-3 py-1 rounded-full">
                            <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                            <span className="font-mono text-[9px] tracking-wider uppercase text-[#5C5C54] font-bold">
                              {authMode === 'signin' ? 'FACULTY PORTAL' : 'COORDINATOR REGISTRATION'}
                            </span>
                          </div>
                          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1A1A17] tracking-tight">
                            {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
                          </h3>
                          <p className="text-[#5C5C54] text-xs font-light leading-relaxed">
                            {authMode === 'signin' 
                              ? 'Enter your academic credentials below to access and manage marks.' 
                              : 'Create your institutional coordinator credentials to deploy custom spreadsheets.'}
                          </p>
                        </div>

                        <div className="space-y-4">
                          {/* Name for Sign Up only */}
                          {authMode === 'signup' && (
                            <div className="space-y-2">
                              <label className="font-mono text-[9px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1.5">
                                <UserPlus className="w-3.5 h-3.5 text-gray-400" />
                                <span>Full Name</span>
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="Dr. ABC"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E5E5E0] focus:border-[#FF6B35] rounded-xl font-sans text-xs focus:outline-none transition-all shadow-inner focus:bg-white"
                              />
                            </div>
                          )}

                          {/* Institution/Department for Sign Up only */}
                          {authMode === 'signup' && (
                            <div className="space-y-2">
                              <label className="font-mono text-[9px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1.5 font-medium">
                                <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                                <span>Institution / Department</span>
                              </label>
                              <input 
                                type="text"
                                required
                                placeholder="Department of Physics, Stanford"
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                                className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E5E5E0] focus:border-[#FF6B35] rounded-xl font-sans text-xs focus:outline-none transition-all shadow-inner focus:bg-white"
                              />
                            </div>
                          )}

                          {/* Email */}
                          <div className="space-y-2">
                            <label className="font-mono text-[9px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1.5 font-medium">
                              <Mail className="w-3.5 h-3.5 text-gray-400" />
                              <span>Academic Email</span>
                            </label>
                            <input 
                              type="email"
                              required
                              placeholder="professor@university.edu"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E5E5E0] focus:border-[#FF6B35] rounded-xl font-sans text-xs focus:outline-none transition-all shadow-inner focus:bg-white"
                            />
                          </div>

                          {/* Password */}
                          <div className="space-y-2">
                            <label className="font-mono text-[9px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1.5 font-medium">
                              <Lock className="w-3.5 h-3.5 text-gray-400" />
                              <span>Password</span>
                            </label>
                            <input 
                              type="password"
                              required
                              placeholder="••••••••"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full px-4 py-3 bg-[#F7F7F5] border border-[#E5E5E0] focus:border-[#FF6B35] rounded-xl font-sans text-xs focus:outline-none transition-all shadow-inner focus:bg-white"
                            />
                          </div>

                          {/* Confirm Password for Sign Up only */}
                          {authMode === 'signup' && (
                            <div className="space-y-2">
                              <label className="font-mono text-[9px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1.5 font-medium">
                                <Lock className="w-3.5 h-3.5 text-gray-400" />
                                <span>Confirm Password</span>
                              </label>
                              <input 
                                type="password"
                                required
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full px-4 py-3 bg-[#F7F7F5] border ${confirmPassword && password !== confirmPassword ? 'border-red-500 focus:border-red-500' : 'border-[#E5E5E0] focus:border-[#FF6B35]'} rounded-xl font-sans text-xs focus:outline-none transition-all shadow-inner focus:bg-white`}
                              />
                              {confirmPassword && password !== confirmPassword && (
                                <p className="text-[10px] text-red-500 font-medium">Passwords do not match</p>
                              )}
                            </div>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={sending || (authMode === 'signup' && confirmPassword !== '' && password !== confirmPassword)}
                          className="w-full py-4 rounded-xl bg-[#1A1A17] hover:bg-[#FF6B35] text-white font-bold text-xs tracking-wider uppercase font-mono transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          {sending ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              <span>{authMode === 'signin' ? 'Authenticating...' : 'Processing...'}</span>
                            </>
                          ) : (
                            <span>{authMode === 'signin' ? 'Access Workspace' : 'Create Account'}</span>
                          )}
                        </button>

                        {/* Sign In vs Sign Up Toggle Option */}
                        <div className="pt-2 text-center border-t border-[#E5E5E0]/60">
                          {authMode === 'signin' ? (
                            <p className="text-xs text-[#5C5C54]">
                              Don't have an account?{' '}
                              <button
                                type="button"
                                onClick={() => {
                                  setAuthMode('signup');
                                  setConfirmPassword('');
                                }}
                                className="font-mono font-extrabold text-[#FF6B35] hover:underline hover:text-black transition-all bg-transparent border-none p-0 cursor-pointer ml-1 select-none"
                              >
                                SIGN-UP
                              </button>
                            </p>
                          ) : (
                            <p className="text-xs text-[#5C5C54]">
                              Already have an account?{' '}
                              <button
                                type="button"
                                onClick={() => {
                                  setAuthMode('signin');
                                  setConfirmPassword('');
                                }}
                                className="font-mono font-extrabold text-[#FF6B35] hover:underline hover:text-black transition-all bg-transparent border-none p-0 cursor-pointer ml-1 select-none"
                              >
                                SIGN-IN
                              </button>
                            </p>
                          )}
                        </div>
                      </form>
                    )}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
