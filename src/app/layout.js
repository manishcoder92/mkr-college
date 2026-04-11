import { Inter, Playfair_Display, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const notoHindi = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: '--font-hindi', weight: ['400','500','600','700','800'] });

export const metadata = {
  title: "M.K.R. Dr. G.R.D. College | माताश्री कौशल्या रामदेव डॉ० गणेश राय डिग्री कॉलेज",
  description: "माताश्री कौशल्या रामदेव डॉ० गणेश राय डिग्री कॉलेज - Dedicated to Excellence, Committed to Success. UG Programs in B.A. & B.Com affiliated with B.R.A. Bihar University, Muzaffarpur.",
  keywords: "MKR College, Sitamarhi, Bihar, B.A., B.Com, Degree College, Dr. Ganesh Ray, Higher Education",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  themeColor: "#800000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MKR College",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} ${notoHindi.variable} font-sans min-h-dvh flex flex-col bg-slate-50 antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
