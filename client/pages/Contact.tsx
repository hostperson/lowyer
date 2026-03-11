import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Contact() {
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
