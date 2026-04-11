'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Default notices shown when DB is empty / unavailable
const defaultNotices = [
  { _id: 'd1', textEn: 'UG Semester I Session 2025-29 Exam Schedule — Starts 15.01.2026', textHi: 'यूजी सेमेस्टर-I सत्र 2025-29 परीक्षा अनुसूची — 15.01.2026 से', isImportant: false, createdAt: '2026-01-01' },
  { _id: 'd2', textEn: 'Admission Open for UG BA/BCom Session 2025-29', textHi: '2025-29 सत्र के लिए यूजी बीए/बीकॉम प्रवेश शुरू', isImportant: true, createdAt: '2025-12-01' },
  { _id: 'd3', textEn: 'Exam form submission for Semester III & V — Check dates on notice board', textHi: 'सेमेस्टर III और V के लिए परीक्षा फॉर्म जमा करें — तिथियां सूचना पट्ट पर देखें', isImportant: false, createdAt: '2025-11-01' },
];

export default function NoticeBoard({ language }) {
  const [notices, setNotices] = useState(defaultNotices);

  useEffect(() => {
    async function fetchNotices() {
      try {
        const res = await fetch('/api/notices');
        if (!res.ok) return;
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) return;
        const data = await res.json();
        if (data.success && data.notices.length > 0) {
          setNotices(data.notices);
        }
      } catch {
        // Keep defaults
      }
    }
    fetchNotices();
  }, []);

  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { month: 'short', year: 'numeric' });
    } catch {
      return '';
    }
  };

  return (
    <section id="notices" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#FFD700] font-bold text-sm uppercase tracking-widest">
            {language === 'en' ? 'Latest Updates' : 'नवीनतम अपडेट'}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#800000] mt-2">
            {language === 'en' ? 'Notice Board' : 'सूचना पट्ट'}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {notices.map((notice, i) => (
            <motion.div
              key={notice._id}
              initial="hidden"
              whileInView="visible"
              whileHover={{ x: 8, scale: 1.01, boxShadow: "0 10px 25px -5px rgba(128,0,0,0.1)" }}
              viewport={{ once: true }}
              variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.4, delay: i * 0.1 } } }}
              className={`flex items-start gap-4 p-5 rounded-lg border-l-4 ${notice.isImportant ? 'border-[#FFD700] bg-[#FFD700]/5' : 'border-[#800000] bg-slate-50'} shadow-sm transition-all cursor-default`}
            >
              <span className={`shrink-0 text-xs font-bold px-3 py-1 rounded whitespace-nowrap ${notice.isImportant ? 'bg-[#FFD700] text-[#800000]' : 'bg-[#800000] text-white'}`}>
                {formatDate(notice.createdAt)}
              </span>
              <p className="text-gray-800 text-sm font-medium">
                {language === 'en' ? notice.textEn : notice.textHi}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
