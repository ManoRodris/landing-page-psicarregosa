import { useEffect, useState } from "react";

const PsiLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <text
      x="50%"
      y="56%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Cormorant Garamond, serif"
      fontSize="24"
      fontWeight="500"
      fill="currentColor"
    >
      ψ
    </text>
  </svg>
);

const sections = [
  { id: "sobre", label: "Sobre Mim" },
  { id: "ajuda", label: "No que a terapia pode ajudar?" },
  { id: "funciona", label: "Como funciona a terapia?" },
  { id: "faq", label: "Perguntas Frequentes" },
  { id: "contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-prose flex items-center justify-between gap-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <PsiLogo className="w-10 h-10 text-sage-deep transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-serif text-base md:text-lg text-foreground">
              Pedro Carregosa <span className="text-muted-foreground font-light">|</span>{" "}
              <span className="text-sage-deep">Psicólogo Clínico</span>
            </div>
            <div className="text-[11px] md:text-xs tracking-wider uppercase text-muted-foreground">
              CRP 03/35627
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className="text-sm text-foreground/75 hover:text-sage-deep transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-sage-deep after:transition-all hover:after:w-full"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" strokeLinecap="round" />
                <path d="M3 17h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/60 mt-3">
          <nav className="container-prose py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className="text-left text-sm text-foreground/80 hover:text-sage-deep py-2"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5575998645693"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-white pl-3 pr-5 py-3 rounded-full shadow-soft hover:scale-105 transition-transform group"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </span>
      <span className="font-medium text-sm">WhatsApp</span>
    </a>
  );
}
