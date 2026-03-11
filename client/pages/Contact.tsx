import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
  useEffect(() => {
    document.title = 'İletişim | Ceylan Hukuk Bürosu';
  }, []);
  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />

      <main className="flex-grow">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
