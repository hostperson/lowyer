import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-beige-dark text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">CEYLAN</h3>
            <p className="text-white/80">
              Profesyonel Hukuk Danışmanlığı Hizmetleri
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Sayfalar</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/hakkimizda"
                  className="hover:text-white transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/takimimiz"
                  className="hover:text-white transition-colors"
                >
                  Takımımız
                </Link>
              </li>
              <li>
                <Link
                  to="/iletisim"
                  className="hover:text-white transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ticaret Hukuku
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Şirketler Hukuku
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gayrimenkul Hukuku
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Aile Hukuku
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>+90 532 247 63 86</li>
              <li>+90 506 820 49 98</li>
              <li>+90 242 243 46 23</li>
              <li className="pt-2">info@ceylan.av.tr</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Ceylan Hukuk Bürosu. Tüm Hakları Saklıdır.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
