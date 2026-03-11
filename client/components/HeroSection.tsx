export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-beige-light to-beige py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm bg-beige-dark rounded-2xl aspect-square flex items-center justify-center text-white text-sm">
              {/* Placeholder for lawyer image */}
              <div className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <p>Avukat Fotoğrafı</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-beige-dark mb-4">
              CEYLAN
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-beige-dark mb-8">
              HUKUK BÜROSU
            </h2>

            {/* Contact info badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-gold text-2xl">📞</span>
                <span className="text-sm text-beige-dark">+90 532 247 63 86</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-gold text-2xl">📞</span>
                <span className="text-sm text-beige-dark">+90 506 820 49 98</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-gold text-2xl">📧</span>
                <span className="text-sm text-beige-dark">info@ceylan.av.tr</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-gold text-2xl">📞</span>
                <span className="text-sm text-beige-dark">+90 242 243 46 23</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-beige-dark text-lg leading-relaxed mb-8">
              Ceylan Hukuk Bürosu, 1987'den beri donanımlı ve deneyimli takımıyla Istanbul ve Antalya'da hizmet vermektedir.
            </p>

            {/* Navigation buttons */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button className="px-8 py-3 bg-beige-dark text-white rounded-full hover:bg-opacity-90 transition-all font-medium">
                Hakkımızda
              </button>
              <button className="px-8 py-3 border-2 border-beige-dark text-beige-dark rounded-full hover:bg-beige-light transition-all font-medium">
                İletişim
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-beige-dark rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-beige-dark rounded-full opacity-20"></div>
    </section>
  );
}
