'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNoticeForm from '@/components/AdminNoticeForm';
import AdminAdmissions from '@/components/AdminAdmissions';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('notices'); // 'notices' or 'admissions'
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.replace('/admin-login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.replace('/admin-login');
  };

  if (!isAuthenticated) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-[#800000] text-white p-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img src="/assets/college logo.webp" alt="Logo" className="w-10 h-10 rounded-full bg-white p-1" />
          <h1 className="font-serif text-xl sm:text-2xl font-bold">Principal's Dashboard</h1>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg text-xs font-bold hover:bg-white hover:text-[#800000] transition-all"
        >
          Logout Securely
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full py-6 px-4 sm:px-6 lg:px-8 flex-1">
        
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 bg-white p-1 rounded-xl border border-gray-200 shadow-sm w-fit">
          <button 
            onClick={() => setActiveTab('notices')}
            className={`px-6 py-2.5 rounded-lg text-xs font-black tracking-widest uppercase transition-all ${activeTab === 'notices' ? 'bg-[#800000] text-white shadow-md' : 'text-gray-500 hover:bg-slate-50'}`}
          >
            Notices & Updates
          </button>
          <button 
            onClick={() => setActiveTab('admissions')}
            className={`px-6 py-2.5 rounded-lg text-xs font-black tracking-widest uppercase transition-all ${activeTab === 'admissions' ? 'bg-[#800000] text-white shadow-md' : 'text-gray-500 hover:bg-slate-50'}`}
          >
            Online Admissions
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Active Tab Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {activeTab === 'notices' ? (
                <motion.div 
                  key="notices"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <AdminNoticeForm />
                </motion.div>
              ) : (
                <motion.div 
                  key="admissions"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <AdminAdmissions />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Dashboard Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#800000] mb-4 border-b pb-2">Institutional Pulse</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium italic">Database:</span>
                  <span className="font-bold text-green-600 flex items-center gap-1.5 text-xs">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    SYNCED
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium italic">Session:</span>
                  <span className="font-bold text-blue-600 text-xs">2025 - 2026</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-50">
                <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
                  {activeTab === 'notices' 
                    ? "Manage real-time updates for the main campus marquee. Expired items are archived automatically."
                    : "Review incoming student applications. Once approved, the data is pushed to the central registrar."}
                </p>
              </div>
            </div>

            <div className="bg-indigo-900 p-6 rounded-2xl shadow-xl shadow-indigo-900/20 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-bold text-sm mb-1 uppercase tracking-tighter">Support Desk</h4>
                <p className="text-[10px] opacity-70 mb-4 font-medium italic">Need technical assistance?</p>
                <a href="mailto:support@college.com" className="bg-white/10 border border-white/20 block text-center py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-indigo-900 transition-all">Contact Developer</a>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
