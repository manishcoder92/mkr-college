'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const awardsData = [
  {
    id: 1,
    img: '/images/awards/award-1.jpg',
    descEn: 'Principal Dr. Arvind Kumar was honored by District Magistrate Sitamarhi Shri Rinchi Pandey and Superintendent of Police Sitamarhi for outstanding contribution to education.',
    descHi: 'जिला पदाधिकारी सीतामढ़ी श्री रिंची पाण्डेय एवं आरक्षी अधीक्षक सीतामढ़ी के द्वारा सम्मानित होते प्राचार्य डॉ अरविन्द कुमार।',

  },
  {
    id: 2,
    img: '/images/awards/award-2.jpg',
    descEn: 'Grand inauguration ceremony of MKR College events graced by distinguished government officials and community leaders.',
    descHi: 'दैनिक भास्कर अखबार एवं माताश्री कौशल्या रामदेव डाॅ गणेश राय डिग्री कॉलेज के संयुक्त तत्वावधान में आयोजित " शूरवीरों का सम्मान " कार्यक्रम का उद्घाटन करते प्राचार्य डॉ अरविन्द कुमार।',

  },
];

export default function Awards({ language }) {
  return (
    <section id="awards" className="py-20 px-4 bg-gradient-to-br from-[#0a1e3f] via-[#102a4c] to-[#0a1e3f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#800000]/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-[#FFD700] font-bold text-sm uppercase tracking-[0.3em] inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#FFD700]" />
            {language === 'en' ? 'Recognition & Pride' : 'सम्मान एवं गौरव'}
            <span className="w-8 h-[2px] bg-[#FFD700]" />
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 leading-tight">
            {language === 'en' ? 'Awards & Achievements' : 'पुरस्कार एवं उपलब्धियाँ'}
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {language === 'en'
              ? 'Our institution and leadership have been recognized by government officials and organizations for excellence in education and community development.'
              : 'हमारे संस्थान और नेतृत्व को शिक्षा और सामुदायिक विकास में उत्कृष्टता के लिए सरकारी अधिकारियों और संगठनों द्वारा सम्मानित किया गया है।'
            }
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {awardsData.map((award, i) => (
            <motion.div
              key={award.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.2 } } }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#FFD700]/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,215,0,0.1)]"
            >
              {/* Image area */}
              <div className="relative h-[280px] md:h-[320px] overflow-hidden bg-black/40 flex items-center justify-center p-2">
                <Image
                  src={award.img}
                  alt={award.descEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {language === 'en' ? award.descEn : award.descHi}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#D97706] to-[#800000] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Bottom accent text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mt-14"
        >
          <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-white/20" />
            {language === 'en' ? 'Excellence Recognized at Every Level' : 'हर स्तर पर उत्कृष्टता को सम्मान'}
            <span className="w-12 h-[1px] bg-white/20" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
