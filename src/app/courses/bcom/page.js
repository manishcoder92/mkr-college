'use client';
import { useLanguage } from '@/components/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const subjects = [
  'Financial Accounting',
  'Business Environment',
  'Business Communication',
  'Marketing Management',
  'Business Finance & Corporate Administration',
  'Cost Accounting',
  'Business Law',
  'Economics',
  'Human Resource Management',
  'Statistics for Business',
];

const semesters = [
  { sem: 1, title: 'B.Com Semester-1', subjects: ['Financial Accounting-I', 'Business Organisation & Management', 'Business Communication (Hindi/English)', 'Micro Economics', 'Environmental Studies'] },
  { sem: 2, title: 'B.Com Semester-2', subjects: ['Financial Accounting-II', 'Business Law', 'Business Communication-II', 'Macro Economics', 'Computer Applications in Business'] },
  { sem: 3, title: 'B.Com Semester-3', subjects: ['Corporate Accounting', 'Cost Accounting', 'Business Statistics', 'Company Law', 'Skill Enhancement Course'] },
  { sem: 4, title: 'B.Com Semester-4', subjects: ['Income Tax Law & Practice', 'Management Accounting', 'Marketing Management', 'Indian Economy', 'Skill Enhancement Course-II'] },
  { sem: 5, title: 'B.Com Semester-5', subjects: ['Auditing & Corporate Governance', 'Business Finance', 'Discipline Specific Elective (DSE-I)', 'Discipline Specific Elective (DSE-II)'] },
  { sem: 6, title: 'B.Com Semester-6', subjects: ['Indirect Tax (GST)', 'E-Commerce', 'Discipline Specific Elective (DSE-III)', 'Project Work / Internship'] },
];

export default function BComPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-white border-b-4 border-[#800000] py-24 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="bg-[#FFD700] text-[#800000] text-xs font-bold px-4 py-1.5 rounded-full uppercase">UG Program</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#800000] mt-4">
            {language === 'en' ? "Bachelor's of Commerce" : 'बैचलर ऑफ कॉमर्स'}
          </h1>
          <p className="text-2xl text-gray-500 font-serif mt-2">B.COM</p>
          <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
            {language === 'en'
              ? 'A Bachelor of Commerce (B.COM) program offers a comprehensive study in Accounting & Finance, Business Environment, Marketing, and Human Resource Management, providing students with a strong foundation in commerce and business principles for successful careers.'
              : 'बैचलर ऑफ कॉमर्स (बीकॉम) कार्यक्रम लेखा और वित्त, व्यावसायिक पर्यावरण, विपणन और मानव संसाधन प्रबंधन का व्यापक अध्ययन प्रदान करता है, जो छात्रों को वाणिज्य और व्यावसायिक सिद्धांतों में मजबूत आधार देता है।'
            }
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <span className="bg-[#800000]/5 text-[#800000] px-4 py-2 rounded-lg font-medium">⏱ 3 Years (6 Semesters)</span>
            <span className="bg-[#800000]/5 text-[#800000] px-4 py-2 rounded-lg font-medium">🎓 B.R.A. Bihar University</span>
            <span className="bg-[#800000]/5 text-[#800000] px-4 py-2 rounded-lg font-medium">📍 Punaura Dham, Sitamarhi</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Subjects */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-6">
            {language === 'en' ? 'Core Subjects' : 'मुख्य विषय'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-md border-l-4 border-[#800000] hover:shadow-lg transition-shadow">
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
                  <span className="w-10 h-10 bg-[#800000] text-white rounded-full flex items-center justify-center font-bold text-sm">{sem.sem}</span>
                  <h3 className="font-bold text-[#800000] text-sm">{sem.title}</h3>
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

        {/* Career Prospects */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-[#800000] mb-6">
            {language === 'en' ? 'Career Prospects' : 'कैरियर संभावनाएं'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '💼', title: 'Chartered Accountancy (CA)' },
              { icon: '🏦', title: 'Banking & Finance' },
              { icon: '📊', title: 'Company Secretary (CS)' },
              { icon: '🧮', title: 'Cost & Management Accounting' },
              { icon: '📈', title: 'Stock Market & Trading' },
              { icon: '🏢', title: 'MBA & Higher Studies' },
            ].map((career, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
                <span className="text-2xl">{career.icon}</span>
                <span className="text-gray-700 font-medium text-sm">{career.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-gradient-to-br from-[#800000] to-[#5C0000] text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#FFD700] mb-4">
                {language === 'en' ? 'Eligibility & Admission' : 'पात्रता और प्रवेश'}
              </h2>
              <ul className="space-y-3 text-sm opacity-90">
                <li>✅ {language === 'en' ? 'Passed 10+2 (Intermediate) with Commerce / any stream' : '10+2 (इंटरमीडिएट) वाणिज्य / किसी भी स्ट्रीम से उत्तीर्ण'}</li>
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
