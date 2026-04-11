'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdminNoticeForm() {
  const [formData, setFormData] = useState({
    textEn: '',
    textHi: '',
    validFrom: '',
    validUntil: '',
    isImportant: false,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setStatus('Error: Not authenticated. Please login again.');
      return;
    }

    try {
      const res = await fetch('/api/notices', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus(`✅ ${data.message || 'Notice successfully posted!'}`);
        setFormData({
          textEn: '', textHi: '', validFrom: '', validUntil: '', isImportant: false
        });
      } else {
        setStatus(`❌ Error: ${data.message || data.error}`);
      }
    } catch (error) {
      setStatus('❌ Network error. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-xl font-serif font-bold text-[#800000] mb-4 border-b pb-2">Publish New Notice</h3>
      
      {status && (
        <div className={`p-3 mb-4 rounded font-medium text-sm ${status.includes('✅') ? 'bg-green-100 text-green-800' : status.includes('❌') ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Notice Text (English)</label>
          <textarea
            name="textEn"
            value={formData.textEn}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-[#800000] outline-none"
            rows="2"
            placeholder="e.g. College will remain closed tomorrow..."
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Notice Text (Hindi)</label>
          <textarea
            name="textHi"
            value={formData.textHi}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-[#800000] outline-none"
            rows="2"
            placeholder="उदा. कल कॉलेज बंद रहेगा..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Display From</label>
            <input
              type="datetime-local"
              name="validFrom"
              value={formData.validFrom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:border-[#800000] outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Display Until</label>
            <input
              type="datetime-local"
              name="validUntil"
              value={formData.validUntil}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:border-[#800000] outline-none"
            />
          </div>
        </div>

        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            id="isImportant"
            name="isImportant"
            checked={formData.isImportant}
            onChange={handleChange}
            className="h-4 w-4 text-[#800000] rounded focus:ring-[#800000]"
          />
          <label htmlFor="isImportant" className="ml-2 block text-sm font-bold text-gray-700">
            Mark as Important (Highlights in Gold)
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#5C0000' }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-[#800000] text-white font-black py-4 px-4 rounded-xl shadow-lg mt-6 transition-colors tracking-widest uppercase text-sm"
        >
          Publish to Marquee
        </motion.button>
      </form>
    </div>
  );
}
