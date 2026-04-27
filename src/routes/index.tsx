import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar, WhatsAppButton } from "@/components/site-chrome";
import pedroPhoto from "@/assets/pedro-carregosa.jpg";
import consultorioPhoto from "@/assets/consultorio.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const helps = [
  {
    title: "Ansiedade e desgaste mental",
    body: "A terapia pode ajudar a identificar gatilhos, organizar pensamentos e desenvolver estratégias para lidar melhor com o seu contexto, ou encontrando formas de alterá-lo.",
  },
  {
    title: "Dificuldade em lidar com emoções",
    body: "A partir do processo terapêutico, buscamos a regulação emocional. Aumentando a consciência sobre os próprios sentimentos e suas causas e ensinando estratégias para vivenciá-los e expressá-los de forma funcional.",
  },
  {
    title: "Conflitos nos relacionamentos",
    body: "O foco se volta para a melhora das habilidades de comunicação e resolução de problemas, o treino de assertividade para o estabelecimento de limites saudáveis e o desenvolvimento de empatia.",
  },
  {
    title: "Baixa autoestima e insegurança",
    body: "A psicoterapia pode ajudar na construção de uma autopercepção mais realista, entendendo os pensamentos autocríticos como eventos mentais passageiros, e não como verdades absolutas que definem a identidade.",
  },
  {
    title: "Solidão",
    body: "A intervenção foca no estabelecimento de ações compromissadas direcionadas à construção de relações que sejam coerentes com o que você valoriza. Ao mesmo tempo que buscamos o manejo do medo da rejeição e o sofrimento gerado pelo isolamento.",
  },
];

const steps = [
  {
    n: "01",
    title: "Entrevista Inicial",
    body: "Entramos em acordo sobre a frequência e duração das sessões, vou esclarecer as dúvidas que ainda não foram respondidas e faremos o levantamento do seu contexto e das suas demandas psicológicas.",
  },
  {
    n: "02",
    title: "Mapeamento",
    body: "Identificamos como os seus comportamentos e o seu ambiente interagem no estabelecimento das suas demandas, buscando também entender quais regras e valores te regem e o quanto essas ideias ajudam ou limitam a sua capacidade de mudar e tentar caminhos mais funcionais.",
  },
  {
    n: "03",
    title: "Estratégia",
    body: "Construímos ferramentas que façam sentido pra sua realidade para que você viva uma vida alinhada aos seus valores.",
  },
];

