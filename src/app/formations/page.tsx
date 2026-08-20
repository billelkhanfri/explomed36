import PageIntro from "@/components/PageIntro";
export const metadata = {
  title: "Formations de plongée",
  description:
    "Formations niveaux 1, 2, 3 et plongée scientifique à El Kala, encadrées par des moniteurs qualifiés.",
};
const formations = [
  {
    titre: "Niveau 1",
    description:
      "La formation d'initiation. Apprenez les bases de la plongée en autonomie encadrée, jusqu'à 20 mètres de profondeur.",
  },
  {
    titre: "Niveau 2",
    description:
      "Pour les plongeurs déjà certifiés Niveau 1, gagnez en autonomie et en profondeur, avec une première approche de l'encadrement.",
  },
  {
    titre: "Niveau 3",
    description:
      "Le niveau autonome par excellence, pour plonger sans encadrement direct jusqu'à 60 mètres, en toute sécurité.",
  },
  {
    titre: "Plongée scientifique",
    description:
      "Une formation spécialisée pour apprendre les techniques d'observation, de relevé et de protocole utilisées en recherche marine.",
  },
];
export default function FormationsPage() {
  return (
      <section className="max-w-5xl mx-auto px-6 py-20">
      <PageIntro
        eyebrow="Parcours certifiants"
        title="Nos formations"
        description="Du premier niveau à la plongée scientifique, encadrées par des moniteurs qualifiés."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {formations.map((f) => (
          <div
            key={f.titre}
            className="border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">
              {f.titre}
            </h2>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}