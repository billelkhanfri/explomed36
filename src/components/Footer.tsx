export default function Footer() {
  return (
    <footer className="bg-[#0B1F2E] text-[#EDE6D6] border-t border-[#1B7A72]/30">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display font-bold mb-2">
            Explomed<span className="text-[#E85D3D]">36</span>
          </h3>
          <p className="text-sm text-[#8FA9AC]">
            Baptêmes, formations et plongée scientifique à El Kala.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm uppercase tracking-wide mb-3 text-[#2DD4BF]">
            Contact
          </h3>
          <p className="text-sm text-[#8FA9AC]">   <a   href="mailto:explomed36@gmail.com"
            className="font-medium hover:text-[#E85D3D] transition"
          >
            
            explomed36@gmail.com
          </a></p>
          
          <p className="text-sm text-[#8FA9AC]">  <a href="tel:+213661295407"
            className="font-medium hover:text-[#E85D3D] transition"
          >
            +213 6 61 29 54 07
          </a></p>
        </div>
        <div>
          <h3 className="font-display text-sm uppercase tracking-wide mb-3 text-[#2DD4BF]">
            Adresse
          </h3>
          <p className="text-sm text-[#8FA9AC]">El Kala, Algérie</p>
        </div>
      </div>
      <div className="text-center text-xs text-[#8FA9AC] py-4 border-t border-[#1B7A72]/20">
        © {new Date().getFullYear()} Explomed36. Tous droits réservés.
      </div>
    </footer>
  );
}