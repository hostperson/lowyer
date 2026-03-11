import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <footer className="bg-beige-dark text-white py-12 md:py-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('footer.brand')}</h3>
            <p className="text-white/80">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.pages')}</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/takimimiz" className="hover:text-white transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>{t('services.items.commercialLaw')}</li>
              <li>{t('services.items.realEstateLaw')}</li>
              <li>{t('services.items.familyLaw')}</li>
              <li>{t('services.items.citizenshipLaw')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>+90 532 247 63 86</li>
              <li>+90 506 820 49 98</li>
              <li>+90 242 243 46 23</li>
              <li className="pt-2">info@ceylan.av.tr</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
