'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonialsData = [

  {
    id: 'student1',
    name: 'Madhu Kumari',
    role: 'Geography Honours session 2021-24',
    badgeEn: 'Alumni',
    badgeHi: 'पूर्व छात्र',
    speechEn: 'The experience of studying at Matashri Kaushalya Ramdev Dr. Ganesh Ray Degree College is very good. The atmosphere here is supportive and sweet for the learners, which makes studies even more enjoyable.',
    speechHi: 'माताश्री कौशल्या रामदेव डॉ. गणेश राय डिग्री कॉलेज में पढ़ने का अनुभव बहुत अच्छा है। यहां का माहौल शिक्षार्थियों के लिए सहयोगी और मधुर है, जो पढ़ाई को और भी आनंदमय बनाता है।',
    image: '/images/testimonials/madhu_kumari.jpg',
    featured: false
  },
  {
    id: 'student2',
    name: 'Anurag Kumar',
    role: 'English Honours Session 2022-25',
    badgeEn: 'Alumni',
    badgeHi: 'पूर्व छात्र',
    speechEn: 'Matashri Kaushalya Ramdev Dr. Ganesh Ray Degree College provides excellent education. The faculty is dedicated, and the resources available ensure a conducive learning environment, enhancing academic growth for students.',
    speechHi: 'माताश्री कौशल्या रामदेव डॉ. गणेश राय डिग्री कॉलेज उत्कृष्ट शिक्षा प्रदान करता है। संकाय समर्पित है, और उपलब्ध संसाधन एक अनुकूल सीखने का माहौल सुनिश्चित करते हैं, जिससे छात्रों के शैक्षणिक विकास में वृद्धि होती है।',
    image: '/images/testimonials/anurag_kumar.jpg',
    featured: false
  },
  {
    id: 'student3',
    name: 'Pallavi Joshi',
    role: 'Hindi Honours, Session 2023-27',
    badgeEn: 'Student',
    badgeHi: 'छात्र',
    speechEn: 'This College maintains a strict adherence to class schedules, ensuring efficient learning. The punctuality fosters a disciplined environment conducive to academic success.',
    speechHi: 'यह कॉलेज कक्षा अनुसूचियों का कड़ाई से पालन करता है, जिससे कुशल शिक्षा सुनिश्चित होती है। समय की पाबंदी एक अनुशासित वातावरण को बढ़ावा देती है जो शैक्षणिक सफलता के लिए अनुकूल है।',
    image: '/images/testimonials/pallavi_joshi.jpg',
    featured: false
  },
  {
    id: 'student4',
    name: 'Shakuntala Kumari',
    role: 'Hindi Honours, Session 2023-27',
    badgeEn: 'Student',
    badgeHi: 'छात्र',
    speechEn: 'M.K.R. Degree College boasts an excellent library facility. With a wide range of resources and a conducive environment, it facilitates comprehensive research and enhances academic excellence.',
    speechHi: 'M.K.R. डिग्री कॉलेज में एक उत्कृष्ट पुस्तकालय सुविधा है। संसाधनों की एक विस्तृत श्रृंखला और एक अनुकूल वातावरण के साथ, यह व्यापक अनुसंधान की सुविधा प्रदान करता है और शैक्षणिक उत्कृष्टता को बढ़ाता है।',
    image: '/images/testimonials/shakuntala_kumari.jpg',
    featured: false
  },
  {
    id: 'student5',
    name: 'Aashu Kumar Mahto',
    role: 'Psychology Honours, Session 2023-27',
    badgeEn: 'Student',
    badgeHi: 'छात्र',
    speechEn: 'Public facilities are very good at M.K.R. Degree College. With organized behavior and a beautiful setup, this place is particularly suitable for the community.',
    speechHi: 'M.K.R. डिग्री कॉलेज में सार्वजनिक सुविधाएं बहुत अच्छी हैं। व्यवस्थित व्यवहार और सुंदर व्यवस्था के साथ, ये स्थान समुदाय के लिए विशेष रूप से उपयुक्त है।',
    image: '/images/testimonials/aashu_kumar.jpg',
    featured: false
  },
  {
    id: 'student6',
    name: 'Asmita Ranjan',
    role: 'Home Science Honours, Session 2023-27',
    badgeEn: 'Student',
    badgeHi: 'छात्र',
    speechEn: 'All faculties are very good at Matashri Kaushalya Ramdev Dr. Ganesh Ray Degree College. Their cooperation and dedication are helpful in reading, which boosts our knowledge and development.',
    speechHi: 'माताश्री कौशल्या रामदेव डॉ० गणेश राय डिग्री कॉलेज में सभी संकाय बहुत अच्छे हैं। उनका सहयोग और समर्पण प्रयास पढ़ने में मददगार है, जो हमारे ज्ञान और विकास को बढ़ावा देता है।',
    image: '/images/testimonials/asmita_ranjan.jpg',
    featured: false
  }
];

export default function Testimonials({ language = 'en' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-4 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#0077B6] font-bold text-sm uppercase tracking-widest">
            {language === 'en' ? 'Student Success' : 'छात्र सफलता'}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#800000] mt-3">
            {language === 'en' ? 'What Our Students Say' : 'हमारे छात्र क्या कहते हैं'}
          </h2>
        </div>

        <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="w-full md:w-2/5 relative h-[300px] md:h-[520px] overflow-hidden bg-gray-200">
                {testimonialsData[currentIndex].featured && (
                  <div className="absolute top-6 left-6 z-20 bg-[#FFD700] text-[#800000] px-4 py-2 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 transform -rotate-2 scale-110">
                    {language === 'en' ? testimonialsData[currentIndex].badgeEn : testimonialsData[currentIndex].badgeHi}
                  </div>
                )}
                <Image
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center relative">
                <span className="absolute top-10 left-10 text-8xl text-[#800000] opacity-5 font-serif leading-none hidden md:block">"</span>

                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-[#FFD700] fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 italic leading-relaxed mb-10">
                    "{language === 'en' ? testimonialsData[currentIndex].speechEn : testimonialsData[currentIndex].speechHi}"
                  </blockquote>

                  <div>
                    <h4 className="text-2xl font-black text-[#800000] font-serif tracking-wide uppercase">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-[#0077B6] font-bold mt-1 text-sm md:text-base">
                      {testimonialsData[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 md:right-16 hidden md:flex gap-3 z-30">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)}
              className="w-12 h-12 rounded-full bg-white text-[#800000] border-2 border-[#800000]/10 flex items-center justify-center hover:bg-[#800000] hover:text-white transition-all shadow-md group"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)}
              className="w-12 h-12 rounded-full bg-[#800000] text-white flex items-center justify-center hover:bg-[#5C0000] transition-all shadow-md group border-2 border-[#800000]"
            >
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 md:hidden z-30">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-[#800000] w-8' : 'bg-gray-300 w-2.5'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
