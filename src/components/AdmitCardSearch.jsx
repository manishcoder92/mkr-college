'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdmitCardSearch({ onResult }) {
  const [rollNumber, setRollNumber] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admit-card', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rollNumber, dob }),
      });

      const data = await res.json();

      if (data.success) {
        onResult({ pdfUrl: data.pdfUrl, rollNumber });
      } else {
        setError(data.message || 'No record found');
      }
    } catch (err) {
      setError('Connection error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full mx-auto bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-100"
    >
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#800000]">Download Admit Card</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2 font-sans">Enter credentials to fetch your digital copy</p>
      </div>

      {error && <div className="bg-red-50 text-red-600 p-3 rounded mb-4 sm:mb-6 text-sm font-semibold border border-red-100 text-center">{error}</div>}

      <form onSubmit={handleSearch} className="space-y-4 sm:space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1 font-sans">Exam Roll Number</label>
          <input
            type="text"
            inputMode="numeric"
            className="w-full p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none transition-all font-mono text-base"
            placeholder="e.g. 243160410001"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
            autoComplete="off"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1 font-sans">Date of Birth</label>
          <input
            type="date"
            className="w-full p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none transition-all text-base"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#5C0000' }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full bg-[#800000] text-white font-black py-4 rounded-xl shadow-[0_10px_20px_rgba(128,0,0,0.3)] hover:bg-[#5C0000] transition-colors disabled:opacity-70 mt-6 text-base tracking-widest uppercase border-2 border-white/10"
        >
          {loading ? 'Searching Database...' : 'Fetch Admit Card'}
        </motion.button>
      </form>
    </motion.div>
  );
}
