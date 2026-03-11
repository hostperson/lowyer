import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";

export default function PracticeAreasSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const practiceAreas = getTranslation(language, 'practiceAreas.items') as unknown as string[];

  return (
    <section className="py-16 md:py-24 bg-beige" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-dark inline-block px-8 py-3 bg-beige-light rounded-full">
            {t('practiceAreas.title')}
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Team photo */}
          <div className="flex items-center justify-center">
            <img
              src="/images/team/fatma-ceylan.avif"
              alt="Av. Fatma Ceylan"
              className="w-full aspect-square rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Right side - Practice Areas List */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-3">
              {Array.isArray(practiceAreas) && practiceAreas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-beige-dark text-lg"
                >
                  <span className="text-gold text-2xl flex-shrink-0">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
