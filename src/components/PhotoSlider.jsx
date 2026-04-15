'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// The user can drop new photos in the public/images/slider folder
// and add their filenames to this array.
const sliderImages = [
  '/images/slider/pic.jpg',
  '/images/gallery/events/cover.jpg',
  '/images/slider/pic1.jpg',
  '/images/slider/pic2.jpg',
  '/images/slider/pic3.jpg',
  '/images/slider/picc.jpg',
  '/images/slider/pic4.jpg',
  '/images/slider/pic5.jpg',
  '/images/slider/pic6.jpg',
  '/images/slider/pic7.jpg',
  '/images/slider/pic8.jpg',
  '/images/slider/pic9.jpg',
  '/images/slider/pic10.jpg',
  '/images/slider/pic11.jpg',
  '/images/slider/pic12.jpg',
  '/images/slider/pic13.jpg',

];

export default function PhotoSlider({ language }) {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate max drag constraint
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#051124] overflow-hidden relative">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white text-center mb-12 tracking-wide drop-shadow-md">
          {language === 'en' ? 'Have a glance at our gallery section' : 'हमारी गैलरी अनुभाग पर एक नज़र डालें'}
        </h2>

        {/* Draggable Slider Area */}
        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.2}
            className="flex gap-4 md:gap-8 min-w-max"
          >
            {sliderImages.map((src, index) => (
              <motion.div
                key={index}
                className="relative w-[300px] sm:w-[400px] md:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 flex-shrink-0"
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,215,0,0.4)' }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={src}
                  alt={`Slider image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 300px, 500px"
                  className="object-cover pointer-events-none" // prevent image drag interference
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <p className="text-white/40 text-sm text-center mt-8 italic pointer-events-none">
          {language === 'en' ? '← Drag to slide →' : '← सरकाने के लिए ड्रैग करें →'}
        </p>
      </div>
    </section>
  );
}
