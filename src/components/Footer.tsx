import { useState } from 'react';
import { Instagram, Youtube, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Custom lightweight SVG Icons
const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tiktok">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);
const SoundcloudIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-soundcloud">
    <path d="M19.5 8a4.5 4.5 0 0 0-4.5 4.5V17h5a4 4 0 0 0 0-8c-.3 0-.6.1-.9.2a3.5 3.5 0 0 0-.6-1.2h1z"/>
    <path d="M12 9v8"/><path d="M9 10v7"/><path d="M6 12v5"/><path d="M3 14v3"/><path d="M15 11v6"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const [modalContent, setModalContent] = useState<{title: string, body: string} | null>(null);

  const privacyText = "Se respeta profundamente la privacidad de los usuarios. Cualquier información proporcionada será tratada con confidencialidad absoluta y se utilizará únicamente con el fin de establecer comunicación sobre contrataciones y eventos.";
  const termsText = "Las contrataciones y fechas se confirman única y exclusivamente a través de los canales oficiales descritos aquí. Los requerimientos técnicos (Rider) y de hospitalidad serán proporcionados de forma individual para cada evento.";

  return (
    <>
      <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-16 gap-12 text-center md:text-left">
            
            <div className="max-w-sm">
              <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4">
                Thomas<span className="text-primary">Cossio</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Exclusividad auditiva y puestas en escena inolvidables para eventos y marcas premium alrededor del mundo.
              </p>
              
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-white/60" aria-label="TikTok">
                  <TiktokIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-white/60" aria-label="Soundcloud">
                  <SoundcloudIcon />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-white/60" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-white/60" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-white/60" aria-label="Facebook">
                  <FacebookIcon />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm uppercase tracking-widest font-mono text-left">
              <div>
                <p className="text-white/30 mb-4">Navegación</p>
                <ul className="space-y-3">
                  <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
                  <li><a href="#about" className="hover:text-primary transition-colors">Sobre Mí</a></li>
                  <li><a href="#services" className="hover:text-primary transition-colors">Servicios</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white/30 mb-4">Explore</p>
                <ul className="space-y-3">
                  <li><a href="#videos" className="hover:text-primary transition-colors">Videos</a></li>
                  <li><a href="#gallery" className="hover:text-primary transition-colors">Galería</a></li>
                  <li><a href="#resources" className="hover:text-primary transition-colors">Recursos</a></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40 uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Thomas Cossio. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <button onClick={() => setModalContent({ title: 'Políticas de Privacidad', body: privacyText })} className="hover:text-white transition-colors cursor-pointer text-left">Políticas de Privacidad</button>
              <button onClick={() => setModalContent({ title: 'Términos de Servicio', body: termsText })} className="hover:text-white transition-colors cursor-pointer text-left">Términos de Servicio</button>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-dark/95 backdrop-blur-md px-6 py-12"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl shadow-primary/10"
            >
              <button 
                onClick={() => setModalContent(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase mb-6 pr-8 text-white">{modalContent.title}</h3>
              <p className="text-white/60 font-light text-base md:text-lg leading-relaxed">
                {modalContent.body}
              </p>
              
              <button 
                onClick={() => setModalContent(null)}
                className="mt-10 px-8 py-3 rounded-full bg-white text-dark text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
