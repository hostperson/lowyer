import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/translations";

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[hsl(16,20%,42%)] to-[hsl(16,20%,32%)] flex items-center justify-center rounded-2xl">
        <span className="text-5xl font-bold text-white/90 tracking-wider">KC</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} className="w-full max-w-sm rounded-2xl aspect-square object-cover shadow-lg" onError={() => setFailed(true)} />
  );
}

export default function HeroSection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="relative bg-gradient-to-r from-beige-light to-beige overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Banner Image */}
      <div className="w-full">
        <img
          src="/images/banner.avif"
          alt="Ceylan Hukuk Bürosu Banner"
          className="w-full h-auto object-cover hidden md:block"
        />
      </div>

      {/* Mobile fallback + content */}
      <div className="md:hidden py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <HeroImage src="/images/team/kutluay-ceylan.avif" alt="Av. K. Kutluay Ceylan" />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-beige-dark mb-4">
              {t('hero.title')}
            </h1>
            <h2 className="text-2xl font-bold text-beige-dark mb-6">
              {t('hero.subtitle')}
            </h2>
            <p className="text-beige-dark text-base leading-relaxed mb-8">
              {t('hero.description')}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/hakkimizda" className="px-8 py-3 bg-beige-dark text-white rounded-full hover:bg-opacity-90 transition-all font-medium">
                {t('hero.buttons.about')}
              </Link>
              <Link to="/iletisim" className="px-8 py-3 border-2 border-beige-dark text-beige-dark rounded-full hover:bg-beige-light transition-all font-medium">
                {t('hero.buttons.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop content below banner */}
      <div className="hidden md:block py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-beige-dark text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/hakkimizda" className="px-8 py-3 bg-beige-dark text-white rounded-full hover:bg-opacity-90 transition-all font-medium">
              {t('hero.buttons.about')}
            </Link>
            <Link to="/iletisim" className="px-8 py-3 border-2 border-beige-dark text-beige-dark rounded-full hover:bg-beige-light transition-all font-medium">
              {t('hero.buttons.contact')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
