export default function ServicesSection() {
  const services = [
    {
      id: 1,
      name: "Ticaret ve Şirketler Hukuku",
      icon: "🏢",
    },
    {
      id: 2,
      name: "İş Hukuku",
      icon: "👔",
    },
    {
      id: 3,
      name: "Marka ve Patent Hukuku",
      icon: "🔍",
    },
    {
      id: 4,
      name: "İcra ve İflas Hukuku",
      icon: "💰",
    },
    {
      id: 5,
      name: "Vatandaşlık Hukuku",
      icon: "🌙",
    },
    {
      id: 6,
      name: "Gayrimenkul Hukuku",
      icon: "🏠",
    },
    {
      id: 7,
      name: "Malpraktis Hukuku",
      icon: "⚕️",
    },
    {
      id: 8,
      name: "Aile ve Miras Hukuku",
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige-dark inline-block px-8 py-3 bg-beige-light rounded-full">
            Hizmetlerimiz
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
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
