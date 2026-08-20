import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Baptêmes de plongée",
  description:
    "Découvrez la plongée sous-marine à El Kala avec un baptême encadré, sans expérience requise.",
};

const etapes = [
  {
    numero: "01",
    titre: "Accueil et briefing",
    description:
      "Un moniteur vous présente le matériel et les consignes de sécurité avant la mise à l'eau.",
  },
  {
    numero: "02",
    titre: "Mise à l'eau encadrée",
    description:
      "Descente progressive jusqu'à environ 6 mètres, main dans la main avec votre moniteur.",
  },
  {
    numero: "03",
    titre: "Immersion",
    description:
      "Découverte des fonds marins d'El Kala, à votre rythme, en toute sécurité.",
  },
  {
    numero: "04",
    titre: "Retour et débriefing",
    description:
      "Un temps d'échange pour revenir sur votre expérience et répondre à vos questions.",
  },
];

export default function BaptemesPage() {
  return (
    <>
      {/* Hero de section avec photo */}
      <section className="relative h-[50vh] min-h-[360px]">
        <Image
          src="https://picsum.photos/seed/bapteme-hero/1600/900"
          alt="Baptême de plongée à El Kala"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B1F2E]/60" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-display text-[#2DD4BF] uppercase tracking-[0.3em] text-xs mb-3">
            Première plongée
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-[#EDE6D6]">
            Baptêmes de plongée
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-[#5C6B6D] leading-relaxed max-w-xl mx-auto mb-4">
          Vous n'avez jamais plongé ? Le baptême est l'occasion idéale de
          découvrir le monde sous-marin, encadré à tout moment par un
          moniteur diplômé. Aucune expérience ni certification n'est
          nécessaire.
        </p>
        <p className="text-[#5C6B6D] leading-relaxed max-w-xl mx-auto mb-10">
          Contactez-nous pour connaître les tarifs et créneaux disponibles.
        </p>
        <Link
          href="/contact"
          className="bg-[#E85D3D] text-[#0B1F2E] font-semibold px-6 py-3 hover:brightness-110 transition inline-block"
        >
          Réserver mon baptême
        </Link>
      </section>

      {/* Déroulé du baptême */}
      <section className="bg-[#0B1F2E] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-display text-[#2DD4BF] uppercase tracking-[0.3em] text-xs mb-3 text-center">
            Comment ça se passe
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-[#EDE6D6] mb-12 text-center">
            Le déroulé de votre baptême
          </h2>
          <div className="grid gap-px bg-[#EDE6D6]/10 sm:grid-cols-2">
            {etapes.map((etape) => (
              <div key={etape.numero} className="p-8">
                <p className="font-display text-3xl text-[#E85D3D] mb-2">
                  {etape.numero}
                </p>
                <h3 className="font-display font-bold text-[#EDE6D6] mb-2">
                  {etape.titre}
                </h3>
                <p className="text-[#8FA9AC] text-sm">{etape.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}