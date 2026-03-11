export default function PracticeAreasSection() {
  const practiceAreas = [
    "Ticaret Hukuku",
    "Deniz Ticareti Hukuku",
    "Şirketler Hukuku",
    "Marka ve Patent Hukuku",
    "Rekabet Hukuku",
    "Banka ve Sözleşmeler Hukuku",
    "Borçlar Hukuku",
    "İş Hukuku",
    "İcra İflas Hukuku",
    "İdare Hukuku",
    "Aile ve Miras Hukuku",
    "Vatandaşlık Hukuku",
    "Malpraktis Hukuku",
    "Gayrimenkul Hukuku",
  ];

  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige-dark inline-block px-8 py-3 bg-beige-light rounded-full">
            Faaliyet Alanlarımız
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-beige-dark rounded-2xl flex items-center justify-center text-white text-sm">
              <div className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <p>Hukuk Ofisi Fotoğrafı</p>
              </div>
            </div>
          </div>

          {/* Right side - Practice Areas List */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-beige-dark text-lg"
                >
                  <span className="text-gold text-2xl flex-shrink-0">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
