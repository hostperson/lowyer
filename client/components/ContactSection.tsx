import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-beige-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Bize Ulaşın!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Antalya Office */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Antalya</h3>
            <p className="text-white/80 leading-relaxed">
              Konyaaltı Caddesi No: 50<br />
              Kasapoğlu Apartmanı Kat 4 Daire 8<br />
              Muratpaşa
            </p>
          </div>

          {/* Istanbul Office */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">İstanbul</h3>
            <p className="text-white/80 leading-relaxed">
              Bağdat Caddesi No 24<br />
              Kat 3 Daire 12<br />
              Kadıköy
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">İletişim</h3>
            <div className="space-y-2 text-white/80">
              <p>+90 532 247 63 86</p>
              <p>+90 506 820 49 98</p>
              <p>+90 242 243 46 23</p>
              <p className="pt-2">info@ceylan.av.tr</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold mb-8">Mesaj Gönderin</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">İsim</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder="Adınız"
                  required
                />
              </div>

              {/* Surname */}
              <div>
                <label className="block text-sm font-medium mb-2">Soyadı</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder="Soyadınız"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">E-posta *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors"
                  placeholder="E-posta adresiniz"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Mesajınız</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/50 border border-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Mesajınızı yazınız..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-beige-dark rounded-full hover:bg-opacity-90 transition-all font-medium font-sans"
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
