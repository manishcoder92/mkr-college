'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Add topper photos in public/images/toppers/ and update this array
const toppersData = [
  {
    id: 1,
    nameEn: 'Ankita Bharti',
    nameHi: 'अंकिता भारती',
    sessionEn: 'Batch(2021-2024)',
    sessionHi: 'Batch(2021-2024)',
    captionEn: 'सत्र 2021-24 की टॉपर अंकिता भारती को स्नातक प्रतिभा सम्मान समारोह में सम्मानित करते हुए सचिव आदरणीय डॉ गणेश राय एवं प्राचार्य डॉ अरविन्द कुमार।',
    captionHi: 'सत्र 2021-24 की टॉपर अंकिता भारती को स्नातक प्रतिभा सम्मान समारोह में सम्मानित करते हुए सचिव आदरणीय डॉ गणेश राय एवं प्राचार्य डॉ अरविन्द कुमार।',
    image: '/images/toppers/ankita_bharti_new.jpg' // Place your new images in public/images/toppers/
  },
  {
    id: 2,
    nameEn: 'Priyanka Kishore',
    nameHi: 'प्रियंका किशोर',
    sessionEn: 'Batch(2022-2025)',
    sessionHi: 'Batch(2022-2025)',
    captionHi: 'सत्र 2022-25 की टॉपर प्रियंका किशोर को स्नातक प्रतिभा सम्मान समारोह में लैपटॉप देते सचिव आदरणीय डॉ गणेश राय, एस एल के कालेज सीतामढ़ी के अवकाश प्राप्त प्राचार्य डॉ सुरेंद्र प्रसाद एवं प्राचार्य डॉ अरविन्द कुमार।',
    image: '/images/toppers/placeholder2.jpg'
  },
  {
    id: 3,
    nameEn: 'Jyoti Kumari',
    nameHi: 'ज्योति कुमारी',
    sessionEn: 'Batch(2022-2025)',
    sessionHi: 'Batch(2022-2025)',
    captionHi: 'सत्र 2022-25 की द्वितीय टॉपर ज्योति कुमारी को स्नातक प्रतिभा सम्मान समारोह में टैबलेट प्रदान करते हुए पूर्व विधायक श्री सुनील कुशवाहा, नगर निगम सीतामढ़ी के उप मेयर श्री आशुतोष कुमार एवं प्राचार्य डॉ अरविन्द कुमार।',
    image: '/images/toppers/placeholder3.jpg'
  },
  {
    id: 4,
    nameEn: 'Rubi Kumari',
    nameHi: 'रूबी कुमारी',
    sessionEn: 'Batch(2022-2025)',
    sessionHi: 'Batch(2022-2025)',
    captionHi: 'सत्र 2022-25 की तृतीय टॉपर रूबी कुमारी को स्नातक प्रतिभा सम्मान समारोह में मोबाइल देकर पुरस्कृत करते नगर निगम सीतामढ़ी के उप मेयर श्री आशुतोष कुमार, अध्यक्ष, जिला परिषद सीतामढ़ी, श्रीमती अदिति कुमारी एवं प्राचार्य डॉ अरविन्द कुमार।',
    image: '/images/toppers/placeholder4.jpg'
  }
];

export default function Toppers({ language }) {
  return (
    <section id="toppers" className="py-20 px-4 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#800000]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FFD700]/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="text-[#800000] font-bold text-sm uppercase tracking-[0.3em] inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#800000]" />
            {language === 'en' ? 'Our Pride' : 'हमारा गौरव'}
            <span className="w-8 h-[2px] bg-[#800000]" />
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mt-4 leading-tight">
            {language === 'en' ? 'College Toppers' : 'कॉलेज के टॉपर'}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            {language === 'en'
              ? 'Celebrating the academic excellence and hard work of our brightest students who have made the institution proud.'
              : 'हमारे सबसे होनहार छात्रों की शैक्षणिक उत्कृष्टता और कड़ी मेहनत का जश्न मनाते हुए जिन्होंने संस्थान को गौरवान्वित किया है।'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppersData.map((topper, i) => (
            <motion.div
              key={topper.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                {/* Fallback pattern if image is missing/placeholder */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent" />

                <Image
                  src={topper.image}
                  alt={language === 'en' ? topper.nameEn : topper.nameHi}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gold Medal Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-[#800000] w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10" title="College Topper">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 relative">
                {/* Decorative line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

                <h3 className="text-xl font-bold text-[#800000] mb-1 font-serif text-center">
                  {language === 'en' ? topper.nameEn : topper.nameHi}
                </h3>

                <div className="bg-[#800000]/5 text-[#800000] text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-3 text-center w-full">
                  {language === 'en' ? topper.sessionEn : topper.sessionHi}
                </div>

                <p className="text-gray-600 text-sm text-center italic">
                  &quot;{language === 'en' ? topper.captionEn : topper.captionHi}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Toppers List / Poster Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white inline-block">
            {/* The user can replace this path with the actual poster image path */}
            <img
              src="/images/toppers/toppers-list.jpg"
              alt={language === 'en' ? 'Our Toppers Session 2021-24' : 'हमारे टॉपर सत्र 2021-24'}
              className="w-full h-auto object-contain bg-white"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%239ca3af'%3EPlease upload the toppers list photo to /public/images/toppers/toppers-list.jpg%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          <p className="mt-4 text-gray-600 font-medium italic">
            {language === 'en' ? 'Our Topper Students, Session 2021-24' : 'हमारे टॉपर छात्र, सत्र 2021-24'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
