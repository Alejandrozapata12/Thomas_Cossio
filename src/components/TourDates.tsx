import { motion } from 'motion/react';

const dates = [
  { id: 1, date: '15 NOV', city: 'BOGOTÁ', venue: 'Kaputt Club', status: 'Tickets' },
  { id: 2, date: '28 NOV', city: 'MEDELLÍN', venue: 'Salón Amador', status: 'Sold Out', isSoldOut: true },
  { id: 3, date: '05 DIC', city: 'CARTAGENA', venue: 'Buena Vida', status: 'Tickets' },
  { id: 4, date: '31 DIC', city: 'CALI', venue: 'Fin de Año Fest', status: 'RSVP' },
];

export default function TourDates() {
  return (
    <section id="agenda" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-anton uppercase mb-4 text-stroke">Agenda</h2>
          <p className="text-primary tracking-[0.2em] uppercase font-bold text-sm">Próximas Fechas</p>
        </motion.div>

        <div className="flex flex-col">
          {dates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-white/10 group hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 w-full md:w-auto mb-4 md:mb-0">
                <div className="text-2xl font-display font-medium text-white/50 group-hover:text-white transition-colors w-24">
                  {item.date}
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-display uppercase font-bold group-hover:text-primary transition-colors">
                    {item.city}
                  </h3>
                  <p className="text-sm font-mono text-white/60 tracking-widest uppercase mt-1">
                    {item.venue}
                  </p>
                </div>
              </div>
              
              <button 
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all w-full md:w-auto ${
                  item.isSoldOut 
                    ? 'border border-white/10 text-white/30 cursor-not-allowed' 
                    : 'bg-white text-dark hover:bg-primary hover:text-white'
                }`}
                disabled={item.isSoldOut}
              >
                {item.status}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
