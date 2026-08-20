import PageIntro from "@/components/PageIntro";
export const metadata = {
  title: "Contact",
  description: "Contactez Explomed36 par téléphone ou email à El Kala.",
};
export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 text-center">
      <div className="flex flex-col items-center">
        <PageIntro eyebrow="Nous écrire" title="Contactez-nous" />
      </div>

      <div className="grid gap-px bg-[#0B1F2E]/10 sm:grid-cols-2">
        <div className="bg-white p-8">
          <h2 className="font-display text-sm uppercase tracking-wide text-[#1B7A72] mb-2">
            Téléphone
          </h2>
          
         <a   href="tel:+213661295407"
            className="text-[#0B1F2E] font-medium hover:text-[#E85D3D] transition"
          >
            +213 6 61 29 54 07
          </a>
        </div>
        <div className="bg-white p-8">
          <h2 className="font-display text-sm uppercase tracking-wide text-[#1B7A72] mb-2">
            Email
          </h2>
          
         <a   href="mailto:explomed36@gmail.com"
            className="text-[#0B1F2E] font-medium hover:text-[#E85D3D] transition"
          >
            
            explomed36@gmail.com
          </a>
        </div>
      </div>

      <p className="text-sm text-[#8FA9AC] mt-10">El Kala, Algérie</p>
    </section>
  );
}