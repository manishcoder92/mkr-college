'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function NoticeMarquee() {
  const [notices, setNotices] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchNotices() {
      try {
        const res = await fetch('/api/notices');
        if (!res.ok) return;
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) return;
        const data = await res.json();
        if (data.success) {
          setNotices(data.notices);
        }
      } catch (error) {
        // Silently fail - no notices to show
      }
    }
    fetchNotices();
    const interval = setInterval(fetchNotices, 60000);
    return () => clearInterval(interval);
  }, []);

  if (notices.length === 0) {
    // Show a default notice when DB is empty/unavailable
    const defaultNotices = [
      { _id: 'default1', textEn: 'Welcome to M.K.R. DR. G.R.D College — Admissions Open for 2025-26', textHi: 'M.K.R. DR. G.R.D कॉलेज में आपका स्वागत है — 2025-26 के लिए प्रवेश खुले हैं', isImportant: true },
      { _id: 'default2', textEn: 'Annual Examination Admit Cards are now available for download', textHi: 'वार्षिक परीक्षा के प्रवेश पत्र अब डाउनलोड के लिए उपलब्ध हैं', isImportant: false },
    ];
    return <MarqueeUI notices={defaultNotices} language={language} />;
  }

  return <MarqueeUI notices={notices} language={language} />;
}

function MarqueeUI({ notices, language }) {
  return (
    <div className="bg-[#800000] text-white py-2 overflow-hidden border-b-2 border-[#FFD700] relative flex items-center">
      <div className="bg-[#5C0000] px-4 py-2 font-bold z-10 whitespace-nowrap shadow-md hidden md:block text-sm">
        {language === 'en' ? '📢 LATEST UPDATES' : '📢 नवीनतम अपडेट'}
      </div>
      <div className="marquee-container flex-1 overflow-hidden relative h-6">
        <div className="marquee-content absolute whitespace-nowrap" style={{ animation: 'slide 30s linear infinite' }}>
          {[...notices, ...notices].map((notice, index) => (
            <span key={`${notice._id}-${index}`} className="mx-8 font-sans text-sm">
              <span className="text-[#FFD700] mr-2">♦</span>
              <span className={notice.isImportant ? 'text-[#FFD700] font-bold' : ''}>
                {language === 'en' ? (notice.textEn || notice.textHi) : (notice.textHi || notice.textEn)}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
