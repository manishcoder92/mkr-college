'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const collegeInfo = {
  name: 'M.K.R. Dr. G.R.D. College',
  location: 'Punaura Pashchim, Sitamarhi, Bihar 843302',
  founded: 'April 27, 2015',
  affiliation: 'B.R.A. Bihar University, Muzaffarpur',
  courses: '3 UG Programmes: B.A. (Social Science), B.Com., and B.A. (Humanities)',
  baSocialScience: 'Ancient Indian History & Culture (AIH&C), Economics, Geography, History, Home Science, Political Science, Psychology, Sociology',
  bcomSubjects: 'Accounting & Finance, Business Environment, Marketing, Business Finance & Corporate Administration',
  baHumanities: 'Hindi, English, Music, Sanskrit, Philosophy, Urdu',
  principalPhone: '+91-7544052444',
  admissionPhone: '+91-7597052444',
  headClerkPhone: '+91-8544052244',
  email: 'mkrdr.grdcollege@gmail.com',
  facilities: 'CCTV surveillance, free Wi-Fi, smart classrooms, well-stocked library, RO drinking water',
  scholarship: 'Mukhyamantri Kanya Utthan Yojana - ₹50,000 for female graduates',
  admissionStatus: 'Admission Open for UG BA/BCom Session 2025-29',
  erpLink: 'https://college.mkrcollege.com/site/login',
};

const quickReplies = [
  { label: '📚 Courses Offered', key: 'courses' },
  { label: '📞 Contact Info', key: 'contact' },
  { label: '📋 Admission Process', key: 'admission' },
  { label: '🏢 About College', key: 'about' },
  { label: '💰 Scholarships', key: 'scholarship' },
  { label: '🏫 Facilities', key: 'facilities' },
];

