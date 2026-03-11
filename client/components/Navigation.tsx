import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-beige text-beige-dark shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-serif font-bold">
              CEYLAN
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className="text-beige-dark hover:text-primary transition-colors font-medium"
            >
              Anasayfa
            </Link>
            <Link
              to="/hakkimizda"
              className="text-beige-dark hover:text-primary transition-colors font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              to="/takimimiz"
              className="text-beige-dark hover:text-primary transition-colors font-medium"
            >
              Takımımız
            </Link>
            <Link
              to="/iletisim"
              className="text-beige-dark hover:text-primary transition-colors font-medium"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-beige-dark hover:bg-beige-light"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-beige-light text-beige-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              Anasayfa
            </Link>
            <Link
              to="/hakkimizda"
              className="block px-4 py-2 rounded-md hover:bg-beige-light text-beige-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              to="/takimimiz"
              className="block px-4 py-2 rounded-md hover:bg-beige-light text-beige-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              Takımımız
            </Link>
            <Link
              to="/iletisim"
              className="block px-4 py-2 rounded-md hover:bg-beige-light text-beige-dark font-medium"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
