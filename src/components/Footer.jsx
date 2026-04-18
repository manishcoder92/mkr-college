'use client';

import { useLanguage } from '@/components/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0000] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* College Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#800000] flex items-center justify-center text-white font-serif font-bold text-xs sm:text-sm border-2 border-[#FFD700] shrink-0">MKR</div>
            <div>
              <h3 className="font-serif font-bold text-[#FFD700] text-sm sm:text-base">MKR Dr. GR College</h3>
              <p className="text-[10px] sm:text-xs text-gray-400">Sitamarhi, Bihar</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            {language === 'en'
              ? 'Founded on April 27, 2015, M.K.R. Dr. G.R.D. College is dedicated to providing quality education affiliated with B.R.A. Bihar University, Muzaffarpur.'
              : '27 अप्रैल 2015 को स्थापित, एम.के.आर. डॉ. जी.आर.डी. कॉलेज गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए समर्पित है।'
            }
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-[#FFD700] mb-3 sm:mb-4 text-sm sm:text-base">{language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
            <li><a href="#about" className="hover:text-[#FFD700] transition py-1 block">→ {language === 'en' ? 'About Us' : 'हमारे बारे में'}</a></li>
            <li><a href="#courses" className="hover:text-[#FFD700] transition py-1 block">→ {language === 'en' ? 'Courses' : 'पाठ्यक्रम'}</a></li>
            <li><a href="/admit-card" className="hover:text-[#FFD700] transition py-1 block">→ {language === 'en' ? 'Admit Card' : 'प्रवेश पत्र'}</a></li>
            <li><a href="#notices" className="hover:text-[#FFD700] transition py-1 block">→ {language === 'en' ? 'Notices' : 'सूचनाएं'}</a></li>
            <li><a href="https://college.mkrcollege.com/site/login" target="_blank" rel="noopener" className="hover:text-[#FFD700] transition py-1 block">→ ERP Login</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-serif font-bold text-[#FFD700] mb-3 sm:mb-4 text-sm sm:text-base">{language === 'en' ? 'Important Links' : 'महत्वपूर्ण लिंक'}</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
            <li><a href="https://medhasoft.bih.nic.in/" target="_blank" rel="noopener" className="hover:text-[#FFD700] transition py-1 block">→ Medhasoft (Kanya Utthan)</a></li>
            <li><a href="https://pmsonline.bih.nic.in/" target="_blank" rel="noopener" className="hover:text-[#FFD700] transition py-1 block">→ Post Matric Scholarship</a></li>
            <li><a href="https://brabu.ac.in/" target="_blank" rel="noopener" className="hover:text-[#FFD700] transition py-1 block">→ B.R.A. Bihar University</a></li>
            <li>
              <a href="https://www.facebook.com/M.K.R.DR.G.R.D.College2Sitamarhi" target="_blank" rel="noopener" className="hover:text-[#FFD700] transition py-1 flex items-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                Facebook Page
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <h4 className="font-serif font-bold text-[#FFD700] mb-3 sm:mb-4 text-sm sm:text-base">{language === 'en' ? 'Contact Us' : 'संपर्क करें'}</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5">📍</span>
              <span>Near Punaura Police Station & Fulmat Petrol Pump, Punaura Dham, Sitamarhi Bihar 843302</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5">📞</span>
              <div className="space-y-1">
                <a href="tel:+917544052444" className="block hover:text-[#FFD700] transition">Principal: +91-7544052444</a>
                <a href="tel:+918544052244" className="block hover:text-[#FFD700] transition">Head Clerk: +91-8544052244</a>
                <a href="tel:+917597052444" className="block hover:text-[#FFD700] transition">Admission: +91-7597052444</a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span className="shrink-0">✉️</span>
              <a href="mailto:mkrdr.grdcollege@gmail.com" className="hover:text-[#FFD700] transition break-all">mkrdr.grdcollege@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Full-width Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <h4 className="font-serif font-bold text-[#FFD700] mb-4 text-sm sm:text-base flex items-center gap-2">
          <svg className="w-5 h-5 text-[#800000] bg-[#FFD700] rounded-full p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          {language === 'en' ? 'Find Us Here' : 'हमें यहाँ खोजें'}
        </h4>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Matashri+Kaushalya+Ramdev+Dr.+Ganesh+Ray+Degree+College,+Near+Punaura+Pashchim,+Sitamarhi,+Bihar+843327"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-xl border border-[#800000]/50 hover:border-[#FFD700] transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
        >
          <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.2655088137!2d85.4746650!3d26.6023770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed1937db875151%3A0xeab3aed8924b22f0!2sMatashri%20Kaushalya%20Ramdev%20Dr.%20Ganesh%20Ray%20Degree%20College!5e0!3m2!1sen!2sin!4v1712800000000!5m2!1sen!2sin"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="pointer-events-none grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          ></iframe>

          {/* Default Info Box */}
          <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-3 sm:px-4 sm:py-3 rounded-lg flex items-center gap-3 shadow-lg pointer-events-none group-hover:bg-white transition-colors duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#800000] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[#FFD700]">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
            </div>
            <div>
              <p className="font-bold text-[#800000] text-xs sm:text-sm">{language === 'en' ? 'MKR College' : 'एम.के.आर. कॉलेज'}</p>
              <p className="text-[10px] sm:text-xs text-gray-600">Sitamarhi, Bihar</p>
            </div>
          </div>

          {/* Hover Prompt Box */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="bg-[#800000]/95 backdrop-blur-md px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-white shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 border border-[#FFD700]/30 scale-95 group-hover:scale-100">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              {language === 'en' ? 'Click for Instant Directions' : 'त्वरित दिशा-निर्देशों के लिए क्लिक करें'}
            </div>
          </div>
        </a>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#800000]/50 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-xs text-gray-500 text-center sm:text-left">
          <p>&copy; {currentYear} M.K.R. Dr. G.R.D. College. All rights reserved.</p>
          <p>Affiliated with B.R.A. Bihar University, Muzaffarpur</p>
        </div>
      </div>
    </footer>
  );
}
