import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12"
        >
          <div className="w-12 h-1 bg-primary mb-6"></div>
          <h2 className="text-5xl md:text-7xl font-anton uppercase leading-[0.9] text-white">
            Let's<br/><span className="text-stroke opacity-30">Connect</span>
          </h2>
          <p className="mt-8 text-white/50 text-lg font-light leading-relaxed max-w-md">
            Disponible para reservas a nivel global. Completa el formulario de contacto para conocer disponibilidad de agenda o requerimientos especiales.
          </p>
          <div className="mt-12 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-white/30 mb-1">General inquiries</p>
              <a href="mailto:booking@thomascossio.com" className="text-xl font-display font-medium hover:text-primary transition-colors">booking@thomascossio.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-white/30 mb-1">Ubicación Base</p>
              <p className="text-xl font-display font-medium">Colombia</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-7/12"
        >
          <form className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input type="text" id="name" placeholder=" " className="block w-full appearance-none bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary peer" required />
                <label htmlFor="name" className="absolute top-3 text-white/40 text-sm font-mono uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs">Nombre / Empresa</label>
              </div>
              <div className="relative">
                <input type="email" id="email" placeholder=" " className="block w-full appearance-none bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary peer" required />
                <label htmlFor="email" className="absolute top-3 text-white/40 text-sm font-mono uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs">Email Contacto</label>
              </div>
            </div>
            
            <div className="relative">
              <input type="text" id="subject" placeholder=" " className="block w-full appearance-none bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary peer" required />
              <label htmlFor="subject" className="absolute top-3 text-white/40 text-sm font-mono uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs">Asunto o Tipo de Evento</label>
            </div>

            <div className="relative">
              <textarea id="message" rows={4} placeholder=" " className="block w-full appearance-none bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-primary peer resize-none" required></textarea>
              <label htmlFor="message" className="absolute top-3 text-white/40 text-sm font-mono uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-4 peer-valid:text-xs">Detalles (Fecha, Locación, etc)</label>
            </div>

            <button type="submit" className="w-full py-5 rounded-full bg-white text-dark font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-white transition-all flex justify-center items-center gap-3">
              Mandar Mensaje <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
