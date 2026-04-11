'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const MotionLink = motion(Link);

const megaMenuItems = {
  academics: {
    titleEn: 'Course Hub',
    titleHi: 'पाठ्यक्रम केंद्र',
    sections: [
      {
        headerEn: 'COURSES OFFERED',
        headerHi: 'प्रदान किए गए पाठ्यक्रम',
        links: [
          { labelEn: "Bachelor's of Arts (B.A) - Humanities", labelHi: 'स्नातक कला (बी.ए.) - मानविकी', href: '#courses' },
          { labelEn: "Bachelor's of Arts (B.A) - Social Science", labelHi: 'स्नातक कला (बी.ए.) - सामाजिक विज्ञान', href: '#courses' },
          { labelEn: "Bachelor's of Commerce (B.Com)", labelHi: 'स्नातक वाणिज्य (बी.कॉम)', href: '#courses' },
        ]
      },
      {
        headerEn: 'UNIVERSITY RESOURCES',
        headerHi: 'विश्वविद्यालय संसाधन',
        links: [
          { labelEn: 'Academic Calendar', labelHi: 'अकादमिक कैलेंडर', href: '#notices' },
          { labelEn: 'Syllabus & Regulations', labelHi: 'पाठ्यक्रम और विनियम', href: '#features' },
          { labelEn: 'E-Learning Portal', labelHi: 'ई-लर्निंग पोर्टल', href: 'https://college.mkrcollege.com/site/login' },
          { labelEn: 'Library Resources', labelHi: 'पुस्तकालय संसाधन', href: '#features' },
        ]
      }
    ],
    featured: {
      titleEn: 'Academic Session 2025–29',
      titleHi: 'शैक्षणिक सत्र 2025-29',
      descEn: 'Our curriculum is fully NEP-2020 compliant, focusing on skill-based learning and interdisciplinary excellence.',
      descHi: 'हमारा पाठ्यक्रम अब पूरी तरह से NEP-2020 के अनुरूप है, जो कौशल-आधारित शिक्षा पर केंद्रित है।',
      img: '/images/featured-academics.png'
    }
  },
  important_links: {
    titleEn: 'Resource Center',
    titleHi: 'संसाधन केंद्र',
    sections: [
      {
        headerEn: 'SCHOLARSHIPS',
        headerHi: 'छात्रवृत्ति',
        links: [
          { labelEn: 'Post Matric Scholarship', labelHi: 'पोस्ट मैट्रिक स्कॉलरशिप', href: 'https://www.pmsonline.bih.nic.in/' },
          { labelEn: 'National Scholarship Portal', labelHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल', href: 'https://scholarships.gov.in/' },
          { labelEn: 'CM Kanya Utthan Yojana', labelHi: 'मुख्यमंत्री कन्या उत्थान योजना', href: 'https://medhasoft.bih.nic.in/' },
        ]
      },
      {
        headerEn: 'ADMISSIONS & PORTALS',
        headerHi: 'प्रवेश और पोर्टल',
        links: [
          { labelEn: 'Bihar University Portal', labelHi: 'बिहार विश्वविद्यालय प्रवेश पोर्टल', href: 'https://umis.brabu.ac.in/' },
          { labelEn: 'ERP Login Portal', labelHi: 'ईआरपी लॉगिन पोर्टल', href: 'https://college.mkrcollege.com/site/login' },
        ]
      }
    ],
    featured: {
      titleEn: 'Scholarships Up to ₹50,000',
      titleHi: '₹50,000 तक की छात्रवृत्ति',
      descEn: 'Apply for Mukhyamantri Kanya Utthan Yojana and other state grants directly through our student cell.',
      descHi: 'मुख्यमंत्री कन्या उत्थान योजना और अन्य राज्य अनुदानों के लिए सीधे आवेदन करें।',
      img: '/images/featured-scholarship.png'
    }
  }
};

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('resize', handleResize); window.removeEventListener('scroll', handleScroll); };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const [activeMenu, setActiveMenu] = useState(null);
  const menuTimeout = useRef(null);

  const handleMouseEnter = (menu) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const navLinks = [
    { href: '/', labelEn: 'Home', labelHi: 'होम' },
    { href: '#founders', labelEn: 'Founder Member', labelHi: 'संस्थापक' },
    { type: 'mega', key: 'academics', labelEn: 'Academics', labelHi: 'अकादमिक', href: '#courses' },
    { type: 'mega', key: 'important_links', labelEn: 'Important Links', labelHi: 'लिंक्स', href: 'https://mkrcollege.com/' },
    { href: '#notices', labelEn: 'Notice', labelHi: 'सूचनाएं' },
    { href: '#gallery', labelEn: 'Gallery', labelHi: 'गैलरी' },
    { href: '#testimonials', labelEn: 'Testimonials', labelHi: 'प्रशंसापत्र' },
    { href: 'https://college.mkrcollege.com/online_admission', labelEn: 'Online Admission', labelHi: 'ऑनलाइन प्रवेश' },
    { href: '#contact', labelEn: 'Contact Us', labelHi: 'संपर्क' },
  ];

  return (
    <>
      {/* Top Info Bar ... (no change) */}
      <motion.div
        className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white text-xs py-2 px-4 relative z-[60]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 font-medium tracking-wide">
            <a href="tel:+917544052444" className="flex items-center gap-1.5 hover:text-white/80 transition-opacity">
              <span>📞</span><span>+91-75440 52444</span>
            </a>
            <a href="mailto:mkrdr.grdcollege@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-opacity">
              <span>✉️</span><span>mkrdr.grdcollege@gmail.com</span>
            </a>
            <a href="https://www.facebook.com/M.K.R.DR.G.R.D.College2Sitamarhi" target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-white/80 transition-opacity" aria-label="Facebook Page">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>

          <motion.div
            className={`hidden lg:block flex-1 text-center font-bold text-white/90 ${language === 'en' ? 'text-[11px] tracking-[0.2em] uppercase' : 'text-[13px] tracking-normal'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {language === 'en' ? 'A Center for Academic Excellence & Innovation' : 'शैक्षणिक उत्कृष्टता और नवाचार का केंद्र'}
          </motion.div>

          <div className="flex items-center gap-1 bg-white/10 p-0.5 rounded-md shrink-0 border border-white/20">
            <button
              onClick={() => { if (language !== 'hi') toggleLanguage(); }}
              className={`px-3 py-1 rounded-[4px] text-[10px] sm:text-xs font-bold transition-all duration-300 ${language === 'hi' ? 'bg-white text-[#0077B6] shadow-sm' : 'text-white hover:bg-white/10'}`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => { if (language !== 'en') toggleLanguage(); }}
              className={`px-3 py-1 rounded-[4px] text-[10px] sm:text-xs font-bold transition-all duration-300 ${language === 'en' ? 'bg-white text-[#0077B6] shadow-sm' : 'text-white hover:bg-white/10'}`}
            >
              English
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar Top Tier */}
      <motion.nav
        className={`bg-[#FFF8F0] relative z-[60] border-b-2 border-gray-100`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex justify-between items-center flex-wrap gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 shrink-0 overflow-hidden">
            <Image src="/assets/college logo.webp" alt="MKR College Logo" width={80} height={80} priority className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-sm shrink-0 border-2 border-[#800000]/10" />
            <div className="leading-tight">
              <span className="font-serif font-black text-[#800000] text-xl sm:text-3xl block tracking-wide">M.K.R. College</span>
              <span className="text-[11px] sm:text-sm font-bold text-[#8B6914] tracking-widest uppercase">Sitamarhi, Bihar</span>
            </div>
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            <Link
              href="/admit-card"
              className="border-2 border-slate-300 text-slate-700 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-sm hover:border-[#800000] hover:text-[#800000] hidden md:flex"
            >
              {language === 'en' ? 'Admit Card' : 'प्रवेश पत्र'}
            </Link>
            <Link
              href="/admin-login"
              className="border-2 border-slate-300 text-slate-700 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all shadow-sm hover:border-[#800000] hover:text-[#800000] hidden sm:block"
            >
              {language === 'en' ? 'Admin' : 'एडमिन'}
            </Link>
            <a
              href="https://college.mkrcollege.com/site/login"
              target="_blank"
              rel="noopener"
              className="bg-[#002B5C] text-white px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-[0_4px_15px_rgba(0,43,92,0.4)] hover:bg-[#001836] hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all whitespace-nowrap hidden md:block"
            >
              ERP Login
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden ml-2 text-[#800000] text-2xl w-11 h-11 flex items-center justify-center rounded-lg transition-all duration-300 relative z-[70] ${mobileOpen ? 'bg-[#800000]/10' : 'hover:bg-gray-100'}`}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Navbar Bottom Tier - The Links Array */}
      <motion.div
        className={`bg-[#002B5C] hidden lg:block sticky top-0 z-40 transition-shadow relative ${scrolled ? 'shadow-lg' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-12">
          <div className="flex items-center justify-center w-full h-full space-x-1 xl:space-x-4">
            {navLinks.map((link) => (
              <div
                key={link.labelEn}
                className="h-full flex items-center px-3 relative group"
                onMouseEnter={() => link.type === 'mega' ? handleMouseEnter(link.key) : handleMouseLeave()}
              >
                {link.href.startsWith('http') && link.type !== 'mega' ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white font-semibold text-[13px] xl:text-[14px] transition-colors whitespace-nowrap flex items-center gap-1.5 py-1 px-3 rounded-md hover:bg-white/15`}
                  >
                    {link.labelEn}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-white font-semibold text-[13px] xl:text-[14px] transition-colors whitespace-nowrap flex items-center gap-1.5 py-1 px-3 rounded-md ${activeMenu === link.key ? 'bg-white/10' : 'hover:bg-white/15'}`}
                  >
                    {link.labelEn}
                    {link.type === 'mega' && <span className={`text-[10px] ml-0.5 opacity-80 transition-transform duration-300 ${activeMenu === link.key ? 'rotate-180' : ''}`}>▼</span>}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => handleMouseEnter(activeMenu)}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 right-0 bg-white border-t-4 border-[#002B5C] shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[45] overflow-hidden"
          >


              <div className="max-w-7xl mx-auto p-10 flex gap-12">
                {/* Columns */}
                <div className="flex-1 grid grid-cols-2 gap-10">
                  {megaMenuItems[activeMenu].sections.map((section, sidx) => (
                    <div key={sidx}>
                      <h4 className="text-[#800000] font-black text-xs tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                        <span className="w-6 h-[2px] bg-[#800000]" />
                        {language === 'en' ? section.headerEn : section.headerHi}
                      </h4>
                      <ul className="space-y-4">
                        {section.links.map((link, lidx) => (
                          <li key={lidx}>
                            <a
                              href={link.href}
                              className="text-gray-600 hover:text-[#800000] font-medium text-[15px] transition-all flex items-center group/link"
                            >
                              <span className="w-0 group-hover/link:w-3 transition-all duration-300 h-[1px] bg-[#800000] mr-0 group-hover/link:mr-2" />
                              {language === 'en' ? link.labelEn : link.labelHi}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Area */}
                <div className="w-[380px] bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-6 border border-sky-100/50 flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full -mr-16 -mt-16 blur-3xl" />

                  {/* Prominent Image */}
                  <div className="w-full h-[160px] mb-4 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img src={megaMenuItems[activeMenu].featured.img} alt="Featured" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="relative z-10">
                    <span className="bg-[#0057FF] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                      {language === 'en' ? 'Highlight' : 'मुख्य आकर्षण'}
                    </span>
                    <h5 className="text-[#001D4A] font-black text-lg mb-2 leading-tight">
                      {language === 'en' ? megaMenuItems[activeMenu].featured.titleEn : megaMenuItems[activeMenu].featured.titleHi}
                    </h5>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {language === 'en' ? megaMenuItems[activeMenu].featured.descEn : megaMenuItems[activeMenu].featured.descHi}
                    </p>
                    <a href="#admission" className="text-[#0057FF] font-bold text-sm flex items-center gap-2 hover:underline">
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-[100] overflow-y-auto pb-8 flex flex-col">
            <div className="flex justify-between items-center px-4 py-3 border-b-2 border-gray-100 shrink-0 bg-[#FFF8F0]">
              <div className="flex items-center gap-3">
                <img src="/assets/college logo.webp" alt="MKR College Logo" className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-[#800000]/10" />
                <div className="leading-tight">
                  <span className="font-serif font-black text-[#800000] text-lg block tracking-wide">M.K.R. College</span>
                  <span className="text-[10px] font-bold text-[#8B6914] tracking-widest uppercase">Sitamarhi, Bihar</span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#800000] text-xl w-10 h-10 flex items-center justify-center rounded-lg bg-[#800000]/10 hover:bg-[#800000]/20 transition-all font-bold"
               >
                 ✕
              </button>
            </div>
            <div className="px-4 py-4 space-y-2 flex-grow">
              {navLinks.map((link) => (
                <div key={link.labelEn} className="border-b border-gray-50 last:border-0 pb-1">
                  {link.type === 'mega' ? (
                    <div>
                      <button
                        onClick={() => setActiveMenu(activeMenu === link.key ? null : link.key)}
                        className="w-full flex items-center justify-between text-gray-700 font-bold text-lg py-4 px-4 rounded-xl hover:bg-gray-50 transition-all"
                      >
                        {link.labelEn}
                        <span className={`text-sm transition-transform duration-300 ${activeMenu === link.key ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      <AnimatePresence>
                        {activeMenu === link.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-gray-50/50 rounded-2xl mx-2 overflow-hidden"
                          >
                            {megaMenuItems[link.key].sections.map((section, sidx) => (
                              <div key={sidx} className="p-4 pt-6 first:pt-4">
                                <h4 className="text-[#800000] font-black text-[10px] tracking-widest uppercase mb-4 px-2">
                                  {language === 'en' ? section.headerEn : section.headerHi}
                                </h4>
                                <div className="space-y-1">
                                  {section.links.map((sub, lidx) => (
                                    <a
                                      key={lidx}
                                      href={sub.href}
                                      onClick={() => { setMobileOpen(false); setActiveMenu(null); }}
                                      className="block text-gray-600 font-medium py-3 px-3 rounded-lg active:bg-white active:shadow-sm transition-all"
                                    >
                                      {language === 'en' ? sub.labelEn : sub.labelHi}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-700 font-bold text-lg py-4 px-4 rounded-xl hover:bg-gray-50 transition-all border-b border-transparent"
                    >
                      {link.labelEn}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-6 space-y-4 border-t border-gray-100 mt-6 px-4">
                <MotionLink
                  href="/admit-card"
                  whileTap={{ scale: 0.95, backgroundColor: '#FFD700', color: '#800000' }}
                  onClick={() => setMobileOpen(false)}
                  className="block text-center border-2 border-gray-200 text-gray-700 px-5 py-3.5 rounded-2xl text-base font-bold transition-all shadow-sm bg-white"
                >
                  {language === 'en' ? 'Admit Card' : 'प्रवेश पत्र'}
                </MotionLink>
                <MotionLink
                  href="/admin-login"
                  whileTap={{ scale: 0.95, backgroundColor: '#FFD700', color: '#800000' }}
                  onClick={() => setMobileOpen(false)}
                  className="block text-center border-2 border-gray-200 text-gray-700 px-5 py-3.5 rounded-2xl text-base font-bold transition-all shadow-sm bg-white"
                >
                  {language === 'en' ? 'Admin Portal' : 'एडमिन पोर्टल'}
                </MotionLink>
                <a
                  href="https://college.mkrcollege.com/site/login"
                  target="_blank"
                  rel="noopener"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center bg-[#5B48D9] text-white px-5 py-3.5 rounded-2xl text-base font-bold active:bg-[#4A39BA] shadow-[0_10px_20px_rgba(91,72,217,0.3)] transition-colors"
                >
                  ERP Login
                </a>
              </div>
            </div>
          </div>
        )}
    </>
  );
}