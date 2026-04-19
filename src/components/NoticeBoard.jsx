'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Default notices shown when DB is empty / unavailable
const defaultNotices = [
  { _id: 'd1', textEn: 'UG Semester I Session 2026-30 Exam Schedule — Starts 15.01.2026', textHi: 'यूजी सेमेस्टर-I सत्र 2026-30 परीक्षा अनुसूची — 15.01.2026 से', isImportant: false, createdAt: '2026-01-01' },
  { _id: 'd2', textEn: 'Admission Open for UG BA/BCom Session 2026-30', textHi: '2026-30 सत्र के लिए यूजी बीए/बीकॉम प्रवेश शुरू', isImportant: true, createdAt: '2025-12-01' },
  { _id: 'd3', textEn: 'Exam form submission for Semester III & V — Check dates on notice board', textHi: 'सेमेस्टर III और V के लिए परीक्षा फॉर्म जमा करें — तिथियां सूचना पट्ट पर देखें', isImportant: false, createdAt: '2025-11-01' },
];

export default function NoticeBoard({ language }) {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    async function fetchNotices() {
      try {
        // Appending timestamp to strictly bypass Vercel/browser cache for real-time updates
        const res = await fetch(`/api/notices?t=${Date.now()}`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch');
        
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) throw new Error('Not JSON');
        
        const data = await res.json();
        if (data.success && data.notices.length > 0) {
          setNotices(data.notices);
        } else {
          setNotices(defaultNotices);
        }
      } catch (err) {
        setNotices(defaultNotices);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNotices();
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedNotice(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    <section id="notices" className="py-20 px-4 bg-white relative">
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
          {isLoading ? (
            // Loading Skeleton
            <div className="flex flex-col items-center justify-center py-10 opacity-60">
              <div className="w-10 h-10 border-4 border-[#800000]/20 border-t-[#800000] rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 font-medium">Loading Notices...</p>
            </div>
          ) : (
            notices.map((notice, i) => (
              <motion.div
                key={notice._id}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(128,0,0,0.1)" }}
                viewport={{ once: true }}
                variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.4, delay: i * 0.1 } } }}
                onClick={() => notice.imageUrl && setSelectedNotice(notice)}
                className={`flex flex-col gap-4 p-5 rounded-lg border-l-4 ${notice.isImportant ? 'border-[#FFD700] bg-[#FFD700]/5' : 'border-[#800000] bg-slate-50'} shadow-sm transition-all ${notice.imageUrl ? 'cursor-pointer' : 'cursor-default'} group`}
              >
                {/* Inline Image Display */}
                {notice.imageUrl && (
                  <div className="w-full rounded-md overflow-hidden bg-white border border-gray-200 shadow-sm relative group-hover:shadow-md transition-shadow">
                    <img 
                      src={notice.imageUrl} 
                      alt="Notice Attachment" 
                      className="w-full h-auto max-h-[500px] object-contain"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className={`shrink-0 text-xs font-bold px-3 py-1 rounded whitespace-nowrap w-max ${notice.isImportant ? 'bg-[#FFD700] text-[#800000]' : 'bg-[#800000] text-white'}`}>
                    {formatDate(notice.createdAt)}
                  </span>
                  
                  {/* Notice Text */}
                  {(notice.textEn || notice.textHi) && (
                    <p className="text-gray-800 text-sm font-medium leading-relaxed">
                      {language === 'en' ? (notice.textEn || notice.textHi) : (notice.textHi || notice.textEn)}
                    </p>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Notice Detail Modal */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded whitespace-nowrap ${selectedNotice.isImportant ? 'bg-[#FFD700] text-[#800000]' : 'bg-[#800000] text-white'}`}>
                    {formatDate(selectedNotice.createdAt)}
                  </span>
                  {selectedNotice.isImportant && (
                    <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 rounded">IMPORTANT</span>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedNotice(null)}
                  className="bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-full p-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-grow bg-slate-50">
                <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-6">
                  {language === 'en' ? (selectedNotice.textEn || selectedNotice.textHi) : (selectedNotice.textHi || selectedNotice.textEn)}
                </p>

                {/* Responsive Image Display */}
                {selectedNotice.imageUrl && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                    <img 
                      src={selectedNotice.imageUrl} 
                      alt="Notice Attachment" 
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
