'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function CheckFormStatusModal({ isOpen, onClose, language }) {
  const [form, setForm] = useState({ refNumber: '', phone: '' });
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChecking(true);
    
    try {
      const res = await fetch('/api/admission/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId: form.refNumber, phone: form.phone })
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setResult(
          (language === 'en' ? `Status: ${data.data.status}\nApplicant: ${data.data.name}\nCourse: ${data.data.course}` : `स्थिति: ${data.data.status}\nआवेदक: ${data.data.name}\nकोर्स: ${data.data.course}`)
          + (data.data.remarks ? `\n\nRemarks: ${data.data.remarks}` : '')
        );
      } else {
        setResult(data.message || (language === 'en' ? 'Application not found.' : 'आवेदन नहीं मिला।'));
      }
    } catch (err) {
      console.error(err);
      setResult(language === 'en' ? 'Network error occurred. Please try again later.' : 'नेटवर्क त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।');
    } finally {
      setChecking(false);
    }
  };

  const handleClose = () => {
    setForm({ refNumber: '', phone: '' });
    setResult(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 pointer-events-none">
            <motion.div
              className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl pointer-events-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#800000] to-[#5C0000] p-6 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === 'en' ? 'Check Application Status' : 'आवेदन की स्थिति जांचें'}
                </h3>
                <p className="text-[#FFD700] text-sm">
                  {language === 'en' ? 'Track your online admission form' : 'अपने ऑनलाइन प्रवेश फॉर्म को ट्रैक करें'}
                </p>
              </div>

              {/* Body */}
              <div className="p-6">
                {!result ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Reference Number / Application ID' : 'संदर्भ संख्या / आवेदन आईडी'}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.refNumber}
                        onChange={(e) => setForm({ ...form, refNumber: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none text-sm transition-all"
                        placeholder="e.g. MKR-2025-1049"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Registered Mobile Number' : 'पंजीकृत मोबाइल नंबर'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none text-sm transition-all"
                        placeholder="+91-"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={checking}
                      className="w-full bg-[#800000] text-white font-bold py-3.5 rounded-lg hover:bg-[#5C0000] transition-colors shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                    >
                      {checking ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        language === 'en' ? 'Check Status' : 'स्थिति जांचें'
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-[#0077B6]/10 rounded-full flex items-center justify-center text-[#0077B6] mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{language === 'en' ? 'Status Report' : 'स्थिति रिपोर्ट'}</h4>
                    <p className="text-gray-600 text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 whitespace-pre-line text-left">{result}</p>
                    <button
                      onClick={() => setResult(null)}
                      className="mt-6 text-[#800000] text-sm font-bold hover:underline"
                    >
                      {language === 'en' ? 'Check Another Application' : 'एक और आवेदन जांचें'}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
