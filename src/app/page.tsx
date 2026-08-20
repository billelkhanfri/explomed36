import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
export const metadata = {
  description:
    "Club de plongée à El Kala : baptêmes, formations et plongée scientifique en Méditerranée.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-[#0B1F2E] overflow-hidden py-32 px-6">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,120 C200,170 400,70 600,120 C800,170 1000,70 1200,120" stroke="#2DD4BF" strokeWidth="1.3" fill="none" />
          <path d="M0,220 C200,270 400,170 600,220 C800,270 1000,170 1200,220" stroke="#2DD4BF" strokeWidth="1.3" fill="none" opacity="0.75" />
          <path d="M0,320 C200,370 400,270 600,320 C800,370 1000,270 1200,320" stroke="#2DD4BF" strokeWidth="1.3" fill="none" opacity="0.55" />
          <path d="M0,420 C200,470 400,370 600,420 C800,470 1000,370 1200,420" stroke="#2DD4BF" strokeWidth="1.3" fill="none" opacity="0.35" />
          <path d="M0,20 C200,70 400,-30 600,20 C800,70 1000,-30 1200,20" stroke="#2DD4BF" strokeWidth="1.3" fill="none" opacity="0.9" />
        </svg>

        <div className="hidden md:flex absolute right-6 top-0 bottom-0 flex-col justify-between py-20 font-display text-xs text-[#8FA9AC]">
          <span>−0m</span>
          <span>−10m</span>
          <span>−20m</span>
          <span>−30m</span>
          <span>−40m</span>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-display text-[#2DD4BF] uppercase tracking-[0.3em] text-xs mb-4">
            Exploration sous-marine
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#EDE6D6] mb-6 leading-tight">
            Plongez avec Explomed36
            <br />
            <span className="text-[#E85D3D]">à El Kala</span>
          </h1>
          <p className="text-[#8FA9AC] text-lg max-w-xl mx-auto mb-10">
            Baptêmes, formations et plongée scientifique sur l'une des plus
            belles côtes de Méditerranée.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/baptemes"
              className="bg-[#E85D3D] text-[#0B1F2E] font-semibold px-6 py-3 hover:brightness-110 transition"
            >
              Réserver un baptême
            </Link>
            <Link
              href="/formations"
              className="border border-[#8FA9AC] text-[#EDE6D6] px-6 py-3 hover:border-[#1B7A72] hover:text-[#1B7A72] transition"
            >
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
<FadeIn>
      {/* Parcours — profil de plongée */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="font-display text-[#1B7A72] uppercase tracking-[0.3em] text-xs mb-3 text-center">
          Votre parcours
        </p>
        <h2 className="font-display text-2xl md:text-4xl font-bold text-[#0B1F2E] mb-16 text-center">
          De la surface aux fonds scientifiques
        </h2>

        <div className="relative">
          {/* Ligne de profil, descend puis remonte */}
          <svg
            className="w-full h-32 md:h-40"
            viewBox="0 0 900 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50,20 C250,20 250,140 450,140 C650,140 650,60 850,60"
              stroke="#2DD4BF"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="20" r="6" fill="#E85D3D" />
            <circle cx="450" cy="140" r="6" fill="#E85D3D" />
            <circle cx="850" cy="60" r="6" fill="#E85D3D" />
          </svg>

          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            <div>
              <p className="font-display font-bold text-[#0B1F2E]">Baptême</p>
              <p className="text-sm text-[#5C6B6D]">Découverte, −6m</p>
            </div>
            <div>
              <p className="font-display font-bold text-[#0B1F2E]">Formation</p>
              <p className="text-sm text-[#5C6B6D]">Niveaux 1 à 3</p>
            </div>
            <div>
              <p className="font-display font-bold text-[#0B1F2E]">
                Plongée scientifique
              </p>
              <p className="text-sm text-[#5C6B6D]">Terrain, recherche</p>
            </div>
          </div>
        </div>
      </section>
       </FadeIn>
       <FadeIn> 
            {/* En immersion — aperçu photo */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="font-display text-[#1B7A72] uppercase tracking-[0.3em] text-xs mb-3">
              En immersion
            </p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-[#0B1F2E]">
              Nos sorties à El Kala
            </h2>
          </div>
          <Link
            href="/galerie"
            className="text-[#1B7A72] font-display text-sm uppercase tracking-wide hover:text-[#E85D3D] transition"
          >
            Voir la galerie →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[420px]">
          <div className="relative col-span-2 row-span-2">
            <Image
              src="https://picsum.photos/seed/explomed-1/800/800"
              alt="Sortie de plongée en Méditerranée"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative col-span-2 row-span-1">
            <Image
              src="https://picsum.photos/seed/explomed-2/800/400"
              alt="Formation de plongée scientifique"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative col-span-1 row-span-1">
            <Image
              src="https://picsum.photos/seed/explomed-3/400/400"
              alt="Baptême de plongée encadré"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative col-span-1 row-span-1">
            <Image
              src="https://picsum.photos/seed/explomed-4/400/400"
              alt="Équipe Explomed36"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Pourquoi Explomed36 — fond sombre contrasté */}
      <section className="bg-[#0B1F2E] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-display text-[#2DD4BF] uppercase tracking-[0.3em] text-xs mb-3">
            Pourquoi nous
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-[#EDE6D6] mb-12 max-w-xl">
            Une association encadrée, tournée vers la science et la mer
          </h2>
          <div className="grid gap-px bg-[#EDE6D6]/10 md:grid-cols-3">
            <div className="p-8">
              <p className="font-display text-3xl text-[#E85D3D] mb-2">01</p>
              <h3 className="font-display font-bold text-[#EDE6D6] mb-2">
                Moniteurs qualifiés
              </h3>
              <p className="text-[#8FA9AC] text-sm">
                Un encadrement sérieux, du baptême aux formations les plus
                avancées.
              </p>
            </div>
            <div className="p-8">
              <p className="font-display text-3xl text-[#E85D3D] mb-2">02</p>
              <h3 className="font-display font-bold text-[#EDE6D6] mb-2">
                Approche scientifique
              </h3>
              <p className="text-[#8FA9AC] text-sm">
                Une formation spécialisée en plongée scientifique, rare sur
                la côte.
              </p>
            </div>
            <div className="p-8">
              <p className="font-display text-3xl text-[#E85D3D] mb-2">03</p>
              <h3 className="font-display font-bold text-[#EDE6D6] mb-2">
                Engagement local
              </h3>
              <p className="text-[#8FA9AC] text-sm">
                Chaque plongée contribue à la préservation du milieu marin
                d'El Kala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau CTA final */}
      <section className="bg-[#E85D3D] py-16 px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0B1F2E] mb-4">
          Prêt à découvrir les fonds d'El Kala ?
        </h2>
        <p className="text-[#0B1F2E]/80 mb-8 max-w-xl mx-auto">
          Réservez votre baptême ou contactez-nous pour en savoir plus sur
          nos formations.
        </p>
        <Link
          href="/contact"
          className="bg-[#0B1F2E] text-[#EDE6D6] font-semibold px-8 py-3 hover:brightness-125 transition inline-block"
        >
          Nous contacter
        </Link>
      </section>
    </>
  );
}