import Link from "next/link";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Blog",
  description: "Actualités et articles sur la plongée à El Kala.",
};

export default function BlogPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <PageIntro
        eyebrow="Actualités"
        title="Le blog"
        description="Conseils, découvertes et actualités du club."
      />

      <div className="grid gap-10 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block"
          >
            <div className="relative aspect-[4/3] mb-4 overflow-hidden">
              <Image
                src={article.image}
                alt={article.titre}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-[#8FA9AC] uppercase tracking-wide mb-2">
              {article.date}
            </p>
            <h2 className="font-display font-bold text-[#0B1F2E] mb-2 group-hover:text-[#1B7A72] transition-colors">
              {article.titre}
            </h2>
            <p className="text-sm text-[#5C6B6D]">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}