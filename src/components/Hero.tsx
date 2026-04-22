import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);
const SoundcloudIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-soundcloud">
    <path d="M19.5 8a4.5 4.5 0 0 0-4.5 4.5V17h5a4 4 0 0 0 0-8c-.3 0-.6.1-.9.2a3.5 3.5 0 0 0-.6-1.2h1z"/>
    <path d="M12 9v8"/><path d="M9 10v7"/><path d="M6 12v5"/><path d="M3 14v3"/><path d="M15 11v6"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const socialLinks = [
  { icon: <TiktokIcon />, label: 'TikTok', url: '#' },
  { icon: <Instagram size={18} />, label: 'Instagram', url: '#' },
  { icon: <SoundcloudIcon />, label: 'SoundCloud', url: '#' },
  { icon: <Youtube size={18} />, label: 'YouTube', url: '#' },
  { icon: <FacebookIcon />, label: 'Facebook', url: '#' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0510] pt-16 lg:pt-0">
      
      {/* 1. Background Magic Base */}
      {/* Custom Technical Grid */}
      <div className="absolute inset-0 z-0 bg-[#0A0510] bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] md:bg-[size:6rem_6rem]"></div>
      
      {/* Floating Orbs for "WOW" Premium Effect */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Faded Background Client Image */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] z-0 opacity-15 md:opacity-20 transition-opacity">
         <img 
            src="https://picsum.photos/seed/bgdj2/1920/1080" 
            alt="Fondo Thomas Cossio" 
            className="w-full h-full object-cover mix-blend-screen grayscale" 
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#0A0510] via-[#0A0510]/50 to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#0A0510] via-transparent to-transparent"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-[#0A0510] via-[#0A0510]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-0">
        
        {/* =========================================
            MOBILE LAYOUT (< lg breakpoints)
            Matches the overlapping photo/title mockup
            ========================================= */}
        <div className="w-full flex-col items-center flex lg:hidden mt-10">
          
          {/* Overlapping Art Container */}
          <div className="relative w-full max-w-[420px] h-[480px] sm:h-[550px] mb-8">
            
            {/* Image Card (Top Left) */}
            <motion.div 
               initial={{ opacity: 0, x: -30, rotateZ: -5 }} 
               animate={{ opacity: 1, x: 0, rotateZ: 0 }} 
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="absolute top-0 left-0 w-[78%] h-[380px] sm:h-[450px] z-10"
            >
               {/* Floating Tag */}
               <div className="absolute -top-4 left-6 z-30 bg-primary/20 backdrop-blur-xl border border-primary/40 px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,59,0,0.4)]">
                 <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700] animate-pulse"></span>
                 <span className="font-anton uppercase text-[10px] tracking-widest text-white/90">House - Tech House</span>
               </div>
               
               {/* Image Wrapper */}
               <div className="w-full h-full rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                  <img src="https://picsum.photos/seed/tc-hero/600/800" alt="Thomas Cossio" className="w-full h-full object-cover grayscale-[15%]" />
               </div>
            </motion.div>

            {/* Overlapping Text (Bottom Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-[85%] text-right z-20 pointer-events-none"
            >
               <h1 className="font-anton text-[4rem] sm:text-[5rem] tracking-tight uppercase leading-[0.85] text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                THOMAS
               </h1>
               <h1 className="font-anton text-[3.2rem] sm:text-[4rem] tracking-tight uppercase leading-[0.9] flex items-center justify-end gap-1 sm:gap-2 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                 <span className="text-white font-sans scale-y-125 scale-x-125 mb-1 opacity-90 text-[1.5rem] sm:text-[2rem]">◄◄</span>
                 COSSIO<span className="text-white font-sans scale-y-125 scale-x-125 mb-1 opacity-90 text-[1.5rem] sm:text-[2rem]">►►</span>
               </h1>
            </motion.div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="flex flex-col items-center"
          >
             <a href="#about" className="px-10 py-3.5 rounded-full border border-white/10 text-white/80 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-sm font-semibold tracking-[0.1em] mb-8 bg-black/40 backdrop-blur-md">
               Conoce más
             </a>
             
             {/* Mobile Socials */}
             <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.url} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg bg-black/40 backdrop-blur-md active:scale-95" aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
             </div>
          </motion.div>
        </div>


        {/* =========================================
            DESKTOP LAYOUT (>= lg breakpoints)
            Matches the side-by-side structured mockup
            ========================================= */}
        <div className="hidden lg:flex flex-row items-center justify-between w-full min-h-[80vh] py-20">
          
          {/* Left Hero Text Block */}
          <div className="w-1/2 flex flex-col items-start z-10 pl-2 xl:pl-4">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 mb-10">
              <div className="w-16 h-[1px] bg-white/40"></div>
              <span className="text-white/60 font-mono text-sm tracking-[0.3em] uppercase">Medellín • Colombia</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6 text-white flex flex-col items-start relative text-left w-full">
              <h1 className="font-anton text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem] tracking-tight uppercase leading-[0.85] drop-shadow-2xl">
                THOMAS
              </h1>
              <h1 className="font-anton text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem] tracking-tight uppercase leading-[0.85] flex items-center gap-2 drop-shadow-2xl text-white">
                 <span className="text-white font-sans scale-y-[1.2] scale-x-125 opacity-90 text-[2.5rem] lg:text-[3rem] xl:text-[4rem] tracking-[-0.2em] xl:tracking-normal">◄◄</span>
                 COSSIO<span className="text-white font-sans scale-y-[1.2] scale-x-125 opacity-90 text-[2.5rem] lg:text-[3rem] xl:text-[4rem] tracking-[-0.2em] xl:tracking-normal">►►</span>
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="font-sans font-light text-xl xl:text-2xl text-white/40 tracking-[1.5em] ml-2 mb-12 uppercase">
              D J
            </motion.p>

            <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} href="#about" className="group relative px-10 xl:px-12 py-3.5 xl:py-4 rounded-full overflow-hidden border border-white/20 text-white hover:border-primary transition-all duration-500 text-sm font-semibold tracking-widest mb-16 bg-white/5 backdrop-blur-md">
              <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
              <span className="relative z-10 group-hover:text-white uppercase">Conoce más</span>
            </motion.a>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex gap-4">
               {socialLinks.map((social, i) => (
                  <a key={i} href={social.url} className="group relative w-11 h-11 xl:w-12 xl:h-12 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-all bg-white/5 backdrop-blur-sm border border-white/5 hover:border-primary overflow-hidden" aria-label={social.label}>
                    <div className="absolute inset-0 bg-primary/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">{social.icon}</div>
                  </a>
               ))}
            </motion.div>
          </div>

          {/* Right Image Card Block */}
          <motion.div initial={{ opacity: 0, x: 50, rotateY: -5 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }} style={{ perspective: 1000 }} className="w-1/2 flex justify-end relative z-10 pr-2 xl:pr-0">
             <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative w-full max-w-[380px] xl:max-w-[450px] aspect-[3/4.2] rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10 origin-center">
                 
                 {/* Floating Label */}
                 <div className="absolute -top-5 -right-5 xl:-top-6 xl:-right-6 z-30 bg-[#0A0510]/80 backdrop-blur-xl border border-primary/40 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full flex items-center gap-2 shadow-[0_0_25px_rgba(255,59,0,0.3)] hover:scale-105 transition-transform cursor-default">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700] animate-pulse"></span>
                    <span className="font-anton font-bold uppercase text-[10px] xl:text-xs tracking-widest text-white/90">House • Tech House</span>
                 </div>
                 
                 {/* Premium Image Wrapper */}
                 <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group bg-dark/20">
                     <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0510]/80 to-transparent z-10 pointer-events-none"></div>
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
                     <img src="https://picsum.photos/seed/tc-hero/600/800" alt="Thomas Cossio" className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700" />
                     
                     {/* Glass Overlay Effects */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 z-10 pointer-events-none rounded-[2.5rem]"></div>
                     <div className="absolute top-0 bottom-0 left-[-100%] w-[50%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out z-20 pointer-events-none"></div>
                 </div>

                 {/* Glowing accents */}
                 <div className="absolute top-1/4 -left-6 w-3 h-3 rounded-full bg-primary/80 shadow-[0_0_20px_#FF3B00] animate-[pulse_3s_infinite]"></div>
             </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Optimized CSS Equalizer / Soundwaves Background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 lg:h-28 opacity-[0.15] lg:opacity-20 pointer-events-none flex items-end justify-center px-1 md:px-4 z-0 gap-[2px] md:gap-1 overflow-hidden">
         <style>{`
           @keyframes eqWave {
             0% { transform: scaleY(0.1); }
             50% { transform: scaleY(1); }
             100% { transform: scaleY(0.1); }
           }
         `}</style>
         {Array.from({length: 60}).map((_, i) => (
            <div 
               key={i} 
               className="flex-1 max-w-[4px] md:max-w-[8px] lg:max-w-[12px] bg-gradient-to-t from-primary/50 to-white origin-bottom rounded-t-sm"
               style={{ 
                  animation: `eqWave ${Math.random() * 1.5 + 0.8}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  height: `${Math.random() * 60 + 40}%`,
               }}
            />
         ))}
      </div>

    </section>
  );
}
