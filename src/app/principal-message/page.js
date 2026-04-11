'use client';

import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrincipalMessage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back navigation */}
        <Link 
          href="/#founders" 
          className="inline-flex items-center text-[#5B48D9] font-medium mb-8 hover:underline transition-all hover:-translate-x-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          {language === 'en' ? 'Back to Home' : 'होम पर वापस जाएँ'}
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Image Placeholder Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="md:w-1/3 shrink-0"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#800000]/10 aspect-[3/4] relative group">
                <img 
                  src="/images/founders/principal.webp" 
                  alt="Dr. Arvind Kumar - Principal" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif font-bold text-xl">
                    {language === 'en' ? 'Dr. Arvind Kumar' : 'डॉ. अरविंद कुमार'}
                  </p>
                  <p className="text-sm text-[#FFD700] font-bold tracking-wide">
                    {language === 'en' ? 'Principal' : 'प्राचार्य'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="md:w-2/3"
            >
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#800000] mb-2">
                {language === 'en' ? "Principal's Message" : 'प्राचार्य का संदेश'}
              </h1>
              <div className="w-16 h-1 bg-[#D97706] mb-8 rounded-full"></div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-justify relative">
                <span className="absolute -top-6 -left-6 text-6xl text-[#800000]/10 font-serif leading-none">"</span>

                {language === 'en' ? (
                  <>
                    <p>Matashree Kaushalya Ramdev Dr. Ganesh Ray Degree College is located in Punaura Dham, the incarnation land of Mother Sita. Illuminated in the light of achievements and prosperity, this college is well known as a center of higher education in Sitamarhi.</p>

                    <p>It was established on 27 April 2015 by the lotus hands of the great Hindi scholar, retired Principal of Sri Radhakrishna Goenka College Sitamarhi, revered Dr. Ganesh Ray. Its establishment is a symbol of the aspirations of those sections of the society who wanted to make higher education accessible to the deprived and neglected sections of the society.</p>
                    
                    <p>Education has a very valuable place in the lives of all of us. Today whatever we are, our education has an important contribution to it. A better education is important for our career as well as it plays an important role in making a better human being. Education not only develops the ability within humans to know about every subject and to learn and understand things, but it also helps human to develop physically, socially, economically and politically. That is why it has been said that "Education is the best means for the complete progress of human beings."</p>

                    <p>Established with this goal and objective of education, this college is fulfilling the dreams of the founder, students and parents in its limited time. Since its establishment in the year 2015, this college is receiving immense support and affection of scholar educationists, enlightened citizens, teaching-non-teaching staff and students/parents.</p>
                    
                    <p>There is a proper arrangement for studying in all subjects of Arts (B.A.) and Commerce (B.Com.) faculties here. Along with teaching by well-qualified, hardworking and experienced teachers, the college has a rich library and well-equipped laboratory.</p>

                    <p className="font-bold font-serif text-[#800000] text-lg mt-8">I welcome the students/parents in this college situated in a clean and beautiful large campus at a holy and pleasant place of the city and I wish for the golden future of the students.</p>
                    
                    <div className="mt-8">
                       <p className="font-bold text-[#800000]">Dr. Arvind Kumar</p>
                       <p className="text-sm text-gray-500">M.A. Hindi, Ph.D. Awarded</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p>माताश्री कौशल्या रामदेव डॉ0 गणेश राय डिग्री कॉलेज, माँ सीता की अवतरण भूमि पुनौरा धाम में अवस्थित है। उपलब्धियों व उत्कर्ष के आलोक में आलोकित यह महाविद्यालय सीतामढी में उच्च शिक्षा केन्द्र के रुप में प्रख्यात है।</p>
                    
                    <p>इसकी स्थापना हिन्दी के महान विद्वान, श्री राधाकृष्ण गोयनका कॉलेज सीतामढी के अवकाश प्राप्त प्राचार्य, श्रद्धेय डॉ0 गणेश राय के कर-कमलों द्वारा दिनांक 27 April 2015 को हुआ। इसकी स्थापना समाज के उन वर्गों के आकांक्षाओं का प्रतिक है, जो उच्च शिक्षा को समाज से वंचित तथा उपेक्षित तबके के लिए शुलभ करवाना चाहते थे।</p>
                    
                    <p>हम सब के जीवन में शिक्षा का एक बहूमूल्य स्थान है। आज हम जैसे भी हैं, उसमें हमारी शिक्षा का अहम् योगदान है। एक बेहतर शिक्षा हमारे कैरियर के लिए महत्वपूर्ण तो है ही, साथ ही यह एक बेहतर इंसान बनााने में अहम् किरदार निभाती है। शिक्षा न सिर्फ मनुष्य के अंदर हर विषय के बारे में जानने और चीजों को सीखने-समझने की क्षमता विकसित करती है, बल्कि मनुष्य के शारिरिक, सामाजिक, आर्थिक और राजनीतिक रुप से भी विकास करने में उसकी मदद करती है। इसलिए कहा गया है कि "शिक्षा मानव के सम्पूर्ण उन्नति का सर्वोत्तम साधन है।"</p>
                    
                    <p>शिक्षा के इसी लक्ष्य और उद्देश्य से स्थापित यह महाविद्यालय अपने सीमित समय में संस्थापक, छात्र-छात्राओं और अभिभावकों के सपनों को परवान चढा रहा है। सन् 2015 में स्थापना काल से ही इस महाविद्यालय को विद्वान शिक्षाविदों, प्रबुद्ध नागरिकों, शिक्षक-शिक्षकेत्तर कर्मचारियों तथा छात्र-छात्राओं/अभिभावकों का भारी सहयोग और स्नेह प्राप्त हो रहा है।</p>
                    
                    <p>यहाँ स्नातक कला (B.A.) एवं वाणिज्य (B.Com.) संकाय के सभी विषयों में अध्ययन की समूचित व्यवस्था है। सुयोग्य, कर्मठ तथा अनुभवी शिक्षकों द्वारा अध्यापन के साथ ही महाविद्यालय में समृद्ध पुस्तकालय तथा सुसज्जित प्रयोगशाला है।</p>
                    
                    <p className="font-bold font-serif text-[#800000] text-lg mt-8">शहर के पावन एवं मनोरम स्थल पर स्वच्छ तथा सुन्दर वृहत परिसर में स्थित इस महाविद्यालय में, मैं छात्र-छात्राओं/अभिभवकों का स्वागत करता हूँ तथा छात्र-छात्राओं के सुनहरे भविष्य की कामना करता हूँ।</p>
                  
                    <div className="mt-8">
                       <p className="font-bold text-[#800000]">डॉ. अरविंद कुमार</p>
                       <p className="text-sm text-gray-500">एम० ए० हिन्दी, पीएच० डी० अवार्डेड</p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
