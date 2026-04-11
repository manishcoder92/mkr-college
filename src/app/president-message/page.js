'use client';

import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PresidentMessage() {
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
                  src="/images/founders/president.jpg" 
                  alt="Smt. Sudha Ray - President" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif font-bold text-xl">
                    {language === 'en' ? 'Smt. Sudha Ray' : 'श्रीमती सुधा राय'}
                  </p>
                  <p className="text-sm text-[#FFD700] font-bold tracking-wide">
                    {language === 'en' ? 'President' : 'अध्यक्ष'}
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
                {language === 'en' ? "President's Message" : 'अध्यक्ष का संदेश'}
              </h1>
              <div className="w-16 h-1 bg-[#D97706] mb-8 rounded-full"></div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-justify relative">
                <span className="absolute -top-6 -left-6 text-6xl text-[#800000]/10 font-serif leading-none">"</span>

                {language === 'en' ? (
                  <>
                    <p>Education is such an effective weapon, which accelerates the pace of social development. Along with equality and freedom, an educated person also makes better use of his legal rights. Education makes politically and economically empowered. Education reduces the crime rate. Women's education reduces inequality in society. Education empowers marginalized women and helps them to build a better future for themselves and their families.</p>
                    
                    <p>With women education, there will be harmony in society along with intellectual development. An educated woman is a source of peace and happiness in domestic life. The education of a woman brings energy and development into our culture. The conspiracy of historically depriving women of education was also done so that neither they would be educated nor would they demand their rights.</p>
                    
                    <p>Due to this, for years and years, the percentage of education among women has been very low. But now vocalness towards education has come among women too. They are also understanding the importance of education. The state government of Bihar is also making the intermediate and graduate passing girl students self-reliant by giving financial assistance amount as an incentive and many other types of facilities.</p>

                    <p>Today women are proving their ability in every field. Women who are empowered are able to contribute to the social, political and economy as well as to do good to their communities.</p>

                    <p>Matashree Kaushalya Ramdev Dr. Ganesh Ray Degree College lays special emphasis on empowering women empowerment along with security to girl students. It tries to empower and strengthen the girl students through shaping their educational perspective, education, awareness, literacy and training. For this reason, the number of girl students in the college is more than the boys. Out of the students enrolled in the college, more than about 65 percent are girl students.</p>

                    <p className="font-bold font-serif text-[#800000] text-lg mt-8">I express my gratitude to all the enrolled students and parents and wish them a bright future, healthy and happy life.</p>
                    
                    <div className="mt-8">
                       <p className="font-bold text-[#800000]">Smt. Sudha Ray</p>
                       <p className="text-sm text-gray-500">President, M.K.R. College</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p>शिक्षा एक ऐसा कारगर हथियार है, जो सामाजिक विकास की गति को तेज करता है। समानता, स्वतंत्रता के साथ-साथ शिक्षित व्यक्ति अपने कानुनी अधिकारों का बेहतर उपयोग भी करता है। शिक्षा राजनीतिक एवं आर्थिक रुप से सशक्त बनाता है। शिक्षा अपराध दर को कम करती है। लड़कियों की शिक्षा से समाज में असमानता कम होती है। शिक्षा हाशिए पर रहने वाली महिलाओं को सशक्त बनाती है और उन्हें अपने और अपने परिवार के लिए बेहतर भविष्य बनाने में मदद करती है।</p>

                    <p>स्त्री शिक्षा से वौद्धिक विकास के साथ समाज में समरसता आएगी। एक शिक्षित नारी गृहस्थ जीवन में शांति और खुशहाली का स्रोत होती है। स्त्री के शिक्षित होने से हमारी संस्कृति में ऊर्जा और विकास का संचार होता है। महिलाओं को ऐतिहासिक रुप से शिक्षा से वंचित रखने का षड्यंत्र भी इसिलिए किया गया कि न वह शिक्षित होंगी और न ही वह अपने अधिकारों की माँग करेंगी।</p>

                    <p>इसी वजह से वर्षो-वर्ष तक महिलाओं में शिक्षा का प्रतिशत बहुत ही कम रहा है। किन्तु अब महिलाओं में भी शिक्षा के प्रति मुखरता आयी है। वे भी शिक्षा के महत्व को समझ रही हैं। बिहार की राज्य सरकार भी इन्टरमीडिएट एवं स्नातक उत्तीर्ण छात्राओ को प्रोत्साहन के रुप में आर्थिक सहायता राशि तथा कई अन्य तरह की सुविधाएँ देकर उनको आत्मनिर्भर बना रही है।</p>

                    <p>आज महिलाएँ अपनी योग्यता हर क्षेत्र में साबित कर रहीं हैं। जो महिलाएँ सशक्त हैं वे सामाजिक, राजनीतिक एवं अर्थव्यवस्था में योगदान देने के साथ अपने समुदायों की भलाई करने में सक्षम हैं।</p>

                    <p>माताश्री कौशल्या रामदेव डॉ0 गणेश राय डिग्री कॉलेज छात्राओं को विशेष रुप से सुरक्षा के साथ ही महिला सशक्तिकरण को सशक्त बनाने पर जोर देती है। उनके शैक्षिक दृष्टिकोण को तराशने, शिक्षा, जागरुकता, साक्षरता और प्रशिक्षण के माध्यम से छात्राओं को सबल और सशक्त बनाने का प्रयास करती है। इसी कारण महाविद्यालय में छात्रों की तुलना में छात्राओं की संख्या अधिक है। महाविद्यालय में नामांकित छात्र-छात्राओं में लगभग 65 प्रतिशत से अधिक संख्या छात्राओं की है।</p>

                    <p className="font-bold font-serif text-[#800000] text-lg mt-8">मैं सभी नामांकित छात्र-छात्राओं एवं अभिभावकों का आभार प्रकट करते हुए उनके उज्ज्वल भविष्य, स्वस्थ् एवं सुखद जीवन की कामना करती हूँ।</p>

                    <div className="mt-8">
                       <p className="font-bold text-[#800000]">श्रीमती सुधा राय</p>
                       <p className="text-sm text-gray-500">अध्यक्ष, एम.के.आर. महाविद्यालय</p>
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
