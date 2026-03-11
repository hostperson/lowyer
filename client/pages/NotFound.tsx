import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/translations";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center py-24 px-4">
          <h1 className="text-7xl md:text-8xl font-bold text-beige-dark mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-beige-dark mb-8">
            {t('notFound.message')}
          </p>
          <p className="text-lg text-beige-dark mb-12 max-w-md mx-auto">
            {t('notFound.description')}
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-beige-dark text-white rounded-full hover:bg-opacity-90 transition-all font-medium"
          >
            {t('notFound.button')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
