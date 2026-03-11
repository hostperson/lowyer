import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation, getTranslation } from "@/lib/translations";

export default function About() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    document.title = `${t('about.title')} | Ceylan Hukuk Bürosu`;
  }, [language]);
  const practiceAreas = getTranslation(language, 'practiceAreas.items') as unknown as string[];

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />
      <main className="flex-grow" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <section className="py-16 md:py-24 bg-beige-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-beige-dark mb-12 text-center">
              {t('about.title')}
            </h1>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
              <div>
                <p className="text-beige-dark text-lg leading-relaxed">
                  {t('about.description')}
                </p>
              </div>
              <div>
                <p className="text-beige-dark text-lg leading-relaxed">
                  {t('about.descriptionLong')}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-beige-dark mb-4">
                  {t('practiceAreas.title')}
                </h2>
                <ul className="space-y-3 text-beige-dark text-lg">
                  {Array.isArray(practiceAreas) && practiceAreas.map((area, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold text-2xl">✓</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
