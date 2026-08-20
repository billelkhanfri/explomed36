import Image from "next/image";
import PageIntro from "@/components/PageIntro";
export const metadata = {
  title: "Galerie",
  description: "Photos des sorties, formations et baptêmes de plongée à El Kala.",
};

const photos = [
  { id: 1, alt: "Plongeurs explorant les fonds marins d'El Kala" },
  { id: 2, alt: "Baptême de plongée encadré par un moniteur" },
  { id: 3, alt: "Formation de plongée scientifique en mer" },
  { id: 4, alt: "Faune marine observée lors d'une sortie" },
  { id: 5, alt: "Groupe de plongeurs de l'association" },
  { id: 6, alt: "Équipement de plongée scientifique" },
];

export default function GaleriePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <PageIntro
        eyebrow="En images"
        title="Galerie"
        description="Sorties, formations et baptêmes de plongée à El Kala."
      />
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((photo) => (
          <div key={photo.id} className="relative aspect-square">
            <Image
              src={`https://picsum.photos/seed/${photo.id}/600/600`}
              alt={photo.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}