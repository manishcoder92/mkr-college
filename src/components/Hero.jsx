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
          {/* Desktop Banner */}
          <div className="hidden sm:block absolute inset-0">
            <Image
              src="/images/hero/hero-mkr-final.webp"
              alt="MKR College Front View"
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          {/* Mobile Banner */}
          <div className="block sm:hidden absolute inset-0">
            <Image
              src="/images/hero/hero-mkr-final-mobile.webp"
              alt="MKR College Front View"
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Professional Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-[#1a0000]/70 z-0" />
        <div className="absolute inset-0 bg-[#800000]/5 mix-blend-overlay z-0" />

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


        </div>

        {/* Admission Banner — Professional Transparent Theme */}
        <motion.div
          className="absolute bottom-0 w-full z-20 bg-[#001f3f]/85 py-5 md:py-6 px-4 text-center border-t border-white/20 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
            <motion.p
              className="text-white font-bold text-lg md:text-2xl tracking-widest uppercase drop-shadow-sm"
              animate={{ opacity: [1, 0.8, 1] }}
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
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#002B5C' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0057FF] text-white font-bold py-3.5 px-12 rounded-full shadow-lg transition-all uppercase tracking-widest text-lg md:text-xl border border-white/30 flex items-center gap-2"
            >
              {language === 'en' ? 'Apply Now' : 'अभी आवेदन करें'} <span className="text-2xl">↗</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
