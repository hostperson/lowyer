import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  education: string;
  bio: string;
  specialties: string[];
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Av. Oğuz Ceylan",
      title: "Partner Avukat",
      education: "Robert Kolej 2016, Koç Üniversitesi 2020",
      bio: "İleri derecede İngilizce bilmekte olup İngilizce dilinde yeminli tercüman sıfatına sahiptir.",
      specialties: [
        "Ticaret Hukuku",
        "Rekabet Hukuku",
        "Fikri ve Sınai Haklar Hukuku",
        "Şirketler Hukuku",
        "Kira Hukuku",
      ],
    },
    {
      id: 2,
      name: "Av. K. Kutluay Ceylan",
      title: "Kurucu Ortak",
      education: "Ankara Üniversitesi Hukuk Fakültesi 1986",
      bio: "35 yıllık avukatlık deneyimiyle birçok konferans ve seminerlere katılmıştır. Resmi arabulucu ve marka vekilidir.",
      specialties: [
        "Ticaret ve Deniz Ticareti Hukuku",
        "Şirketler Hukuku",
        "Gayrimenkul Hukuku",
        "Fikri ve Sınai Haklar Hukuku",
        "Marka ve Patent Hukuku",
      ],
    },
    {
      id: 3,
      name: "Av. Fatma Ceylan",
      title: "Ortak Avukat",
      education: "Ankara Üniversitesi Hukuk Fakültesi 1986",
      bio: "Avukatlığın yanı sıra kadın haklarını savunan derneklere üye olup, ANTİKAD Yönetim Kurulu'nda 2018-2021 yılları arasında görev almıştır.",
      specialties: [
        "Aile Hukuku",
        "Kadın Hakları",
        "Şirketler Hukuku",
        "Gayrimenkul Hukuku",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-beige-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-beige-dark mb-12 text-center">
              Takımımız
            </h1>

            {/* Team Members */}
            <div className="space-y-12">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Placeholder */}
                    <div className="bg-beige-dark rounded-2xl m-6 aspect-square flex items-center justify-center text-white text-sm">
                      <div className="text-center">
                        <div className="text-6xl mb-4">⚖️</div>
                        <p>{member.name}</p>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl font-serif font-bold text-beige-dark mb-2">
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
                        <h4 className="text-beige-dark font-semibold mb-3">
                          Uzmanlık Alanları:
                        </h4>
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