const faqs = [
  {
    q: "Qual a duração e frequência das sessões?",
    a: "O modelo mais comum é o de sessões semanais de 50 minutos, mas essa duração e frequência pode ser flexibilizada a depender das demandas do paciente.",
  },
  {
    q: "Qual o valor das sessões?",
    a: "O valor vai variar dependendo da duração e frequência das sessões. Como base, sessões semanais de 50min custam 100 reais cada.",
  },
  {
    q: "Aceita plano de saúde?",
    a: "No momento, não aceito planos de saúde.",
  },
  {
    q: "Como funciona uma consulta online?",
    a: "As sessões são realizadas através do Google Meet (que utiliza criptografia de ponta a ponta, garantindo o sigilo). No horário agendado, você acessa um link enviado por mim e iniciamos a sessão.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sage-deep mb-4">
      <span className="h-px w-8 bg-sage-deep/50" />
      <span className="text-xs uppercase tracking-[0.2em] font-medium">{children}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section
        id="top"
        className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover scale-110"
          style={{
            backgroundImage: `url(${consultorioPhoto})`,
            filter: "blur(3px)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-background/30"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, color-mix(in oklab, var(--sage) 35%, transparent), transparent 60%), radial-gradient(ellipse at bottom left, color-mix(in oklab, var(--accent) 30%, transparent), transparent 55%)",
          }}
        />
        <div className="container-prose relative z-10">
          <div className="max-w-3xl">
            <SectionLabel>Atendimento psicológico online</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Um espaço para{" "}
              <em className="text-sage-deep not-italic font-serif italic">
                compreender
              </em>{" "}
              o que você sente e construir uma vida com mais sentido.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Psicoterapia para adolescentes e adultos, fundamentada na Análise
              do Comportamento e nas Terapias Contextuais (ACT).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5575998645693"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sage-deep text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-sage-deep/90 transition-colors shadow-card"
              >
                Agendar uma conversa
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <button
                onClick={() =>
                  document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 text-foreground px-2 py-3.5 text-sm font-medium hover:text-sage-deep transition-colors"
              >
                Conhecer o trabalho
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section-pad bg-cream/40">
        <div className="container-prose">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in oklab, var(--sage) 60%, transparent), color-mix(in oklab, var(--accent) 50%, transparent))",
                  }}
                />
                <img
                  src={pedroPhoto}
                  alt="Pedro Carregosa, psicólogo clínico"
                  className="w-full rounded-xl shadow-soft object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-serif text-xl text-foreground">
                  Pedro Carregosa <span className="text-muted-foreground font-light">|</span>{" "}
                  <span className="text-sage-deep">Psicólogo Clínico</span>
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  CRP 03/35627
                </p>
              </div>
            </div>

            <div className="md:col-span-7 md:pt-6">
              <SectionLabel>Sobre Mim</SectionLabel>
              <h2 className="text-3xl md:text-5xl text-foreground leading-tight">
                Um resumo do meu modo de trabalho
              </h2>
              <p className="mt-8 text-base md:text-lg text-foreground/80 leading-relaxed">
                Minha atuação se baseia na <strong className="text-sage-deep font-medium">Análise do Comportamento</strong> e nas{" "}
                <strong className="text-sage-deep font-medium">Terapias Contextuais (ACT)</strong>. Atendo adolescentes e adultos que apresentam dificuldades nas relações pessoais, ansiedade, sobrecarga emocional, angústia, ou que sentem dificuldade para lidar com os próprios sentimentos.
              </p>
              <p className="mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
                Meu trabalho é ajudar você a compreender seus pensamentos, emoções e comportamentos, desenvolvendo formas mais flexíveis de lidar com o seu contexto e construindo uma vida mais alinhada aos seus valores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AJUDA */}
      <section id="ajuda" className="section-pad">
        <div className="container-prose">
          <div className="max-w-2xl mb-14">
            <SectionLabel>Possibilidades</SectionLabel>
            <h2 className="text-3xl md:text-5xl text-foreground leading-tight">
              No que a terapia pode ajudar?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {helps.map((h, i) => (
              <article
                key={h.title}
                className={`group bg-card border border-border rounded-2xl p-7 md:p-8 transition-all hover:shadow-card hover:-translate-y-0.5 hover:border-sage ${
                  i === 4 ? "md:col-span-2 md:max-w-[calc(50%-0.625rem)] md:mx-auto md:w-full" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-serif text-2xl text-sage-deep/60 leading-none mt-1">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl text-foreground mb-3">{h.title}</h3>
                    <p className="text-foreground/75 leading-relaxed text-[15px]">{h.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="funciona" className="section-pad bg-cream/40">
        <div className="container-prose">
          <div className="max-w-2xl mb-14">
            <SectionLabel>O Processo</SectionLabel>
            <h2 className="text-3xl md:text-5xl text-foreground leading-tight">
              Como funciona a terapia?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="font-serif text-6xl md:text-7xl text-sage-deep/25 leading-none mb-4">
                  {s.n}
                </div>
                <h3 className="text-2xl text-foreground mb-3">{s.title}</h3>
                <p className="text-foreground/75 leading-relaxed text-[15px]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-pad">
        <div className="container-prose">
          <div className="max-w-2xl mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl md:text-5xl text-foreground leading-tight">
              Outras perguntas frequentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="section-pad relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--sage) 25%, var(--background)), color-mix(in oklab, var(--sage-deep) 90%, transparent))",
        }}
      >
        <div className="container-prose relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center gap-3 text-black/70 mb-4 justify-center">
              <span className="h-px w-8 bg-black/40" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium">Contato</span>
              <span className="h-px w-8 bg-black/40" />
            </div>
            <h2 className="text-3xl md:text-5xl text-black leading-tight">
              Vamos conversar?
            </h2>
            <p className="mt-5 text-black/80 text-lg">
              Se algo aqui ressoou com você, entre em contato. Será um prazer te receber.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <ContactCard
              href="https://instagram.com/psicarregosa"
              label="Instagram"
              value="@psicarregosa"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              }
            />
            <ContactCard
              href="mailto:psicarregosa@gmail.com"
              label="Email"
              value="psicarregosa@gmail.com"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              }
            />
            <ContactCard
              href="https://wa.me/5575998645693"
              label="WhatsApp"
              value="(75) 99864-5693"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 1.704.736 2.434.799 3.31.671.534-.078 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                </svg>
              }
            />
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-black/15 relative">
          <div className="container-prose flex flex-col md:flex-row items-center justify-between gap-4 text-black/70 text-xs">
            <span>© {new Date().getFullYear()} Pedro Carregosa — CRP 03/35627</span>
            <span>Atendimento psicológico online</span>
          </div>
        </footer>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="font-serif text-lg md:text-xl text-foreground group-hover:text-sage-deep transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-sage-deep transition-transform ${
            open ? "rotate-45 bg-sage/20" : ""
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-foreground/75 leading-relaxed text-[15px] pr-14">{a}</p>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center text-center gap-2 bg-background/10 backdrop-blur-sm border border-black/15 rounded-2xl p-6 hover:bg-background/20 transition-all hover:-translate-y-0.5"
    >
      <span className="w-11 h-11 rounded-full bg-black/10 flex items-center justify-center text-black mb-2">
        {icon}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] text-black/70">
        {label}
      </span>
      <span className="font-serif text-lg text-black">{value}</span>
    </a>
  );
}
