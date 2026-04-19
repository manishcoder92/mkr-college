'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import placeholders from '@/lib/blur-placeholders.json';

const galleryData = [
  {
    id: 'campus',
    nameEn: 'Campus Imagery',
    nameHi: 'कैम्पस परिदृश्य',
    cover: '/images/gallery/campus/cover.jpg',
    images: [
      '/images/gallery/campus/cover.jpg',
      '/images/gallery/campus/cover1.jpg',
      '/images/gallery/campus/cover2.jpg',
      '/images/gallery/campus/cover3.jpg',
    ]
  },
  {
    id: 'events',
    nameEn: 'Annual Events',
    nameHi: 'वार्षिक कार्यक्रम',
    cover: '/images/gallery/events/cover.jpg',
    images: [
      '/images/gallery/events/cover.jpg',
      '/images/gallery/events/cover1.jpg',
      '/images/gallery/events/cover2.jpg',
      '/images/gallery/events/cover3.jpg',
      '/images/gallery/events/cover4.jpg',
    ]
  },
  {
    id: 'academics',
    nameEn: 'Academic Life',
    nameHi: 'शैक्षणिक जीवन',
    cover: '/images/gallery/academics/cover.jpg',
    images: [
      '/images/gallery/academics/cover.jpg',
      '/images/gallery/academics/cover1.jpg',
      '/images/gallery/academics/cover2.jpg',
      '/images/gallery/academics/cover3.jpg',
      '/images/gallery/academics/cover4.jpg',
    ]
  },
  {
    id: 'students',
    nameEn: 'Student Community',
    nameHi: 'छात्र समुदाय',
    cover: '/images/gallery/students/cover.jpg',
    images: [
      '/images/gallery/students/cover.jpg',
      '/images/gallery/students/cover1.jpg',
      '/images/gallery/students/cover2.jpg',
      '/images/gallery/students/cover3.jpg',
      '/images/gallery/students/cover4.jpg',
      '/images/gallery/students/cover5.jpg',
      '/images/gallery/students/cover6.jpg'
    ]
  },
  {
    id: 'faculty',
    nameEn: 'Esteemed Faculty',
    nameHi: 'सम्मानित संकाय',
    cover: '/images/gallery/faculty/cover.jpg',
    images: [
      '/images/gallery/faculty/cover.jpg',
      '/images/gallery/faculty/cover1.jpg',
      '/images/gallery/faculty/cover2.jpg',
      '/images/gallery/faculty/cover3.jpg',
      '/images/gallery/faculty/cover4.jpg',
      '/images/gallery/faculty/cover5.jpg'
    ]
  },
  {
    id: 'administration',
    nameEn: 'Our Principal',
    nameHi: 'हमारे प्राचार्य',
    cover: '/images/gallery/administration/cover.jpg',
    images: [
      '/images/gallery/administration/cover.jpg',
      '/images/gallery/administration/cover1.jpg',
      '/images/gallery/administration/cover2.jpg',
      '/images/gallery/administration/cover3.jpg',

    ]
  }
];

export default function Gallery({ language }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCategory = (category) => {
    setActiveCategory(category);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setActiveCategory(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeCategory) {
      setCurrentImageIndex((prev) => (prev + 1) % activeCategory.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeCategory) {
      setCurrentImageIndex((prev) => (prev - 1 + activeCategory.images.length) % activeCategory.images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#5B48D9] font-bold text-sm uppercase tracking-widest">
            {language === 'en' ? 'Life at MKR' : 'MKR में जीवन'}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#800000] mt-2">
            {language === 'en' ? 'Explore Our Campus' : 'हमारे परिसर का अन्वेषण करें'}
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Click a category to view high-quality moments and events from our college life.'
              : 'हमारे कॉलेज जीवन के उच्च-गुणवत्ता वाले क्षणों और घटनाओं को देखने के लिए एक श्रेणी पर क्लिक करें।'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleryData.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onClick={() => openCategory(cat)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white"
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <Image
                  src={cat.cover}
                  alt={language === 'en' ? cat.nameEn : cat.nameHi}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={placeholders[cat.cover] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8+O1/PQAHTwMhSIt1WQAAAABJRU5ErkJggg=='}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold font-serif mb-1">
                  {language === 'en' ? cat.nameEn : cat.nameHi}
                </h3>
                <p className="text-[#FFD700] text-sm font-bold flex items-center gap-2">
                  <span className="text-white/80">{cat.images.length} {language === 'en' ? 'Photos' : 'तस्वीरें'}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→ View All</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition z-50"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Title */}
            <div className="absolute top-6 left-6 z-50 text-white">
              <h3 className="text-xl font-bold font-serif">
                {language === 'en' ? activeCategory.nameEn : activeCategory.nameHi}
              </h3>
              <p className="text-white/50 text-sm">
                Image {currentImageIndex + 1} of {activeCategory.images.length}
              </p>
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center px-12">
              <Image
                key={currentImageIndex}
                src={activeCategory.images[currentImageIndex]}
                alt="Gallery display"
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={placeholders[activeCategory.images[currentImageIndex]] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8+O1/PQAHTwMhSIt1WQAAAABJRU5ErkJggg=='}
                onClick={(e) => e.stopPropagation()}
                className="object-contain drop-shadow-2xl select-none"
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-2 px-4" onClick={(e) => e.stopPropagation()}>
              {activeCategory.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-16 h-12 rounded overflow-hidden cursor-pointer border-2 transition-all relative ${currentImageIndex === idx ? 'border-[#FFD700] scale-110 opacity-100' : 'border-transparent opacity-40 hover:opacity-100'
                    }`}
                >
                  <Image src={img} alt="thumbnail" fill sizes="64px" className="object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
