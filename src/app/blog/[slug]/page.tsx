import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <div className="relative h-[45vh] min-h-[320px]">
        <Image
          src={article.image}
          alt={article.titre}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B1F2E]/50" />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-xs text-[#8FA9AC] uppercase tracking-wide mb-3">
          {article.date}
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[#0B1F2E] mb-8">
          {article.titre}
        </h1>
        <div className="space-y-5 text-[#5C6B6D] leading-relaxed whitespace-pre-line">
          {article.contenu}
        </div>
      </div>
    </article>
  );
}