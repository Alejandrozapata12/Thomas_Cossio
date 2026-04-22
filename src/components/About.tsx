import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-surface border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative group p-4">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://picsum.photos/seed/djportrait2/800/1000" 
              alt="Thomas Cossio DJ" 
              className="rounded-xl w-full object-cover aspect-[4/5] shadow-2xl relative z-10 border border-white/5"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="text-primary font-mono tracking-widest uppercase text-sm">Sobre Mi</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-anton uppercase leading-[0.9] tracking-tight text-white">
            Identidad en<br/><span className="text-primary">Movimiento</span>
          </h2>

          <div className="flex flex-wrap gap-3">
             <span className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest border border-white/20 rounded-full text-white/80 bg-white/5">House</span>
             <span className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest border border-white/20 rounded-full text-white/80 bg-white/5">Tech House</span>
          </div>
          
          <div className="space-y-6 text-white/60 font-light text-lg">
            <p>
              Su sonido nace a partir de una conexión directa con la música electrónica, explorando sonidos dentro del House y Tech House. Con el tiempo ha desarrollado un estilo propio, enfocado en sets fluidos, selección precisa y una energía que evoluciona con la pista.
            </p>
            <p>
              Se ha presentado en distintos espacios de la escena, destacando por su lectura del público y la forma en que construye cada momento dentro del set. Su propuesta continúa creciendo, consolidando una identidad clara dentro del movimiento.
            </p>
          </div>
          
          {/* Audio Player UX Concept */}
          <div className="mt-8">
            <style>{`
              @keyframes live-eq {
                0% { height: 2px; }
                50% { height: 16px; }
                100% { height: 2px; }
              }
              .live-bar { animation: live-eq 1s ease-in-out infinite; }
            `}</style>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-3 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
               Voice Note / Preview
            </p>
            <div className="glass-panel rounded-full p-2 flex items-center gap-4 border border-white/10 w-full max-w-md cursor-pointer hover:border-primary/50 transition-colors bg-dark/50">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 hover:scale-105 transition-transform"><Play fill="white" size={20} className="ml-1" /></div>
              <div className="flex-1 overflow-hidden">
                <div className="text-xs text-white font-mono uppercase truncate opacity-80">Thomas Cossio - Selected Set</div>
                <div className="flex items-end gap-[2px] mt-2 h-4 overflow-hidden">
                  {Array.from({length: 40}).map((_, i) => (
                    <div 
                       key={i} 
                       className={`w-1 bg-primary/60 rounded-full flex-shrink-0 ${i % 3 === 0 ? 'live-bar' : ''}`}
                       style={{ 
                         height: `${Math.random() * 80 + 20}%`, 
                         animationDelay: `${Math.random() * 1.5}s` 
                       }}>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-white/40 text-xs font-mono pr-4 shrink-0">00:00</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
