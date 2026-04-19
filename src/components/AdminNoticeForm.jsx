'use client';

import { useState, useRef } from 'react';
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
  
  // Image Upload State
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setStatus('❌ Invalid file type. Please upload JPG, PNG, or WebP.');
      return;
    }
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Compress image before sending to MongoDB
  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Max dimension to prevent DB bloat
          const MAX_WIDTH = 1200;
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          // Convert to highly compressed WebP
          const dataUrl = canvas.toDataURL('image/webp', 0.7);
          resolve(dataUrl);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
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
      let compressedImageUrl = null;
      if (imageFile) {
        setStatus('Compressing image...');
        compressedImageUrl = await compressImage(imageFile);
      }

      const payload = {
        ...formData,
        textEn: formData.textHi, // Auto-map English field to the Hindi input
        imageUrl: compressedImageUrl,
      };

      setStatus('Publishing to server...');
      const res = await fetch('/api/notices', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus(`✅ ${data.message || 'Notice successfully posted!'}`);
        // Reset everything
        setFormData({
          textEn: '', textHi: '', validFrom: '', validUntil: '', isImportant: false
        });
        removeImage();
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
          <label className="block text-sm font-bold text-gray-700 mb-1">Notice Message</label>
          <textarea
            name="textHi"
            value={formData.textHi}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:border-[#800000] outline-none"
            rows="2"
            placeholder="उदा. कल कॉलेज बंद रहेगा..."
          />
        </div>

        {/* Drag and Drop Image Upload */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Notice Image (Optional)</label>
          {!imagePreview ? (
            <div 
              className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors ${isDragging ? 'border-[#800000] bg-[#800000]/5' : 'border-gray-300 bg-white hover:bg-gray-50'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#800000] hover:text-[#5C0000] focus-within:outline-none">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" ref={fileInputRef} onChange={handleFileChange} accept="image/jpeg, image/png, image/webp" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, WebP up to 5MB (Will be auto-compressed)</p>
              </div>
            </div>
          ) : (
            <div className="relative mt-2 rounded-md overflow-hidden border border-gray-200">
              <img src={imagePreview} alt="Preview" className="w-full h-auto max-h-48 object-contain bg-gray-100" />
              <button 
                type="button" 
                onClick={removeImage}
                className="absolute top-2 right-2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 shadow-md transition-colors"
                title="Remove image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          )}
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
