import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { getBlogPost } from "@/lib/blogData";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const post = slug ? getBlogPost(language, slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Ceylan Hukuk Bürosu`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.excerpt);
    }
    return () => {
      document.title = 'Ceylan Hukuk Bürosu | Antalya & İstanbul Avukat - Hukuk Danışmanlığı';
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-beige flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-beige-dark mb-4">404</h1>
            <Link to="/blog" className="text-gold hover:underline">
              {t('blog.backToBlog')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige flex flex-col">
      <Navigation />

      <main className="flex-grow" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <article className="py-16 md:py-24 bg-beige-light">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-gold hover:underline mb-8 text-sm font-medium"
            >
              ← {t('blog.backToBlog')}
            </Link>

            <div className="mb-6">
              <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-beige-dark mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-muted-foreground mb-8 text-sm">
              {t('blog.publishedOn')}: {post.date}
            </p>

            <div className="w-16 h-1 bg-gold mb-8" />

            <div className="prose prose-lg max-w-none text-beige-dark blog-content">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl md:text-3xl font-bold text-beige-dark mt-10 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-xl md:text-2xl font-bold text-beige-dark mt-8 mb-3">{line.replace('### ', '')}</h3>;
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={i} className="font-bold text-beige-dark my-2">{line.replace(/\*\*/g, '')}</p>;
                }
                if (line.startsWith('- **')) {
                  const parts = line.replace('- **', '').split('**');
                  return (
                    <div key={i} className="flex gap-2 my-1 ml-4">
                      <span className="text-gold">•</span>
                      <p><strong>{parts[0]}</strong>{parts[1]}</p>
                    </div>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <div key={i} className="flex gap-2 my-1 ml-4">
                      <span className="text-gold">•</span>
                      <p>{line.replace('- ', '')}</p>
                    </div>
                  );
                }
                if (/^\d+\.\s\*\*/.test(line)) {
                  const match = line.match(/^\d+\.\s\*\*(.+?)\*\*\s*(.*)/);
                  if (match) {
                    return (
                      <div key={i} className="flex gap-2 my-1 ml-4">
                        <span className="text-gold font-bold">{line.match(/^\d+/)?.[0]}.</span>
                        <p><strong>{match[1]}</strong> {match[2]}</p>
                      </div>
                    );
                  }
                }
                if (line.trim() === '') return <div key={i} className="h-2" />;
                return <p key={i} className="my-2 leading-relaxed">{line}</p>;
              })}
            </div>

            {post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-beige-dark/10 text-beige-dark text-xs px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
