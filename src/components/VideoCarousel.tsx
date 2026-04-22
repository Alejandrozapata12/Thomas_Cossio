import { motion } from 'motion/react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  { id: 1, title: 'Live at Kaputt 2025', url: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://picsum.photos/seed/vid1/1280/720?grayscale' },
  { id: 2, title: 'Sunset Cartagena Vibe', url: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://picsum.photos/seed/vid2/1280/720?grayscale' },
  { id: 3, title: 'Boiler Room Style', url: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://picsum.photos/seed/vid3/1280/720?grayscale' },
  { id: 4, title: 'Medellín Festival Edit', url: 'https://vjs.zencdn.net/v/oceans.mp4', poster: 'https://picsum.photos/seed/vid4/1280/720?grayscale' },
];

export default function VideoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="videos" className="py-24 md:py-32 bg-surface border-y border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary"></div>
              <span className="text-primary font-mono tracking-widest uppercase text-sm">Videos</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display uppercase font-bold tracking-tighter">Live Sessions</h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
             <button 
               onClick={scrollLeft}
               className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-white/50 hover:text-white transition-all shadow-lg bg-black/40 backdrop-blur-md active:scale-95"
               aria-label="Anterior video"
             >
               <ChevronLeft size={24} />
             </button>
             <button 
               onClick={scrollRight}
               className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary text-white/50 hover:text-white transition-all shadow-lg bg-black/40 backdrop-blur-md active:scale-95"
               aria-label="Siguiente video"
             >
               <ChevronRight size={24} />
             </button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-10 hide-scrollbar -mx-6 px-6 xl:mx-0 xl:px-0 scroll-smooth"
        >
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          
          {videos.map((vid, i) => (
            <motion.div 
              key={vid.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center shrink-0 w-[90vw] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex flex-col group relative"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden glass-panel border border-white/10 group-hover:border-primary/30 transition-colors">
                <video 
                  controls 
                  poster={vid.poster}
                  className="w-full h-full object-cover"
                >
                  <source src={vid.url} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>
              <h3 className="mt-4 text-xl font-display uppercase font-semibold text-white/90 group-hover:text-primary transition-colors">{vid.title}</h3>
              <p className="text-white/40 font-mono text-xs uppercase tracking-widest mt-1">Full Set Edit</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
