'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Add your YouTube Video Endings (IDs) here!
// For example, if your YouTube link is: https://www.youtube.com/watch?v=dQw4w9WgXcQ
// You just copy the "dQw4w9WgXcQ" part and paste it below.
const youtubeIds = [
  'uKbAkR3EUOw',
  'NQA6z71_J2o',
];

export default function CollegeVideo({ language }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % youtubeIds.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + youtubeIds.length) % youtubeIds.length);
  };

  return (
    <section className="py-24 bg-[#020b18] relative overflow-hidden">
      {/* Background patterns/glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] bg-[#0057FF]/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[800px] h-[800px] bg-[#800000]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FFD700] font-bold text-xs md:text-sm uppercase tracking-widest border border-[#FFD700]/30 px-5 py-1.5 rounded-full bg-[#FFD700]/10"
          >
            {language === 'en' ? 'Campus Tour' : 'कैम्पस टूर'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-6 mb-4"
          >
            {language === 'en' ? 'Experience Life at MKR' : 'MKR में जीवन का अनुभव करें'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {language === 'en'
              ? 'Watch our official college videos to take a virtual walk through our state-of-the-art campus, classrooms, and community events.'
              : 'हमारे अत्याधुनिक परिसर, कक्षाओं और सामुदायिक कार्यक्रमों के माध्यम से एक आभासी सैर करने के लिए हमारे आधिकारिक कॉलेज वीडियो देखें।'}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative aspect-video w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-[#0a1e3f]/50 group"
        >

          <AnimatePresence mode="wait">
            {youtubeIds[currentIndex] !== 'YOUR_FIRST_YOUTUBE_ID_HERE' && youtubeIds[currentIndex] !== 'YOUR_SECOND_YOUTUBE_ID_HERE' ? (
              <motion.iframe
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={`https://www.youtube.com/embed/${youtubeIds[currentIndex]}?rel=0&modestbranding=1`}
                className="w-full h-full relative z-10"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : null}
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#800000] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-[#800000] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>

          {/* Fallback instruction if video fails to load or isn't dropped yet */}
          {(youtubeIds[currentIndex] === 'YOUR_FIRST_YOUTUBE_ID_HERE' || youtubeIds[currentIndex] === 'YOUR_SECOND_YOUTUBE_ID_HERE') && (
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-white p-6 text-center bg-black/60 backdrop-blur-sm pointer-events-none">
              <svg className="w-16 h-16 mb-6 opacity-80 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <h3 className="text-xl font-bold mb-3 font-serif">Awaiting YouTube Connection...</h3>
              <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed mb-4">
                Open <code className="bg-white/20 px-2 py-0.5 rounded font-mono">src/components/CollegeVideo.jsx</code> in your code editor and replace the placeholder text with your actual YouTube Video ID.
              </p>
            </div>
          )}
        </motion.div>

        {/* Dot Pagination Track */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {youtubeIds.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#FFD700]' : 'w-2 bg-white/30 hover:bg-white/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
