import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

// Doubled to ensure smooth loop for visual demonstration
const galleryPhotos = [
  'https://picsum.photos/seed/dj1/800/1000',
  'https://picsum.photos/seed/dj2/800/1000',
  'https://picsum.photos/seed/dj3/800/1000',
  'https://picsum.photos/seed/dj4/800/1000',
  'https://picsum.photos/seed/dj5/800/1000',
  'https://picsum.photos/seed/dj6/800/1000',
  'https://picsum.photos/seed/dj7/800/1000',
  'https://picsum.photos/seed/dj1/800/1000',
];

export default function GalleryCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        let nextScroll = scrollLeft + clientWidth / 2; // scroll half a view for smooth pacing
        
        if (nextScroll >= scrollWidth - clientWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollTo({ left: nextScroll, behavior: 'smooth' });
        }
      }
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-dark">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-mono tracking-widest uppercase text-sm mb-4">Registro Visual</p>
          <h2 className="text-5xl md:text-7xl font-anton uppercase">Galería</h2>
        </motion.div>

        {/* Automatic Scroll Snapping Gallery */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 hide-scrollbar -mx-6 px-6 xl:mx-0 xl:px-0 scroll-smooth"
        >
          {galleryPhotos.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="snap-center shrink-0 w-[80vw] sm:w-[50vw] md:w-[33vw] lg:w-[25vw] group overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface">
                <img 
                  src={`${img}?blur=${i%2===0 ? '0' : '0'}`} 
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
