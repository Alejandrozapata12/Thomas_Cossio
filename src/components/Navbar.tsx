import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, User, Disc, Video, Image as ImageIcon, FolderArchive, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home', icon: <Home size={16} /> },
    { name: 'Sobre Mí', href: '#about', icon: <User size={16} /> },
    { name: 'Servicios', href: '#services', icon: <Disc size={16} /> },
    { name: 'Videos', href: '#videos', icon: <Video size={16} /> },
    { name: 'Galería', href: '#gallery', icon: <ImageIcon size={16} /> },
    { name: 'Recursos', href: '#resources', icon: <FolderArchive size={16} /> },
    { name: 'Contacto', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 glass-panel border-b border-white/10' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-display font-bold tracking-tighter uppercase relative z-50">
            Thomas<span className="text-primary">Cossio</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-white/60 hover:text-primary transition-colors"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
             <a href="#contact" className="px-6 py-2.5 rounded-full border border-primary/50 text-primary uppercase text-xs tracking-[0.2em] font-bold hover:bg-primary hover:text-white transition-all duration-300">
               Booking
             </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white relative z-50 p-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-5 flex flex-col justify-between items-end overflow-hidden">
               <span 
                 className={`h-0.5 bg-white transition-all duration-300 ease-in-out block ${
                   mobileMenuOpen ? "w-7 absolute top-1/2 -translate-y-1/2 rotate-45" : "w-7"
                 }`} 
               />
               <span 
                 className={`h-0.5 bg-primary transition-all duration-300 ease-in-out block ${
                   mobileMenuOpen ? "w-0 opacity-0" : "w-[65%]"
                 }`} 
               />
               <span 
                 className={`h-0.5 bg-white transition-all duration-300 ease-in-out block ${
                   mobileMenuOpen ? "w-7 absolute top-1/2 -translate-y-1/2 -rotate-45" : "w-7"
                 }`} 
               />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />
            {/* Sliding Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-50 bg-[#070707]/95 backdrop-blur-xl border-l border-white/10 p-8 pt-24 shadow-2xl flex flex-col"
            >
              <div className="flex flex-col items-start space-y-8 flex-grow">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-2xl font-display font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
                  >
                    <span className="text-primary/70">{link.icon}</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              {/* Extra elements at bottom of sidebar */}
              <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="mt-8 pt-8 border-t border-white/10"
              >
                <p className="text-xs font-mono uppercase text-white/30 mb-4">Agenda tu evento</p>
                <a
                 href="#contact"
                 onClick={() => setMobileMenuOpen(false)}
                 className="block text-center w-full px-8 py-4 rounded-xl bg-primary text-white uppercase text-sm tracking-[0.2em] font-bold shadow-[0_0_20px_rgba(255,59,0,0.3)]"
                >
                 Booking Info
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
