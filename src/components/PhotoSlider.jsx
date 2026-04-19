'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// The user can drop new photos in the public/images/slider folder
// and add their filenames to this array.
const sliderImages = [
  '/images/slider/pic.JPG',
  '/images/gallery/events/cover.jpg',
  '/images/slider/pic1.jpg',
  '/images/slider/pic2.jpg',
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
  '/images/slider/pic14.jpg',
  '/images/slider/picc.JPG',
  '/images/slider/pic17.jpg', // Added slot 17
  '/images/slider/pic18.jpg', // Added slot 18
  '/images/slider/pic19.jpg', // Added slot 19
  '/images/slider/pic20.jpg', // Added slot 20
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

        {/* Native Horizontal Scroll Area */}
        <div
          ref={carouselRef}
          className="flex gap-4 md:gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-8 pt-4 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {sliderImages.map((src, index) => (
            <div
              key={index}
              className="relative w-[80vw] sm:w-[400px] md:w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 flex-shrink-0 snap-center transition-transform duration-500 hover:scale-[1.02] hover:border-[#FFD700]/40"
            >
              <Image
                src={src}
                alt={`Slider image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 80vw, 500px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-white/40 text-sm text-center mt-4 italic pointer-events-none">
          {language === 'en' ? '← Scroll horizontally to see more →' : '← अधिक देखने के लिए क्षैतिज रूप से स्क्रॉल करें →'}
        </p>
      </div>
    </section>
  );
}
