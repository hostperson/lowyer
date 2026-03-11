import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";

interface TeamMember {
  name: string;
  title: string;
  education: string;
  bio: string;
  specialties: string[];
}

const teamPhotos = [
  "/images/team/oguz-ceylan.avif",
  "/images/team/kutluay-ceylan.avif",
  "/images/team/fatma-ceylan.avif",];

function getInitials(name: string) {
  return name
    .replace(/^Av\.\s*/, '')
    .split(' ')
    .filter(Boolean)
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function TeamPhoto({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[hsl(16,20%,42%)] to-[hsl(16,20%,32%)] flex items-center justify-center rounded-2xl">
        <span className="text-5xl md:text-6xl font-bold text-white/90 tracking-wider">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover rounded-2xl"
      onError={() => setFailed(true)}
    />
  );
}

export default function Team() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const members = getTranslation(language, 'team.members') as unknown as TeamMember[];

  useEffect(() => {
    document.title = `${t('team.title')} | Ceylan Hukuk Bürosu`;
  }, [language]);

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />

      <main className="flex-grow" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <section className="py-16 md:py-24 bg-beige-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-beige-dark mb-12 text-center">
              {t('team.title')}
            </h1>

            <div className="space-y-12">
              {Array.isArray(members) && members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="m-6 aspect-square rounded-2xl overflow-hidden">
                      <TeamPhoto src={teamPhotos[index]} name={member.name} />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-bold text-beige-dark mb-2">
                        {member.name}
                      </h2>
                      <p className="text-gold text-lg font-medium mb-4">
                        {member.title}
                      </p>
                      <p className="text-beige-dark text-sm mb-4 font-medium">
                        {member.education}
                      </p>
                      <p className="text-beige-dark leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      <div>
                        <ul className="space-y-2">
                          {member.specialties.map((specialty, idx) => (
                            <li
                              key={idx}
                              className="text-beige-dark flex items-start gap-2"
                            >
                              <span className="text-gold">•</span>
                              <span>{specialty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
