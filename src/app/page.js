'use client';

import Hero from "@/components/Hero";
import NoticeMarquee from "@/components/NoticeMarquee";
import NoticeBoard from "@/components/NoticeBoard";
import AIAssistant from "@/components/AIAssistant";
import { useLanguage } from "@/components/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import PhotoSlider from "@/components/PhotoSlider";
import CollegeVideo from "@/components/CollegeVideo";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import placeholders from '@/lib/blur-placeholders.json';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const { language } = useLanguage();
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesData = {
    baSocial: {
      titleEn: "Bachelor's of Arts (BA)–Social Science",
      titleHi: 'बैचलर ऑफ आर्ट्स (बीए)–सामाजिक विज्ञान',
      descEn: 'A Bachelor of Arts (BA) in Social Science integrates disciplines such as Ancient Indian History, Economics, Geography, History, Home Science, Political Science, Psychology, and Sociology.',
      descHi: 'सामाजिक विज्ञान में बीए प्राचीन भारतीय इतिहास, अर्थशास्त्र, भूगोल, इतिहास, गृह विज्ञान, राजनीति विज्ञान, मनोविज्ञान और समाजशास्त्र जैसे विषयों को एकीकृत करता है।',
      link: '/courses/ba-social-science',
      img: '/images/gallery/academics/cover.jpg'
    },
    bCom: {
      titleEn: "Bachelor's of Commerce (B.COM)",
      titleHi: 'बैचलर ऑफ कॉमर्स (बी.कॉम)',
      descEn: 'A Bachelor of Commerce (B.COM) program offers a comprehensive study in Accounting & Finance, Marketing, and Human Resource Management.',
      descHi: 'बैचलर ऑफ कॉमर्स कार्यक्रम लेखा और वित्त, विपणन और मानव संसाधन प्रबंधन में एक व्यापक अध्ययन प्रदान करता है।',
      link: '/courses/bcom',
      img: '/images/gallery/academics/cover1.jpg'
    },
    baHumanities: {
      titleEn: "Bachelor's of Arts (B.A)-Humanities",
      titleHi: 'बैचलर ऑफ आर्ट्स (बीए)-मानविकी',
      descEn: 'A Bachelor of Arts (B.A) in Humanities typically encompasses subjects like Hindi, English, Music, Sanskrit, Philosophy and Urdu.',
      descHi: 'मानविकी में बीए आमतौर पर हिंदी, अंग्रेजी, संगीत, संस्कृत, दर्शनशास्त्र और उर्दू जैसे विषयों को शामिल करता है।',
      link: '/courses/ba-humanities',
      img: '/images/gallery/academics/cover2.jpg'
    }
  };

  return (
    <div className="min-h-screen">
      <NoticeMarquee />
      <Hero />

      {/* ====== ABOUT SECTION ====== */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#800000] mt-2 mb-8 border-b-2 border-[#800000]/10 inline-block pb-2">
              {language === 'en' ? 'Institutional Overview' : 'संस्थागत परिचय'}
            </h2>

            <div className="text-gray-700 leading-relaxed text-sm md:text-base text-justify space-y-4">

              {/* Image floated to the right for "L" shape text wrap */}
              <div className="float-none md:float-right ml-0 md:ml-10 mb-6 mt-2 w-full md:w-[45%] lg:w-1/2 relative z-10 transition-all hover:-translate-y-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#800000] relative h-[300px] md:h-[400px] w-full group">
                  <Image
                    src="/images/about/campus-front.jpg"
                    alt="College Campus"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={placeholders['/images/about/campus-front.jpg']}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Embedded Badge */}
                  <div className="absolute bottom-0 right-0 bg-[#800000] text-white px-8 py-3 rounded-tl-2xl shadow-xl font-black text-lg z-20 border-t-4 border-l-4 border-white tracking-wider">
                    Est. 2015
                  </div>
                </div>
              </div>
              {language === 'en' ? (
                <>
                  <p>The present college <strong>&quot;Matashree Kaushalya Ramdev Dr. Ganesh Ray Degree College&quot;</strong> is situated at a picturesque location near Punaura Police Station and Maa Phulmat Petrol Pump on the Sitamarhi-Sheohar main road in Punaura Dham, the birthplace of Mata Janaki. Great educationist, M.A. Hindi (Gold Medalist), Ph.D., D.Litt. degree holder, retired Principal of Sri Radhakrishna Goenka College Sitamarhi, revered <strong>Dr. Ganesh Ray</strong> established it on <strong>27 April 2015</strong>.</p>
                  <p>This is the fourth educational institution established by revered Dr. Ganesh Ray. His attachment, resolve, far-sightedness, and firm determination towards education came to the fore in the form of this college. He established it in the joint name of his mother late Kaushalya Devi, father late Ramdev Ray, and himself.</p>
                  <p>The college holds <strong>permanent recognition</strong> from <strong>B.R.A. Bihar University Muzaffarpur</strong> and the Higher Education Department, Government of Bihar, Patna in all subjects of Bachelor of Arts (B.A.) and Commerce (B.Com.). The college features a clean, beautiful, and pleasant large campus including a two-storey building. From the security point of view, the entire campus is under the surveillance of CCTV cameras. Free Wi-Fi facility is available for students. There is a team of well-qualified, hardworking, and experienced teachers who pay special attention to providing quality education.</p>
                  <p>Students studying in this institute get the benefit of scholarship through <strong>Post Matric Scholarship</strong> and <strong>National Scholarship (NSP)</strong>. Graduate-passing girls also get the benefit of an incentive amount of <strong>₹50,000</strong> through <strong>Kanya Utthan Yojana</strong>. The name of the college is registered on the portal. Special scholarships and facilities are available to NSS, NCC, Sports quota, and differently-abled students.</p>
                  <p>With the blessings of educationists, enlightened citizens, the creativity of Founder-Secretary Honorable Dr. Ganesh Ray Ji, and the cooperation of teaching/non-teaching staff, students/guardians, the college is a leading name in the field of higher education in Sitamarhi. This college has opened a new horizon for the students of Sitamarhi and Sheohar districts.</p>
                </>
              ) : (
                <>
                  <p>प्रस्तुत महाविद्यालय <strong>&quot;माताश्री कौशल्या रामदेव डॉ0 गणेश राय डिग्री कॉलेज&quot;</strong> माता जानकी की जन्मस्थली पुनौरा धाम में सीतामढी - शिवहर मुख्य पथ पर पुनौरा थाना एवं माँ फुलमत पेट्रॉल पम्प के पास मनोरम स्थल पर अवस्थित है। महान् शिक्षाविद्, ग्राम - रसीदपुर, नगर परिषद् शिवहर, जिला- शिवहर निवासी, एम० ए० हिन्दी (गोल्डमेडलिस्ट), पीएच० डी०, डी० लिट्0 उपाधि प्राप्त, श्री राधाकृष्ण गोयनका कॉलेज सीतामढी के अवकाश प्राप्त प्राचार्य, श्रद्धेय <strong>डॉ० गणेश राय</strong> ने दिनांक <strong>27 April 2015</strong> को इसकी स्थापना की।</p>
                  <p>श्रद्धेय डॉ० गणेश राय द्वारा स्थापित यह चौथा शिक्षण संस्थान है। उनका शिक्षा के प्रति लगाव, संकल्प, दुर दृष्टि तथा दृढ निश्चय इस महाविद्यालय के रुप में सामने आया । इसकी स्थापना उन्होंने अपनी माता स्व० कौषल्या देवी पिता स्व० रामदेव राय एवं अपने (डॉ० गणेश राय) संयुक्त नाम से की ।</p>
                  <p>महाविद्यालय <strong>बी० आर० ए० बिहार विश्वविद्यालय मुजफ्फरपुर</strong> एवं उच्च शिक्षा विभाग, बिहार सरकार, पटना से स्नातक कला (B.A.) एवं वाणिज्य संकाय (B.Com.) के सभी विषयों में <strong>स्थायी मान्यता</strong> प्राप्त है। महाविद्यालय का पुनौरा, सीतामढी में मनोरम स्थल पर दो मंजिला भवन सहित स्वच्छ, सुन्दर एवं रमणिक वृहत परिसर है। सुरक्षा के दृष्टिकोण से पूर्ण परिसर सी० सी० टी० वी० कैमरा की निगरानी में है। छात्र-छात्राओं के लिए फ्री वाई-फाई की सुविधा उपलब्ध है। सुयोग्य, कर्मठ तथा अनुभवी शिक्षकों की टीम है जो छात्रों में मनोवैज्ञानिक स्वभाव प्रदान करने के अलावा नैतिक और सांस्कृतिक मूल्यों को विकसित करने पर जोर देने के साथ ही गुणवत्तापूर्ण शिक्षा प्रदान करने पर विशेष ध्यान देते हैं। महाविद्यालय में समृद्ध पुस्तकालय तथा सुसज्जित प्रयोगशाला है। छात्रों को पीने के लिए शुद्ध एवं स्वच्छ पेयजल हेतु आर ओ मशीन उपलब्ध है।</p>
                  <p>इस संस्थान में अध्ययनरत छात्र-छात्राओं को <strong>पोस्ट मैट्रिक स्कॉलरशीप (Post Matric Scholarship), नेशनल स्कॉलरशीप (NSP)</strong> के माध्यम से छात्रवृति का लाभ मिलता है। <strong>कन्या उत्थान योजना</strong> के माध्यम से स्नातक उत्तीर्ण छात्राओं को प्रोत्साहन राशि <strong>₹50,000</strong> का लाभ भी मिलता है । महाविद्यालय का नाम कन्या उत्थान योजना पोर्टल पर दर्ज है। छात्राएँ कन्या उत्थान योजना पोर्टल पर जाकर कॉलेज का नाम देख सकते हैं। एन० एस० एस०, एन० सी० सी०, स्पोर्टस कोटा एवं दिव्यांग छात्र-छात्राओं को विशेष छात्रवृति एवं सुविधा मिलता है ।</p>
                  <p>शिक्षाविदों, प्रबुद्ध नागरिकों के आर्शिवचनों, संस्थापक-सचिव आदरणीय डॉ० गणेश राय जी के सृजनात्मकता, शिक्षक-शिक्षकेत्तर कर्मचारियों, छात्र-छात्राओं/अभिभावकों के सहयोग से <strong>&quot;माताश्री कौशल्या रामदेव डॉ० गणेश राय डिग्री कॉलेज&quot;</strong> सीतामढ़ी में उच्च शिक्षा के क्षेत्र में अग्रणी नाम है। इस कॉलेज ने सीतामढी एवं शिवहर जिला के छात्र-छात्राओं के लिए एक नया क्षितिज खोल दिया है।</p>
                </>
              )}
              {/* Clear float to ensure parent container wraps fully */}
              <div className="clear-both"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== COLLEGE VIDEO SECTION ====== */}
      <CollegeVideo language={language} />

      {/* ====== STATS SECTION ====== */}
      <section className="py-16 bg-[#800000]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { num: '10+', labelEn: 'Years of Experience', labelHi: 'वर्षों का अनुभव' },
            { num: '2500+', labelEn: 'Happy Students', labelHi: 'खुश छात्र' },
            { num: '100%', labelEn: 'Satisfaction Rate', labelHi: 'संतुष्टि दर' },
            { num: '3+', labelEn: 'Courses Offered', labelHi: 'पाठ्यक्रम' },
          ].map((stat, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.1 } } }}>
              <h3 className="text-4xl md:text-5xl font-bold text-[#FFD700] font-serif">{stat.num}</h3>
              <p className="mt-2 text-sm font-medium opacity-80">{language === 'en' ? stat.labelEn : stat.labelHi}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== FOUNDERS / LEADERSHIP SECTION ====== */}
      <section id="founders" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#5B48D9] font-bold text-sm uppercase tracking-widest">
              {language === 'en' ? 'Leadership' : 'नेतृत्व'}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#800000] mt-2">
              {language === 'en' ? 'Head of the College' : 'कॉलेज प्रमुख'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 'secretary',
                name: language === 'en' ? 'Dr. Ganesh Ray' : 'डॉ. गणेश राय',
                role: language === 'en' ? 'Secretary (Founder)' : 'सचिव (संस्थापक)',
                qual: '',
                img: "/images/founders/secretary.webp",
                link: '/secretary-message',
                descEn: '"Education is an integral part of human life. Education is the most important medium for acquiring necessary knowledge and skills. Education helps us develop a disciplined life..."',
                descHi: '"शिक्षा मनुष्य के जीवन का अभिन्न अंग है। शिक्षा आवश्यक ज्ञान और कौशल प्राप्त करने का एक महत्वपूर्ण माध्यम है। शिक्षा हमें अनुशासित जीवन विकसित करने में मदद करती है..."',
              },
              {
                id: 'principal',
                name: language === 'en' ? 'Dr. Arvind Kumar' : 'डॉ. अरविंद कुमार',
                role: language === 'en' ? 'Principal' : 'प्राचार्य',
                qual: language === 'en' ? 'M.A. Hindi, Ph.D. Awarded' : 'एम० ए० हिन्दी, पीएच० डी० अवार्डेड',
                img: "/images/founders/principal.webp",
                link: '/principal-message',
                descEn: '"This college, established in the sacred land of Punaura Dham, is renowned as a centre of higher education in Sitamarhi. Education not only develops the ability to learn..."',
                descHi: '"माताश्री कौशल्या रामदेव डॉ0 गणेश राय डिग्री कॉलेज, माँ सीता की अवतरण भूमि पुनौरा धाम में अवस्थित है। शिक्षा न सिर्फ मनुष्य के अंदर हर विषय के बारे में जानने की क्षमता..."',
              },
              {
                id: 'president',
                name: language === 'en' ? 'Smt. Sudha Ray' : 'श्रीमती सुधा राय',
                role: language === 'en' ? 'President' : 'अध्यक्ष',
                qual: '',
                img: "/images/founders/president.jpg",
                link: '/president-message',
                descEn: '"Education is a powerful tool for social and personal development. With education, progress is inevitable. Our college has opened new horizons..."',
                descHi: '"शिक्षा सामाजिक और व्यक्तिगत विकास का शक्तिशाली साधन है। शिक्षा के साथ प्रगति अनिवार्य है। इस कॉलेज ने सीतामढी एवं शिवहर जिला के छात्र-छात्राओं के लिए..."',
              },
            ].map((leader, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: i * 0.15 } } }}
                whileHover={{ y: -12 }}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-[0_20px_40px_rgba(128,0,0,0.12)] transition-shadow duration-500 flex flex-col h-full relative overflow-hidden border border-gray-100"
              >
                {/* Premium Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#800000] via-[#D97706] to-[#5B48D9] opacity-80"></div>

                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)] relative bg-gray-100 ring-4 ring-white group-hover:ring-[#800000]/10 transition-all duration-500 transform group-hover:scale-105">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    sizes="112px"
                    placeholder="blur"
                    blurDataURL={placeholders[leader.img] || ''}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <h3 className="text-[22px] font-serif font-bold text-[#800000] text-center mb-1 group-hover:text-[#5C0000] transition-colors">{leader.name}</h3>
                <p className="text-[#D97706] font-bold text-sm text-center mb-2 tracking-wide uppercase">{leader.role}</p>
                {leader.qual && <p className="text-gray-400 text-[11px] font-semibold tracking-wider text-center mb-5 uppercase">{leader.qual}</p>}
                
                {/* Quote Layout */}
                <div className="relative flex-grow flex flex-col justify-center">
                  <span className="absolute -top-4 -left-2 text-4xl text-[#800000]/10 font-serif">"</span>
                  <p className="text-gray-600 text-sm leading-relaxed text-center italic relative z-10 px-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {language === 'en' ? leader.descEn : leader.descHi}
                  </p>
                  <span className="absolute -bottom-6 -right-2 text-4xl text-[#800000]/10 font-serif rotate-180">"</span>
                </div>

                <div className="mt-8 text-center">
                  <Link href={leader.link} className="group/btn inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-[#5B48D9] text-[#5B48D9] hover:text-white border border-[#5B48D9]/20 font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md">
                    {language === 'en' ? 'Read Full Message' : 'पूरा संदेश पढ़ें'}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== AWARDS & RECOGNITION SECTION ====== */}
      <Awards language={language} />

      {/* ====== COURSES SECTION ====== */}
      <section id="courses" className="py-24 px-4 bg-[#0a1e3f]">
        <div className="max-w-7xl mx-auto">
          {/* Header Layout */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/10 pb-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {language === 'en' ? (
                  <>Undergraduate<br />Programmes</>
                ) : (
                  <>स्नातक<br />कार्यक्रम</>
                )}
              </h2>
            </div>
            <div className="md:max-w-md lg:max-w-lg">
              <p className="text-[#a4b5c4] text-sm md:text-base leading-relaxed">
                {language === 'en'
                  ? 'We provide diverse undergraduate opportunities with Bachelor of Arts (BA) and Bachelor of Commerce (B.COM) programs, nurturing holistic education and career-oriented skills.'
                  : 'हम बैचलर ऑफ आर्ट्स (बीए) और बैचलर ऑफ कॉमर्स (बीकॉम) कार्यक्रमों के साथ विविध स्नातक अवसर प्रदान करते हैं।'
                }
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Course 1: BA Social Science (White Inset Card) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              whileHover={{ y: -10 }} onClick={() => setSelectedCourse(coursesData.baSocial)}
              className="relative group w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border border-white/5">
              <Image src="/images/gallery/academics/cover.jpg" alt="BA Social Science" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a1e3f]/20 group-hover:bg-[#0a1e3f]/10 transition-colors duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <h3 className="text-[20px] font-serif font-bold text-[#0a1e3f] leading-snug">
                  {language === 'en' ? coursesData.baSocial.titleEn : coursesData.baSocial.titleHi}
                </h3>
                <button className="mt-4 text-[#005B9F] font-bold text-sm flex items-center justify-start group/link">
                  {language === 'en' ? 'Quick View / Read More' : 'त्वरित दृश्य / और पढ़ें'} 
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>

            {/* Course 2: B.Com (Premium Blue Inset Card) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.15 } } }}
              whileHover={{ y: -10 }} onClick={() => setSelectedCourse(coursesData.bCom)}
              className="relative group w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border border-white/5">
              <Image src="/images/gallery/academics/cover1.jpg" alt="B.Com" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a1e3f]/20 group-hover:bg-[#0a1e3f]/10 transition-colors duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-br from-[#005B9F] to-[#003B6F] rounded-xl p-6 transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,59,111,0.5)]">
                <div className="text-[#FFD700] mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <h3 className="text-[20px] font-serif font-bold text-white leading-snug">
                  {language === 'en' ? coursesData.bCom.titleEn : coursesData.bCom.titleHi}
                </h3>
                <button className="mt-4 text-[#FFD700] font-bold text-sm flex items-center justify-start group/link">
                  {language === 'en' ? 'Quick View / Read More' : 'त्वरित दृश्य / और पढ़ें'} 
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>

            {/* Course 3: BA Humanities (White Inset Card) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.6, delay: 0.3 } } }}
              whileHover={{ y: -10 }} onClick={() => setSelectedCourse(coursesData.baHumanities)}
              className="relative group w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer border border-white/5">
              <Image src="/images/gallery/academics/cover2.jpg" alt="BA Humanities" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#0a1e3f]/20 group-hover:bg-[#0a1e3f]/10 transition-colors duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <h3 className="text-[20px] font-serif font-bold text-[#0a1e3f] leading-snug">
                  {language === 'en' ? coursesData.baHumanities.titleEn : coursesData.baHumanities.titleHi}
                </h3>
                <button className="mt-4 text-[#005B9F] font-bold text-sm flex items-center justify-start group/link">
                  {language === 'en' ? 'Quick View / Read More' : 'त्वरित दृश्य / और पढ़ें'} 
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </motion.div>

          </div>

          {/* Modal Popup for Course Description */}
          <AnimatePresence>
            {selectedCourse && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                onClick={() => setSelectedCourse(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white text-white hover:text-black rounded-full p-2 backdrop-blur-md transition-all z-10 shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                  
                  <div className="w-full h-48 md:h-64 relative">
                    <Image src={selectedCourse.img} alt={selectedCourse.titleEn} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white shadow-sm">
                        {language === 'en' ? selectedCourse.titleEn : selectedCourse.titleHi}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {language === 'en' ? selectedCourse.descEn : selectedCourse.descHi}
                    </p>
                    
                    <div className="mt-8 flex justify-end gap-4">
                      <button 
                        onClick={() => setSelectedCourse(null)} 
                        className="px-6 py-2.5 rounded-full font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                      >
                        {language === 'en' ? 'Close' : 'बंद करें'}
                      </button>
                      <a 
                        href={selectedCourse.link} 
                        className="px-6 py-2.5 bg-[#005B9F] hover:bg-[#003B6F] text-white rounded-full font-bold text-sm tracking-wide transition-colors shadow-md"
                      >
                        {language === 'en' ? 'Open Full Course Page' : 'पूरा पाठ्यक्रम पृष्ठ खोलें'}
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Affiliation Badge */}
          <div className="text-center mt-16 pb-4">
            <p className="text-white/60 text-sm">
              {language === 'en' ? 'All courses affiliated with ' : 'सभी पाठ्यक्रम संबद्ध '}
              <a href="https://brabu.ac.in/" target="_blank" rel="noopener" className="text-[#FFD700] ml-1 font-bold hover:underline">
                B.R.A. Bihar University, Muzaffarpur
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ====== FEATURES SECTION ====== */}
      <section id="features" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#5B48D9] font-bold text-sm uppercase tracking-widest">
              {language === 'en' ? 'Why Choose Us' : 'हमें क्यों चुनें'}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#800000] mt-2">
              {language === 'en' ? 'Key Features & Facilities' : 'प्रमुख सुविधाएं'}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-[#800000]/10 text-[#800000] shadow-sm group-hover:scale-110 group-hover:bg-[#800000]/15 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                  </div>
                ),
                titleEn: 'Expert Faculty', titleHi: 'विशेषज्ञ शिक्षक', descEn: 'Highly qualified and experienced professors dedicated to student success.', descHi: 'छात्र सफलता के लिए समर्पित उच्च योग्य अनुभवी प्रोफेसर।'
              },
              {
                icon: (
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-[#0077B6]/10 text-[#0077B6] shadow-sm group-hover:scale-110 group-hover:bg-[#0077B6]/15 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20v14H2z" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>
                  </div>
                ),
                titleEn: 'Digital Smart Classes', titleHi: 'डिजिटल स्मार्ट कक्षाएं', descEn: 'Modern audio-visual enabled classrooms for interactive learning.', descHi: 'इंटरैक्टिव शिक्षण के लिए आधुनिक ऑडियो-विजुअल कक्षाएं।'
              },
              {
                icon: (
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-[#5B48D9]/10 text-[#5B48D9] shadow-sm group-hover:scale-110 group-hover:bg-[#5B48D9]/15 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v2" /><path d="M15 2v2" /><path d="M12 2v10" /><path d="M6 21A4 4 0 0 1 7.2 13l2.8-3.7V4a2 2 0 0 1 4 0v5.3l2.8 3.7A4 4 0 0 1 18 21Z" /></svg>
                  </div>
                ),
                titleEn: 'Research & Labs', titleHi: 'अनुसंधान और प्रयोगशालाएं', descEn: 'Well-equipped laboratories and opportunities for academic research.', descHi: 'सुसज्जित प्रयोगशालाएं और शैक्षणिक अनुसंधान के अवसर।'
              },
              {
                icon: (
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-teal-600/10 text-teal-600 shadow-sm group-hover:scale-110 group-hover:bg-teal-600/15 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                ),
                titleEn: 'CCTV Secure Campus', titleHi: 'सीसीटीवी सुरक्षित परिसर', descEn: 'Full CCTV surveillance and free Wi-Fi across the campus.', descHi: 'पूरे परिसर में सीसीटीवी निगरानी और मुफ्त वाई-फाई।'
              },
              {
                icon: (
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-amber-600/10 text-amber-600 shadow-sm group-hover:scale-110 group-hover:bg-amber-600/15 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                  </div>
                ),
                titleEn: 'Library & Resources', titleHi: 'पुस्तकालय और संसाधन', descEn: 'Rich library with thousands of books, journals, and digital resources along with RO drinking water.', descHi: 'हजारों पुस्तकों, पत्रिकाओं और डिजिटल संसाधनों के साथ समृद्ध पुस्तकालय।'
              },
              {
                icon: (
                  <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-rose-600/10 text-rose-600 shadow-sm group-hover:scale-110 group-hover:bg-rose-600/15 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                  </div>
                ),
                titleEn: 'Career Services', titleHi: 'करियर सेवाएं', descEn: 'Placement support, career counseling, and skill development programs.', descHi: 'प्लेसमेंट सहायता, करियर परामर्श और कौशल विकास कार्यक्रम।'
              },
            ].map((feat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeIn, visible: { ...fadeIn.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className="bg-white group rounded-2xl p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 border border-gray-100"
              >
                {feat.icon}
                <h3 className="font-serif font-bold text-[#800000] text-lg mb-2.5">{language === 'en' ? feat.titleEn : feat.titleHi}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{language === 'en' ? feat.descEn : feat.descHi}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== NOTICES SECTION (Dynamic from DB) ====== */}
      <NoticeBoard language={language} />

      {/* ====== LIFE AT MKR (GALLERY) SECTION ====== */}
      <Gallery language={language} />

      {/* ====== PHOTO SLIDER SECTION ====== */}
      <PhotoSlider language={language} />

      {/* ====== TESTIMONIALS SECTION ====== */}
      <Testimonials language={language} />

      {/* ====== WANT TO KNOW MORE? SECTION ====== */}
      <WantToKnowMore language={language} />



      {/* AI Assistant Chatbot */}
      <AIAssistant />
    </div>
  );
}

/* ====== Want to Know More Component ====== */
function WantToKnowMore({ language }) {
  const [form, setForm] = useState({ name: '', phone: '', course: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', course: '' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0077B6]/5 via-white to-[#FFD700]/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="text-[#0077B6] font-bold text-sm uppercase tracking-widest">
            {language === 'en' ? 'Get in Touch' : 'संपर्क करें'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#800000] mt-2 mb-6 leading-tight">
            {language === 'en' ? 'Want to Know More?' : 'और जानना चाहते हैं?'}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {language === 'en'
              ? 'Have questions about admissions, courses, or campus life? Fill in the form and our team will get back to you within 24 hours.'
              : 'प्रवेश, पाठ्यक्रम या कैम्पस जीवन के बारे में प्रश्न हैं? फॉर्म भरें और हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।'
            }
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <span className="w-10 h-10 bg-[#0077B6]/10 rounded-full flex items-center justify-center text-[#0077B6]">📞</span>
              <div>
                <p className="font-bold text-sm">{language === 'en' ? 'Call Us' : 'कॉल करें'}</p>
                <a href="tel:+917597052444" className="text-sm text-gray-500 hover:text-[#0077B6]">+91-7597052444 (Admission)</a>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <span className="w-10 h-10 bg-[#0077B6]/10 rounded-full flex items-center justify-center text-[#0077B6]">✉️</span>
              <div>
                <p className="font-bold text-sm">{language === 'en' ? 'Email Us' : 'ईमेल करें'}</p>
                <a href="mailto:mkrdr.grdcollege@gmail.com" className="text-sm text-gray-500 hover:text-[#0077B6]">mkrdr.grdcollege@gmail.com</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-serif font-bold text-[#800000] mb-6">
              {language === 'en' ? 'Request a Callback' : 'कॉलबैक अनुरोध'}
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <span className="text-5xl block mb-4">✅</span>
                <h4 className="text-lg font-bold text-green-600">
                  {language === 'en' ? 'Thank You!' : 'धन्यवाद!'}
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  {language === 'en' ? 'We will contact you within 24 hours.' : 'हम 24 घंटे के भीतर आपसे संपर्क करेंगे।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{language === 'en' ? 'Full Name' : 'पूरा नाम'}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none text-base"
                    placeholder={language === 'en' ? 'Enter your name' : 'अपना नाम दर्ज करें'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{language === 'en' ? 'Phone Number' : 'फ़ोन नंबर'}</label>
                  <input
                    type="tel"
                    required
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none text-base"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{language === 'en' ? 'Interested Course' : 'इच्छित पाठ्यक्रम'}</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 outline-none text-base"
                    required
                  >
                    <option value="">{language === 'en' ? 'Select Course' : 'पाठ्यक्रम चुनें'}</option>
                    <option value="BA">B.A. (Humanities & Social Science)</option>
                    <option value="BCom">B.Com. (Accounting & Management)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#800000] to-[#5C0000] text-white font-bold py-4 rounded-lg hover:opacity-90 transition shadow-lg text-base active:scale-[0.98]"
                >
                  {language === 'en' ? '📩 Request Callback' : '📩 कॉलबैक अनुरोध करें'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
