import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/translations";

export default function AboutSection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <section className="py-16 md:py-24 bg-beige-light" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-dark inline-block px-8 py-3 bg-white rounded-full">
            {t('about.title')}
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-beige-dark text-lg leading-relaxed mb-6">
            {t('about.description')}
          </p>

          <p className="text-beige-dark text-base md:text-lg leading-relaxed">
            {t('about.descriptionLong')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-12 flex-wrap">
          <Link to="/takimimiz" className="px-8 py-3 bg-beige-dark text-white rounded-full hover:bg-opacity-90 transition-all font-medium">
            {t('about.buttons.team')}
          </Link>
          <Link to="/iletisim" className="px-8 py-3 border-2 border-beige-dark text-beige-dark rounded-full hover:bg-beige-light transition-all font-medium">
            {t('about.buttons.contact')}
          </Link>
        </div>
      </div>
    </section>
  );
}
