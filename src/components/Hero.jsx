'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import placeholders from '@/lib/blur-placeholders.json';

export default function Hero() {
  const { language } = useLanguage();
  const router = useRouter();

  return (
    <>

      {/* Hero Section */}
      <div id="home" className="relative h-[80vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image using Next.js Image Optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-campus.jpg"
            alt="MKR College Campus Building"
            fill
            priority
            quality={90}
            className="object-cover object-[center_60%]"
            sizes="100vw"
          />
        </div>

        {/* Professional Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#1a0000] z-0" />
        <div className="absolute inset-0 bg-[#800000]/10 mix-blend-overlay z-0" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto py-12 sm:py-0">

          <div className="mb-8">
            {/* College Name — ALWAYS in Hindi */}
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#FFD700] mb-2 leading-tight drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              माताश्री कौशल्या रामदेव
            </motion.h1>

            <motion.h2
              className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              डॉ० गणेश राय डिग्री कॉलेज
            </motion.h2>

            {/* Tagline */}
            <motion.div
              className="inline-block border-x-2 border-[#FFD700]/30 px-8 py-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-sm sm:text-base md:text-lg text-[#FFD700] font-bold italic tracking-wide drop-shadow-md">
                {language === 'hi'
                  ? '"शिक्षा की उत्कृष्टता, सफलता के लिए प्रतिबद्ध — ज्ञान का आपका प्रवेश द्वार"'
                  : '"Dedicated to Excellence, Committed to Success — Your Gateway to Knowledge"'
                }
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center px-4 sm:px-0 pb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05, backgroundColor: '#e50303ab', y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFD700] text-[#800000] font-black py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(128,0,0,0.3)] transition-all text-base sm:text-lg flex items-center gap-2 justify-center border-2 border-[#800000]/20"
            >
              {language === 'en' ? 'Explore Courses' : 'पाठ्यक्रम देखें'} →
            </motion.a>

            <motion.a
              href="https://college.mkrcollege.com/online_admission"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#5C0000', y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#800000] text-white font-black py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(128,0,0,0.4)] transition-all text-base sm:text-lg flex items-center justify-center gap-2 border-[3px] border-[#FFD700] cursor-pointer"
            >
              {language === 'en' ? 'Online Admission 👈🏻' : 'ऑनलाइन आवेदन'}
            </motion.a>
          </motion.div>
        </div>

        {/* Admission Banner — Premium Dark Theme */}
        <motion.div
          className="absolute bottom-0 w-full z-20 bg-gradient-to-r from-[#1a0000] via-[#800000] to-[#1a0000] py-4 px-4 text-center border-t border-[#FFD700]/30 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
            <motion.p
              className="text-[#FFD700] font-black text-base md:text-xl tracking-widest uppercase drop-shadow-sm"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {language === 'en'
                ? 'ADMISSION OPEN FOR SESSION 2025–2029 : ONLINE APPLY STARTS'
                : 'सत्र 2025–2029 के लिए प्रवेश शुरू : ऑनलाइन आवेदन शुरू'}
            </motion.p>
            <motion.a
              href="https://umis.brabu.ac.in/Home/Signup#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: '#FFD700', color: '#800000' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0077B6] text-white font-black py-3 px-10 rounded-full shadow-lg transition-all uppercase tracking-widest text-base md:text-lg border-2 border-[#FFD700]/40 flex items-center gap-2"
            >
              {language === 'en' ? 'Apply Now' : 'अभी आवेदन करें'} <span className="text-xl">↗</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
