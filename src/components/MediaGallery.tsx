import { motion } from 'motion/react';

const mediaItems = [
  { id: 1, title: 'Festival Medellín', category: 'Lo que pasa en cabina', image: 'https://picsum.photos/seed/medellin/800/800', colSpan: 'col-span-12 md:col-span-8', rowSpan: 'row-span-2' },
  { id: 2, title: 'Booth Night', category: 'Lo que pasa en cabina', image: 'https://picsum.photos/seed/booth/600/600', colSpan: 'col-span-12 md:col-span-4' },
  { id: 3, title: 'Cartagena Sunset', category: 'Lo que pasa en cabina', image: 'https://picsum.photos/seed/cartagena/600/600', colSpan: 'col-span-12 md:col-span-4' },
  { id: 4, title: 'Marea Humana', category: 'Lo que pasa en cabina', image: 'https://picsum.photos/seed/crowd/800/600', colSpan: 'col-span-12 md:col-span-6' },
  { id: 5, title: 'En el Control', category: 'Lo que pasa en cabina', image: 'https://picsum.photos/seed/studio/800/600', colSpan: 'col-span-12 md:col-span-6' },
  { id: 6, title: 'Bogotá Sessions', category: 'Lo que pasa en cabina', image: 'https://picsum.photos/seed/bogota/1200/400', colSpan: 'col-span-12' },
];

export default function MediaGallery() {
  return (
    <section id="media" className="py-24 md:py-32 relative bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-primary font-mono tracking-widest uppercase text-sm">Lo que pasa en cabina</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase font-bold tracking-tighter">Desde la cabina</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[250px]">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.colSpan} ${item.rowSpan || 'row-span-1'} relative group overflow-hidden bg-dark`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.category}
                </span>
                <h3 className="text-2xl font-display font-semibold uppercase">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
