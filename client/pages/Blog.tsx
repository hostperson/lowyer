import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { getBlogPosts } from "@/lib/blogData";

export default function Blog() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const posts = getBlogPosts(language);

  useEffect(() => {
    document.title = `${t('blog.title')} | Ceylan Hukuk Bürosu`;
  }, [language]);

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />

      <main className="flex-grow" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <section className="py-16 md:py-24 bg-beige-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-beige-dark mb-4 text-center">
              {t('blog.title')}
            </h1>
            <div className="w-20 h-1 bg-gold mx-auto mb-12" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 bg-gradient-to-br from-[hsl(16,20%,42%)] to-[hsl(16,20%,32%)] flex items-center justify-center p-6">
                    <span className="text-gold text-sm font-semibold uppercase tracking-widest text-center">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <h3 className="text-lg font-bold text-beige-dark mb-3 group-hover:text-gold transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-gold font-medium text-sm">
                      {t('blog.readMore')} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
