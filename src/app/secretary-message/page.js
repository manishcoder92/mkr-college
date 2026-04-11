'use client';

import { useLanguage } from "@/components/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SecretaryMessage() {
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
                  src="/images/founders/secretary.webp" 
                  alt="Dr. Ganesh Ray - Secretary" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif font-bold text-xl">
                    {language === 'en' ? 'Dr. Ganesh Ray' : 'डॉ. गणेश राय'}
                  </p>
                  <p className="text-sm text-[#FFD700] font-bold tracking-wide">
                    {language === 'en' ? 'Secretary & Founder' : 'सचिव एवं संस्थापक'}
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
                {language === 'en' ? "Secretary's Message" : 'सचिव का संदेश'}
              </h1>
              <div className="w-16 h-1 bg-[#D97706] mb-8 rounded-full"></div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-justify relative">
                <span className="absolute -top-6 -left-6 text-6xl text-[#800000]/10 font-serif leading-none">"</span>

                {language === 'en' ? (
                  <>
                    <p>Education is an integral part of human life. It is an important medium for acquiring necessary knowledge and skills. Education helps us to develop a disciplined life. Education develops personality, and gives prestige in society along with success. Education is not the study of facts, but the training of the mind to think.</p>
                    
                    <p>Education helps to lead society towards prosperity, equality and virtues. Education prepares a person to face new challenges, touch new heights and live a successful life. Education alone makes us great. Nelson Mandela has said that "Education is the most powerful weapon which you can use to change the world."</p>
                    
                    <p>Understanding this importance of education, today not only boys but also girls are vibrating with the strongest desire to acquire higher education. Due to which there is a huge shortage of graduate level colleges in proportion to the boys and girls in higher education up to graduation in Sitamarhi-Sheohar district.</p>
                    
                    <p>By the immense grace of Jagat Janani Janaki, the surging flood of establishing colleges always used to surge in my conscience very much. To realize these feelings of mine and with the aim of making higher education accessible, easy, in the society, developing moral and cultural values as well as providing quality education, Matashree Kaushalya Ramdev Dr. Ganesh Ray Degree College Sitamarhi was established by me on 27 April 2015.</p>
                    
                    <p>Since the time of establishment of the college, it is continuously moving ahead on the path of its goals and objectives along with ensuring access to higher education for all sections of the society.</p>
                    
                    <p className="font-bold font-serif text-[#800000] text-lg mt-8">I wish the students enrolled in Matashree Kaushalya Ramdev Dr. Ganesh Ray Degree College moral upliftment and academic success.</p>
                    
                    <div className="mt-8">
                       <p className="font-bold text-[#800000]">Dr. Ganesh Ray</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p>शिक्षा मनुष्य के जीवन का अभिन्न अंग है। शिक्षा आवश्यक ज्ञान और कौशल प्राप्त करने का एक महत्वपूर्ण माध्यम है। शिक्षा हमें अनुशासित जीवन विकसित करने में मदद करती है। शिक्षा से व्यक्तित्व का विकास होता है, और सफलता के साथ समाज में प्रतिष्ठा मिलती है। शिक्षा तथ्यों का अध्ययन नहीं, बल्कि सोंचने के लिए मन का प्रशिक्षण है।</p>
                    
                    <p>शिक्षा समाज को समृद्धि, समानता और सदगुणों की ओर ले जाने में सहायक होती है। शिक्षा व्यक्ति को नई चुनौतिओ का सामना करने, नई उँचाइयों को छुने और एक सफल जीवन जीने के लिए तैयार करती है। शिक्षा ही हमें श्रेष्ठ बनाती है। नेल्सन मंडेला ने कहा है कि "शिक्षा सबसे शक्तिशाली हथियार है जिससे आप दुनिया बदल सकते हैं।"</p>
                    
                    <p>शिक्षा के इसी महत्व को समझते हुए आज छात्र ही नहीं, छात्राओं में भी उच्च शिक्षा हासिल करने की तीव्रतम तमन्नाएँ तरंगायित हो रही हैं। जिस कारण सीतामढी-शिवहर जिला में स्नातक तक की उच्च शिक्षा में छात्र-छात्राओं के अनुपात में स्नातक स्तर के महाविद्यालयों की भारी कमी है।</p>
                    
                    <p>जगत जननी जानकी की असीम अनुकम्पा से कॉलेजों के स्थापना की उद्वेलित बाढ मेरे अंतःकरण में बहुत ही ज्यादा उमड़ा करती रहती हैं। अपनी इन्हीं भावनाओं को साकार करने तथा समाज में उच्च शिक्षा को सुलभ, सुगम, नैतिक एवं सांस्कृतिक मूल्यों को विकसित करने के साथ ही गुणवत्तापूर्ण शिक्षा प्रदान करने के उद्देश्य से माताश्री कौशल्या रामदेव डॉ0 गणेश राय डिग्री कॉलेज सीतामढी की स्थापना मेरे द्वारा दिनांक 27 April 2015 को किया गया।</p>
                    
                    <p>महाविद्यालय स्थापना काल से निरंतर समाज के सभी वर्गों के लिय उच्च शिक्षा तक पहूँच सुनिश्चित करने के साथ अपने लक्ष्य और उद्देश्य के पथ पर अग्रसर है।</p>
                    
                    <p className="font-bold font-serif text-[#800000] text-lg mt-8">मैं माताश्री कौशल्या रामदेव डॉ0 गणेश राय डिग्री कॉलेज में नामांकित छात्र-छात्राओं को नैतिक उत्थान और शैक्षणिक सफलता प्राप्त करने के लिए शुभकामनाएँ देता हूँ।</p>
                  
                    <div className="mt-8">
                       <p className="font-bold text-[#800000]">डॉ. गणेश राय</p>
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
