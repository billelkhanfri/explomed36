type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="mb-12">
      <p className="font-display text-[#1B7A72] uppercase tracking-[0.3em] text-xs mb-3">
        {eyebrow}
      </p>
      <h1 className="font-display text-3xl md:text-5xl font-bold text-[#0B1F2E] mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-[#5C6B6D] max-w-2xl">{description}</p>
      )}

      {/* Ligne bathymétrique signature, discrète */}
      <svg
        className="mt-8 w-full max-w-xs h-4"
        viewBox="0 0 300 30"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,15 C50,25 100,5 150,15 C200,25 250,5 300,15"
          stroke="#2DD4BF"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}