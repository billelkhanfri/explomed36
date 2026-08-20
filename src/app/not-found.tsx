import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="font-display text-6xl font-bold text-[#0B1F2E] mb-4">
        404
      </p>
      <h1 className="font-display text-2xl font-bold text-[#0B1F2E] mb-4">
        Profondeur introuvable
      </h1>
      <p className="text-[#5C6B6D] mb-10">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="bg-[#E85D3D] text-[#0B1F2E] font-semibold px-6 py-3 hover:brightness-110 transition inline-block"
      >
        Retour à la surface
      </Link>
    </section>
  );
}