import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { id: 1, text: 'Open press kit', url: '#' },
  { id: 2, text: 'Kit de Recursos', url: '#' },
  { id: 3, text: 'Kit de Recursos', url: '#' }, // Based on scraping showing this twice
  { id: 4, text: 'Agenda disponible', url: '#' },
];

export default function ActionLinks() {
  return (
    <section id="links" className="pb-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col pt-16">
        
        {links.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex items-center justify-between py-12 md:py-16 border-b border-white/10 overflow-hidden"
          >
            {/* Hover Background - Slid in from bottom */}
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></div>
            
            <div className="relative z-10 flex items-center gap-6">
              <span className="text-white/20 font-mono text-sm tracking-widest group-hover:text-black/50 transition-colors duration-300">
                0{index + 1}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium uppercase tracking-tighter text-white group-hover:text-dark transition-colors duration-300">
                {link.text}
              </h2>
            </div>
            
            <div className="relative z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-dark group-hover:bg-dark group-hover:text-primary transition-all duration-300 text-white">
              <ArrowUpRight size={32} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
          </motion.a>
        ))}

      </div>

      <div className="mt-32 text-center">
        <h3 className="text-xl md:text-3xl font-display font-bold uppercase tracking-widest">
          Thomas<span className="text-primary">Cossio</span>
        </h3>
        <p className="text-white/30 font-mono uppercase text-xs tracking-[0.2em] mt-4">
          © {new Date().getFullYear()} — Experience Unforgettable
        </p>
      </div>
    </section>
  );
}
