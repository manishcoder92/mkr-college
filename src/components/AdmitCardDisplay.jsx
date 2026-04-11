import { motion } from 'framer-motion';

export default function AdmitCardDisplay({ student, onBack }) {
  // We expect student to have { pdfUrl, registrationNumber }
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
      {/* Action Buttons */}
      <div className="w-full flex justify-between mb-8 px-4 gap-4">
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-white border-2 border-[#800000] text-[#800000] px-8 py-3 rounded-xl font-bold transition shadow-sm"
        >
          &larr; Back to Search
        </motion.button>
        <motion.a 
          whileHover={{ scale: 1.05, backgroundColor: '#FFE033', y: -2 }}
          whileTap={{ scale: 0.95 }}
          href={student.pdfUrl}
          download={`Admit_Card_${student.registrationNumber}.pdf`}
          className="bg-[#FFD700] text-[#800000] px-10 py-3 rounded-xl font-black transition shadow-[0_10px_20px_rgba(255,215,0,0.3)] flex items-center border-2 border-[#800000]/10 uppercase tracking-wider text-sm"
        >
          Download PDF Print Copy
        </motion.a>
      </div>

      {/* The PDF Display Area */}
      <div className="bg-white p-4 w-full shadow-2xl rounded-xl border border-gray-200" style={{ height: '70vh', minHeight: '600px' }}>
        <object
          data={student.pdfUrl}
          type="application/pdf"
          width="100%"
          height="100%"
          className="rounded shadow-inner"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <p>Your browser does not support viewing PDFs directly.</p>
            <a 
              href={student.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0077B6] underline font-bold"
            >
              Click here to download your Admit Card
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
