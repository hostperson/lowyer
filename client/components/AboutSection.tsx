export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-beige-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige-dark inline-block px-8 py-3 bg-white rounded-full">
            Hakkımızda
          </h2>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-beige-dark text-lg leading-relaxed mb-6">
            Ceylan Hukuk Bürosu, 1987'den beri donanımlı ve deneyimli takımıyla 
            İstanbul ve Antalya'da hizmet vermektedir.
          </p>

          <p className="text-beige-dark text-base md:text-lg leading-relaxed">
            Ticaret Hukuku, Deniz Ticareti Hukuku, Şirketler Hukuku, Gayrimenkul Hukuku, 
            Fikri ve Sınai Haklar Hukuku, Marka ve Patent Hukuku, Aile Hukuku, İcra ve İflas Hukuku 
            alanlarında ve İngilizce dilinde uzman hukuk müşavirlerimiz, sayıca konferans ve seminerlere 
            katılmıştır.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mt-12 flex-wrap">
          <button className="px-8 py-3 bg-beige-dark text-white rounded-full hover:bg-opacity-90 transition-all font-medium">
            Takımımızı Tanıyın
          </button>
          <button className="px-8 py-3 border-2 border-beige-dark text-beige-dark rounded-full hover:bg-beige-light transition-all font-medium">
            Bize Ulaşın
          </button>
        </div>
      </div>
    </section>
  );
}
