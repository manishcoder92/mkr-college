'use client';

import { useState } from 'react';
import AdmitCardSearch from '@/components/AdmitCardSearch';
import AdmitCardDisplay from '@/components/AdmitCardDisplay';

export default function AdmitCardPage() {
  const [studentData, setStudentData] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-[#800000]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

      <main className="flex-grow flex items-center justify-center p-4 relative z-10 w-full py-12">
        {!studentData ? (
          <AdmitCardSearch onResult={setStudentData} />
        ) : (
          <AdmitCardDisplay student={studentData} onBack={() => setStudentData(null)} />
        )}
      </main>
    </div>
  );
}
