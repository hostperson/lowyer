import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/translations";

export default function Index() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Section Navigation Bar */}
      <nav className="bg-beige-dark text-white z-40" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around">
            <a href="#anasayfa" className="px-4 py-3 hover:bg-white/10 transition-colors font-medium border-b-2 border-transparent hover:border-white">
              {t('nav.home')}
            </a>
            <a href="#hakkimizda" className="px-4 py-3 hover:bg-white/10 transition-colors font-medium border-b-2 border-transparent hover:border-white">
              {t('nav.about')}
            </a>
            <a href="#takimimiz" className="px-4 py-3 hover:bg-white/10 transition-colors font-medium border-b-2 border-transparent hover:border-white">
              {t('nav.team')}
            </a>
            <a href="#iletisim" className="px-4 py-3 hover:bg-white/10 transition-colors font-medium border-b-2 border-transparent hover:border-white">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <main className="flex-grow">
        <div id="anasayfa">
          <ServicesSection />
        </div>
        <div id="hakkimizda">
          <AboutSection />
        </div>
        <div id="takimimiz">
          <PracticeAreasSection />
        </div>
        <div id="iletisim">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
