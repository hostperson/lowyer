import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/translations";

export default function ServicesSection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const services = [
    { id: 1, key: "commercialLaw", icon: "🏢" },
    { id: 2, key: "laborLaw", icon: "👔" },
    { id: 3, key: "intellectualProperty", icon: "🔍" },
    { id: 4, key: "bankruptcyLaw", icon: "💰" },
    { id: 5, key: "citizenshipLaw", icon: "🌙" },
    { id: 6, key: "realEstateLaw", icon: "🏠" },
    { id: 7, key: "malpracticeLaw", icon: "⚕️" },
    { id: 8, key: "familyLaw", icon: "👨‍👩‍👧‍👦" },
  ];

  return (
    <section className="py-16 md:py-24 bg-beige" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-beige-dark inline-block px-8 py-3 bg-beige-light rounded-full">
            {t('services.title')}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-beige-light rounded-3xl p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-60"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-medium text-beige-dark">
                {t(`services.items.${service.key}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
