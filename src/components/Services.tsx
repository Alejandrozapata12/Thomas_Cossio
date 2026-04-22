import { motion } from 'motion/react';

const services = [
  { id: '01', title: 'Private Sessions', desc: 'En espacios privados todo cambia: la música se adapta, la energía se cuida y cada momento se construye con intención. El set fluye de forma natural, manteniendo el equilibrio perfecto entre groove, ambiente y conexión.' },
  { id: '02', title: 'Clubs', desc: 'Live sets que se construyen con transiciones fluidas, selección precisa y una energía que fluye sin interrupciones. Todo entra en su punto, manteniendo el groove firme y la pista conectada toda la noche.' },
  { id: '03', title: 'Festivals', desc: 'Todo se lleva más arriba: el sonido, la energía y la respuesta del público. A partir de ahí, el set se desarrolla con intención, marcando momentos claros y manteniendo a la gente conectada de principio a fin.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="w-12 h-1 bg-primary"></div>
            <span className="text-primary font-mono tracking-widest uppercase text-sm">Servicios</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase tracking-tight">
            Experiencias<br/><span className="text-stroke opacity-30">A Medida</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative border border-white/5 bg-surface p-8 rounded-2xl hover:border-primary/50 hover:bg-dark transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-mono text-white/5 group-hover:text-primary transition-colors duration-500 font-bold">
                  {service.id}
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold uppercase mb-4 text-white group-hover:tracking-wider transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-2 group-hover:text-white/70 transition-colors duration-300 relative z-10">
                {service.desc}
              </p>
              
              {/* Animated bottom bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

