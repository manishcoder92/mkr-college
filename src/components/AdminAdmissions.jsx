'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admission/list', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setAdmissions(data.data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (applicationId, newStatus) => {
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/admission/update-status', {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify({ applicationId, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setStatusMsg(`✅ Status for ${applicationId} updated to ${newStatus}`);
        fetchAdmissions();
        setSelectedApp(null);
        setTimeout(() => setStatusMsg(''), 3000);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading admissions...</div>;

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#800000]/5">
        <h3 className="text-xl font-serif font-bold text-[#800000]">Manage Admission Applications</h3>
        <button onClick={fetchAdmissions} className="text-xs bg-white border border-[#800000] text-[#800000] px-3 py-1 rounded-full font-bold hover:bg-[#800000] hover:text-white transition-all">Refresh List</button>
      </div>

      {statusMsg && (
        <div className="m-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
          {statusMsg}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-[10px] uppercase tracking-widest text-gray-500 font-bold border-b border-gray-100">
              <th className="px-6 py-4">Application ID</th>
              <th className="px-6 py-4">Student Name</th>
              <th className="px-6 py-4">Course</th>
              <th className="px-6 py-4">Marks</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {admissions.length === 0 ? (
              <tr><td colSpan="6" className="px-6 py-12 text-center text-gray-400">No applications found</td></tr>
            ) : (
              admissions.map((app) => (
                <tr key={app.applicationId} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">{app.applicationId}</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-800">{app.firstName} {app.lastName}</td>
                  <td className="px-6 py-4 text-xs font-medium text-gray-600 uppercase">{app.course}</td>
                  <td className="px-6 py-4 font-bold text-gray-700">{app.hscPercentage}%</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase ${
                      app.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                      app.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedApp(app)}
                      className="text-[#800000] text-xs font-bold hover:underline"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedApp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApp(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 bg-[#800000] text-white flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-serif font-bold">Review Application</h2>
                  <p className="text-[10px] uppercase tracking-widest opacity-80 mt-1">{selectedApp.applicationId} • {selectedApp.course}</p>
                </div>
                <button onClick={() => setSelectedApp(null)} className="text-2xl hover:scale-110 transition">✕</button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Personal Info */}
                  <div className="md:col-span-2 space-y-8">
                    <section>
                      <h4 className="text-[10px] font-black uppercase text-[#800000] tracking-widest mb-4 border-b pb-2">Student Particulars</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Full Name</p>
                          <p className="font-bold text-gray-800">{selectedApp.firstName} {selectedApp.lastName}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Date of Birth</p>
                          <p className="font-bold text-gray-800">{new Date(selectedApp.dob).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Gender / Category</p>
                          <p className="font-bold text-gray-800 capitalize">{selectedApp.gender} / {selectedApp.category}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Aadhar Number</p>
                          <p className="font-bold text-gray-800">{selectedApp.aadharNumber}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Phone</p>
                          <p className="font-bold text-gray-800">{selectedApp.phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Email</p>
                          <p className="font-bold text-gray-800">{selectedApp.email || 'N/A'}</p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h4 className="text-[10px] font-black uppercase text-[#800000] tracking-widest mb-4 border-b pb-2">Family & Academics</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Father's Name</p>
                          <p className="font-bold text-gray-800">{selectedApp.fatherName}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">Mother's Name</p>
                          <p className="font-bold text-gray-800">{selectedApp.motherName}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">12th Board / Roll No</p>
                          <p className="font-bold text-gray-800 capitalize">{selectedApp.hscBoard} • {selectedApp.hscRollNo}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-1">12th Marks (%)</p>
                          <p className="font-bold text-gray-800">{selectedApp.hscMarks} pts ({selectedApp.hscPercentage}%)</p>
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* Documents Column */}
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase text-[#800000] tracking-widest mb-4 border-b pb-2">Artifacts</h4>
                    <div className="space-y-4">
                      {selectedApp.photo && (
                        <div>
                          <p className="text-gray-400 font-bold text-[10px] uppercase mb-2">Student Photo</p>
                          <img src={selectedApp.photo} alt="Student" className="w-full aspect-[3/4] object-cover rounded-lg border border-gray-200" />
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-2">
                        {['signature', 'marksheettenth', 'marksheettwelfth'].map(doc => (
                          selectedApp[doc] && (
                            <a 
                              key={doc}
                              href={selectedApp[doc]} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="block p-3 bg-gray-50 border border-gray-200 rounded-lg text-center hover:bg-white transition-all overflow-hidden"
                            >
                              <span className="block text-[8px] font-black uppercase text-[#800000] truncate mb-1">{doc.replace('marksheet', 'Marksheet ')}</span>
                              <span className="text-[9px] text-[#800000] hover:underline font-bold">View File</span>
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-6 bg-slate-50 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <p className="text-[10px] font-bold text-gray-400 uppercase">Decision for {selectedApp.firstName}:</p>
                   {selectedApp.status !== 'Pending' && (
                     <span className="text-[9px] font-bold text-gray-500 italic">(Currently {selectedApp.status})</span>
                   )}
                </div>
                <div className="flex gap-3">
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => updateStatus(selectedApp.applicationId, 'Rejected')}
                    className="px-6 py-2.5 bg-white border border-red-300 text-red-600 rounded-xl text-xs font-black tracking-widest uppercase shadow-sm hover:bg-red-50"
                  >
                    Reject
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => updateStatus(selectedApp.applicationId, 'Approved')}
                    className="px-8 py-2.5 bg-[#800000] text-white rounded-xl text-xs font-black tracking-widest uppercase shadow-lg shadow-[#800000]/20"
                  >
                    Approve
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
