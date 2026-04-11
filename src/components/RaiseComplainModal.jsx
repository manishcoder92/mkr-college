'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function RaiseComplainModal({ isOpen, onClose, language }) {
  const [form, setForm] = useState({ name: '', phone: '', complain: '' });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setSubmitting(false);
      setResult(true);
    }, 1500);
  };

  const handleClose = () => {
    setForm({ name: '', phone: '', complain: '' });
    setResult(false);
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
              <div className="bg-gradient-to-r from-red-700 to-red-900 p-6 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === 'en' ? 'Raise a Complain' : 'शिकायत दर्ज करें'}
                </h3>
                <p className="text-red-200 text-sm">
                  {language === 'en' ? 'We are here to help resolve your issues.' : 'हम आपकी समस्याओं को हल करने में मदद करने के लिए यहाँ हैं।'}
                </p>
              </div>

              {/* Body */}
              <div className="p-6">
                {!result ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Full Name' : 'पूरा नाम'}
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-red-700 focus:ring-2 focus:ring-red-700/20 outline-none text-sm transition-all"
                        placeholder={language === 'en' ? 'Enter your name' : 'अपना नाम दर्ज करें'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-red-700 focus:ring-2 focus:ring-red-700/20 outline-none text-sm transition-all"
                        placeholder="+91-"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {language === 'en' ? 'Complain Details' : 'शिकायत का विवरण'}
                      </label>
                      <textarea
                        required
                        rows="3"
                        value={form.complain}
                        onChange={(e) => setForm({ ...form, complain: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:border-red-700 focus:ring-2 focus:ring-red-700/20 outline-none text-sm transition-all resize-none"
                        placeholder={language === 'en' ? 'Describe your issue...' : 'अपनी समस्या का वर्णन करें...'}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-red-700 text-white font-bold py-3.5 rounded-lg hover:bg-red-800 transition-colors shadow-md flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                    >
                      {submitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        language === 'en' ? 'Submit Complain' : 'शिकायत दर्ज करें'
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-green-600">✓</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">
                      {language === 'en' ? 'Complain Registered' : 'शिकायत दर्ज हो गई'}
                    </h4>
                    <p className="text-gray-600 text-sm mb-6">
                      {language === 'en' 
                        ? 'Your complain has been submitted successfully. Our team will contact you soon.' 
                        : 'आपकी शिकायत सफलतापूर्वक दर्ज कर ली गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।'}
                    </p>
                    <button
                      onClick={handleClose}
                      className="w-full bg-slate-100 text-gray-800 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      {language === 'en' ? 'Done' : 'पूर्ण हुआ'}
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