function getAnswer(key) {
  switch (key) {
    case 'courses':
      return `We offer 3 UG programmes:\n\n🎓 **B.A. (Social Science)**\nSubjects: ${collegeInfo.baSocialScience}\n\n🎓 **B.Com.**\nSubjects: ${collegeInfo.bcomSubjects}\n\n🎓 **B.A. (Humanities)**\nSubjects: ${collegeInfo.baHumanities}\n\n📌 All programmes are 3 years (6 semesters), affiliated with ${collegeInfo.affiliation}.`;
    case 'contact':
      return `📞 **Principal:** ${collegeInfo.principalPhone}\n📞 **Admission:** ${collegeInfo.admissionPhone}\n✉️ **Email:** ${collegeInfo.email}\n📍 **Address:** ${collegeInfo.location}`;
    case 'admission':
      return `✅ **${collegeInfo.admissionStatus}**\n\nFor admission enquiries, call: ${collegeInfo.admissionPhone}\n\nYou can also visit our ERP portal: ${collegeInfo.erpLink}`;
    case 'about':
      return `🏛️ **${collegeInfo.name}**\n\nFounded on ${collegeInfo.founded}, our college is situated in the historically significant Punaura Dham, Sitamarhi, Bihar.\n\nAffiliated with ${collegeInfo.affiliation}, we offer quality education in ${collegeInfo.courses}.`;
    case 'scholarship':
      return `💰 **${collegeInfo.scholarship}**\n\nFemale students of our college are eligible for this government scholarship upon graduation.`;
    case 'facilities':
      return `🏫 Our campus offers:\n\n• ${collegeInfo.facilities.split(', ').join('\n• ')}\n\n👨‍🏫 Expert Faculty | 💡 Smart Classes | 🏆 Career Counseling`;
    default:
      return `Welcome to ${collegeInfo.name}! How can I help you?`;
  }
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'enquiry'
  const [messages, setMessages] = useState([
    { from: 'bot', text: `👋 Namaste! Welcome to MKR College.\nI'm your virtual assistant. How can I help you today?` }
  ]);
  const [showBubble, setShowBubble] = useState(true);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, activeTab]);

  const handleQuickReply = (key, label) => {
    setMessages(prev => [...prev, { from: 'user', text: label }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: getAnswer(key) }]);
    }, 500);
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '95cee5f8-a6a7-44ab-968f-359a3322b0f4',
          subject: `Admission Guidance Request - ${formData.fullName}`,
          from_name: 'MKR Assistant',
          to_email: 'mkrdr.grdcollege@gmail.com',
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong! Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error! Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button Container */}
      <div className="fixed bottom-6 right-6 z-[100] flex items-end gap-3 pointer-events-none">
        {/* Animated Speech Bubble */}
        <AnimatePresence>
          {showBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="pointer-events-auto bg-white px-5 py-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] text-sm font-semibold text-gray-800 max-w-[240px] border border-blue-50 relative mb-4"
            >
              Need guidance? Your MKR mentor is here! ⚡️
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-blue-50 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Avatar Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setIsOpen(!isOpen); setShowBubble(false); }}
          className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-[0_10px_30px_rgba(0,123,255,0.3)] overflow-hidden relative group transition-all duration-300 ring-4 ring-blue-400/20"
          aria-label="MKR Assistant"
        >
          <img 
            src="/assets/chat-counselor.png" 
            alt="Assistant" 
            className={`w-full h-full object-cover transition-transform duration-500 ${isOpen ? 'scale-110' : 'group-hover:scale-110'}`}
          />
          {isOpen && (
            <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white text-3xl font-light">✕</span>
            </div>
          )}
          {!isOpen && <div className="absolute bottom-1 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm" />}
        </motion.button>
      </div>

      {/* Main Chat/Enquiry Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-28 right-4 sm:right-10 z-[100] w-[calc(100vw-2rem)] sm:w-[420px] bg-[#F8FAFC] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden flex flex-col transition-all"
            style={{ maxHeight: 'min(calc(100dvh - 10rem), 600px)' }}
          >
            {/* Professional Sky Header */}
            <div className="bg-gradient-to-r from-[#00A3FF] via-[#0057FF] to-[#0085FF] text-white p-6 pb-12 rounded-b-[2.5rem] relative shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-white/50 overflow-hidden bg-white/20 p-0.5">
                  <img src="/assets/chat-counselor.png" alt="MKR Counselor" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-lg tracking-tight">MKR University Coach</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs font-medium text-white/90">Always here to guide you</span>
                  </div>
                </div>
              </div>

              {/* Tab Switcher */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-1.5 shadow-xl flex border border-gray-100">
                <button 
                  onClick={() => setActiveTab('chat')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${activeTab === 'chat' ? 'bg-[#0057FF] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  Quick Help
                </button>
                <button 
                  onClick={() => setActiveTab('enquiry')}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${activeTab === 'enquiry' ? 'bg-[#0057FF] text-white shadow-lg' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  Join MKR
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="mt-10 flex-1 overflow-hidden flex flex-col min-h-0">
              {activeTab === 'chat' ? (
                <>
                  <div ref={chatRef} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 min-h-0">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                          msg.from === 'user'
                            ? 'bg-[#0057FF] text-white rounded-br-none'
                            : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 sm:p-5 bg-white border-t border-gray-100 rounded-t-[2rem] shadow-inner shrink-0">
                    <p className="text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-[0.2em] px-1">How can I assist you?</p>
                    <div className="grid grid-cols-2 gap-2">
                       {quickReplies.map((qr) => (
                        <motion.button
                          key={qr.key}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 87, 255, 0.1)' }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickReply(qr.key, qr.label)}
                          className="text-left text-xs font-bold text-[#0057FF] bg-[#0057FF]/5 px-3 py-2.5 rounded-xl transition-colors border border-[#0057FF]/5"
                        >
                          {qr.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 overflow-y-auto p-8 bg-white">
                  {submitted ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 space-y-4">
                      <div className="text-5xl">🔥</div>
                      <h4 className="text-2xl font-bold text-gray-800 tracking-tight">Awesome, {formData.fullName.split(' ')[0]}!</h4>
                      <p className="text-gray-500">Your enquiry is queued for mail client. Our counselor will guide you shortly.</p>
                      <button onClick={() => setSubmitted(false)} className="text-[#0057FF] font-bold text-sm underline pt-4">Send another query</button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-600 uppercase ml-1">Full Name</label>
                        <input 
                          required
                          type="text"
                          placeholder="Ex: Manish Kumar"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#0057FF] focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        />
                        <p className="text-[10px] text-gray-400 ml-1">Please enter your full name.</p>
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-600 uppercase ml-1">Mobile Number</label>
                        <input 
                          required
                          type="tel"
                          placeholder="+91 XXXXXXXXXX"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#0057FF] focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        <p className="text-[10px] text-gray-400 ml-1">Our team will call you for guidance.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-600 uppercase ml-1">Course Interested In</label>
                        <select 
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#0057FF] focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                          value={formData.course}
                          onChange={(e) => setFormData({...formData, course: e.target.value})}
                        >
                          <option value="">Select a course</option>
                          <option value="BA-Social">B.A. (Social Science)</option>
                          <option value="BA-Humanities">B.A. (Humanities)</option>
                          <option value="BCom">B.Com. (Accounting & Management)</option>
                        </select>
                        <p className="text-[10px] text-gray-400 ml-1">Which program are you interested in?</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-600 uppercase ml-1">Email ID</label>
                        <input 
                          required
                          type="email"
                          placeholder="abc@example.com"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-[#0057FF] focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <p className="text-[10px] text-gray-400 ml-1">We'll send you an info brochure here.</p>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02, backgroundColor: '#004acc' }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full bg-[#0057FF] text-white font-black py-4 rounded-2xl shadow-[0_10px_20px_rgba(0,87,255,0.3)] transition-colors flex items-center justify-center gap-2 mt-4"
                      >
                        {isSubmitting ? 'Sending Request...' : 'Apply For Guidance 🔥'}
                      </motion.button>
                      <p className="text-center text-[10px] text-gray-400">Powered by MKR Virtual Admission Cell</p>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
