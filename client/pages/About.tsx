import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-beige-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-beige-dark mb-12 text-center">
              Hakkımızda
            </h1>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-beige-dark mb-4">
                  Kuruluş Tarihi
                </h2>
                <p className="text-beige-dark text-lg leading-relaxed">
                  Ceylan Hukuk Bürosu, 1987 yılında kurulmuş olup, İstanbul ve Antalya'da 
                  donanımlı ve deneyimli hukuk müşavirlerinden oluşan bir ekipte hizmet 
                  vermektedir.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-beige-dark mb-4">
                  Misyon
                </h2>
                <p className="text-beige-dark text-lg leading-relaxed">
                  Müvekkillerimize en yüksek kalitede hukuki danışmanlık ve temsil hizmeti 
                  sağlamak, onların haklarını korumak ve iş amaçlarını başarmalarına yardımcı olmaktır.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-beige-dark mb-4">
                  Uzmanlık Alanları
                </h2>
                <ul className="space-y-3 text-beige-dark text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">✓</span>
                    <span>Ticaret ve Şirketler Hukuku</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">✓</span>
                    <span>Deniz Ticareti Hukuku</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">✓</span>
                    <span>Gayrimenkul Hukuku</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">✓</span>
                    <span>Fikri ve Sınai Haklar Hukuku</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-2xl">✓</span>
                    <span>Aile ve Miras Hukuku</span>
                  </li>
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
