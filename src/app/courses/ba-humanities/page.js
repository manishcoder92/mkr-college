'use client';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const subjects = [
  'Hindi',
  'English',
  'Music',
  'Sanskrit',
  'Philosophy',
  'Urdu',
];

const semesters = [
  { sem: 1, title: 'Humanities Semester-1', subjects: ['Foundation of Humanities', 'Hindi / Urdu / Maithili (MIL)', 'English Communication', 'Environmental Studies', 'Elective I (Choose from: Hindi / English / Music / Sanskrit / Philosophy / Urdu)'] },
  { sem: 2, title: 'Humanities Semester-2', subjects: ['Indian Literary Tradition', 'Hindi / Urdu / Maithili (MIL-II)', 'English Communication-II', 'Elective I (Advanced)', 'Elective II'] },
  { sem: 3, title: 'Humanities Semester-3', subjects: ['Literary Criticism & Theory', 'Elective I (Honours Paper)', 'Elective II (Honours Paper)', 'Skill Enhancement Course', 'Ability Enhancement Course'] },
  { sem: 4, title: 'Humanities Semester-4', subjects: ['Comparative Literature', 'Elective I (Honours Paper)', 'Elective II (Honours Paper)', 'Skill Enhancement Course-II', 'Ability Enhancement Course-II'] },
  { sem: 5, title: 'Humanities Semester-5', subjects: ['Discipline Specific Elective (DSE-I)', 'Discipline Specific Elective (DSE-II)', 'Honours Core Paper', 'Generic Elective'] },
  { sem: 6, title: 'Humanities Semester-6', subjects: ['Discipline Specific Elective (DSE-III)', 'Discipline Specific Elective (DSE-IV)', 'Honours Core Paper', 'Project / Dissertation'] },
];

export default function BAHumanitiesPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0077B6] to-[#005f8d] text-white py-24 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="bg-[#FFD700] text-[#800000] text-xs font-bold px-4 py-1.5 rounded-full uppercase">UG Program</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-4">
            {language === 'en' ? "Bachelor's of Arts (B.A)" : 'बैचलर ऑफ आर्ट्स (बीए)'}
          </h1>
          <p className="text-2xl text-[#FFD700] font-serif mt-2">Humanities</p>
          <p className="mt-4 max-w-3xl opacity-90 leading-relaxed">
            {language === 'en'
              ? 'A Bachelor of Arts (B.A) in Humanities typically encompasses subjects like Hindi, English, Music, Sanskrit, Philosophy and Urdu, fostering cultural understanding, creative expression, and deep appreciation for human thought and art.'
              : 'बैचलर ऑफ आर्ट्स (बीए) मानविकी में हिंदी, अंग्रेजी, संगीत, संस्कृत, दर्शनशास्त्र और उर्दू जैसे विषयों को शामिल करता है, जो सांस्कृतिक समझ, रचनात्मक अभिव्यक्ति और मानवीय विचार की गहरी सराहना को बढ़ावा देता है।'
            }
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">⏱ 3 Years (6 Semesters)</span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">🎓 B.R.A. Bihar University</span>
            <span className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">📍 Punaura Dham, Sitamarhi</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Subjects */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-6">
            {language === 'en' ? 'Available Subjects' : 'उपलब्ध विषय'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-md border-l-4 border-[#0077B6] hover:shadow-lg transition-shadow">
                <span className="text-gray-700 font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Semester Breakdown */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-6">
            {language === 'en' ? 'Semester-wise Structure' : 'सेमेस्टर-वार संरचना'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semesters.map((sem) => (
              <div key={sem.sem} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-[#0077B6] text-white rounded-full flex items-center justify-center font-bold text-sm">{sem.sem}</span>
                  <h3 className="font-bold text-[#0077B6] text-sm">{sem.title}</h3>
                </div>
                <ul className="space-y-2">
                  {sem.subjects.map((subj, i) => (
                    <li key={i} className="text-gray-600 text-xs flex items-start gap-2">
                      <span className="text-[#FFD700] mt-0.5">▸</span> {subj}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-gradient-to-br from-[#0077B6] to-[#005f8d] text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">
                {language === 'en' ? 'Eligibility & Admission' : 'पात्रता और प्रवेश'}
              </h2>
              <ul className="space-y-3 text-sm opacity-90">
                <li>✅ {language === 'en' ? 'Passed 10+2 (Intermediate) from a recognised board' : '10+2 (इंटरमीडिएट) किसी मान्यता प्राप्त बोर्ड से उत्तीर्ण'}</li>
                <li>✅ {language === 'en' ? 'Admission through Bihar University Admission Portal (UMIS)' : 'बिहार विश्वविद्यालय प्रवेश पोर्टल (UMIS) के माध्यम से प्रवेश'}</li>
                <li>✅ {language === 'en' ? 'Post Matric Scholarship & NSP available' : 'पोस्ट मैट्रिक स्कॉलरशीप और NSP उपलब्ध'}</li>
                <li>✅ {language === 'en' ? 'Kanya Utthan Yojana — ₹50,000 for female graduates' : 'कन्या उत्थान योजना — ₹50,000 छात्राओं के लिए'}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://college.mkrcollege.com/online_admission" target="_blank" rel="noopener"
                className="bg-[#FFD700] text-[#800000] font-bold py-3 px-6 rounded-lg text-center hover:bg-yellow-400 transition-colors shadow-lg">
                {language === 'en' ? 'Apply Now →' : 'अभी आवेदन करें →'}
              </a>
              <Link href="/#courses" className="border-2 border-white/30 text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-white/10 transition-colors">
                {language === 'en' ? '← Back to Courses' : '← पाठ्यक्रम पर वापस'}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
