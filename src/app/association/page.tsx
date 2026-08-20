import Image from "next/image";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "L'association",
  description:
    "Découvrez Explomed36, association de plongée basée à El Kala, dédiée à l'exploration et la préservation du milieu marin.",
};

export default function AssociationPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-4">
        <PageIntro eyebrow="Depuis El Kala" title="Notre association" />
      </section>

      {/* Split texte / photo */}
      <section className="max-w-5xl mx-auto px-6 py-8 grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-5 text-[#5C6B6D] leading-relaxed">
          <p>
            Basée à El Kala, Explomed36 réunit des passionnés de plongée
            sous-marine autour d'un même objectif : faire découvrir et
            protéger les fonds marins de la région.
          </p>
          <p>
            Nous accueillons aussi bien les débutants curieux que les
            plongeurs confirmés souhaitant se former à la plongée
            scientifique.
          </p>
          <p>
            Les revenus générés par les baptêmes et les formations financent
            nos actions de sensibilisation à la préservation du milieu marin,
            ainsi que notre matériel et l'encadrement des sorties.
          </p>
        </div>
        <div className="relative aspect-[4/5]">
          <Image
            src="https://picsum.photos/seed/explomed-assoc/600/750"
            alt="Membres de l'association Explomed36 en sortie"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-[#0B1F2E] py-16 px-6 mt-16">
        <div className="max-w-5xl mx-auto grid gap-px bg-[#EDE6D6]/10 sm:grid-cols-3">
          <div className="p-8 text-center">
            <p className="font-display text-4xl font-bold text-[#E85D3D] mb-1">
              4
            </p>
            <p className="text-[#8FA9AC] text-sm uppercase tracking-wide">
              Niveaux de formation
            </p>
          </div>
          <div className="p-8 text-center">
            <p className="font-display text-4xl font-bold text-[#E85D3D] mb-1">
              100%
            </p>
            <p className="text-[#8FA9AC] text-sm uppercase tracking-wide">
              Moniteurs qualifiés
            </p>
          </div>
          <div className="p-8 text-center">
            <p className="font-display text-4xl font-bold text-[#E85D3D] mb-1">
              1
            </p>
            <p className="text-[#8FA9AC] text-sm uppercase tracking-wide">
              Côte préservée
            </p>
          </div>
        </div>
      </section>

      {/* Photos vie du club */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="font-display text-[#1B7A72] uppercase tracking-[0.3em] text-xs mb-8">
          La vie du club
        </p>
        <div className="grid grid-cols-3 gap-2">
          <div className="relative aspect-square">
            <Image
              src="https://picsum.photos/seed/assoc-1/400/400"
              alt="Sortie plongée du club"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://picsum.photos/seed/assoc-2/400/400"
              alt="Formation encadrée par un moniteur"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://picsum.photos/seed/assoc-3/400/400"
              alt="Équipe Explomed36"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}