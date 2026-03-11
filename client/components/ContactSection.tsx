import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslation } from "@/lib/translations";

export default function ContactSection() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", surname: "", email: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-beige-dark text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Antalya Office */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact.offices.antalya')}</h3>
            <p className="text-white/80 leading-relaxed whitespace-pre-line">
              {t('contact.offices.antalyaAddress')}
            </p>
          </div>

          {/* Istanbul Office */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact.offices.istanbul')}</h3>
            <p className="text-white/80 leading-relaxed whitespace-pre-line">
              {t('contact.offices.istanbulAddress')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact.offices.contact')}</h3>
            <div className="space-y-2 text-white/80 whitespace-pre-line">
              <p>{t('contact.phone')}</p>
              <p className="pt-2">{t('contact.email')}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.surname')}</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder={t('contact.form.surnamePlaceholder')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.form.email')} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-beige-dark rounded-full hover:bg-opacity-90 transition-all font-medium"
              >
                {t('contact.form.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
