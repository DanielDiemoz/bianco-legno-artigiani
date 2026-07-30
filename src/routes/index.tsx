import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Logo } from "@/components/Logo";
import { WoodDivider } from "@/components/WoodDivider";
import { Mountains } from "@/components/Mountains";
import { WindowIcon, PlanksIcon, RollerIcon } from "@/components/icons";
import { CtaBand } from "@/components/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bianco & Legno di Borrelli Matthias — Falegnameria e Imbiancatura" },
      {
        name: "description",
        content:
          "Artigiano di montagna specializzato in rinnovazione infissi in legno, pareti di perlinato e imbiancature. Massima serietà e affidabilità.",
      },
      {
        property: "og:title",
        content: "Bianco & Legno di Borrelli Matthias — Falegnameria e Imbiancatura",
      },
      {
        property: "og:description",
        content:
          "Infissi in legno, perlinato e tinteggiature curate nel dettaglio. Preventivo gratuito.",
      },
    ],
  }),
  component: Index,
});

const servizi = [
  {
    icon: WindowIcon,
    title: "Rinnovazione infissi in legno",
    text: "Recupero, carteggiatura e verniciatura di finestre, porte e scuri: il legno originale torna a nuova vita.",
    to: "/servizi" as const,
  },
  {
    icon: PlanksIcon,
    title: "Pareti di perlinato",
    text: "Rivestimenti in abete, larice o cirmolo per pareti e soffitti, montati su misura con finiture naturali.",
    to: "/servizi" as const,
  },
  {
    icon: RollerIcon,
    title: "Imbiancatura",
    text: "Tinteggiature interne ed esterne con pitture traspiranti, cantiere protetto e consegna pulita.",
    to: "/servizi" as const,
  },
];

function Index() {
  return (
    <>
      <section className="relative">
        <img
          src={heroImg}
          alt="Banco da lavoro in legno con vista sulle montagne innevate"
          width={1920}
          height={1088}
          className="h-[75vh] min-h-[520px] w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--cream) 78%, transparent), color-mix(in oklab, var(--cream) 55%, transparent) 45%, color-mix(in oklab, var(--cream) 92%, transparent))",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <Logo size="lg" />
          <p className="script mt-1 text-3xl text-wood sm:text-5xl">
            Massima serietà e affidabilità
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-wood-light sm:text-base">
            Falegnameria e imbiancatura artigianale, dal 2009 al servizio di case,
            baite e attività di montagna.
          </p>
          <Link
            to="/contatti"
            className="mt-8 rounded-sm bg-wood px-9 py-3.5 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-warm transition-colors hover:bg-wood-dark"
          >
            Richiedi un preventivo
          </Link>
        </div>
        <Mountains className="absolute bottom-0 block h-20 w-full text-slate-mountain" />
      </section>

      <WoodDivider label="I nostri servizi" />

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {servizi.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group rounded-sm border border-border bg-card p-8 text-center shadow-warm transition-transform hover:-translate-y-1"
            >
              <s.icon className="mx-auto h-14 w-14 text-wood transition-colors group-hover:text-wood-light" />
              <h2 className="mt-5 text-xl text-wood">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="script mt-5 inline-block text-lg text-wood-light">
                Scopri di più →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <WoodDivider label="Chi siamo" />

      <section className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl text-wood sm:text-4xl">L'artigiano e il suo mestiere</h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Bianco &amp; Legno nasce dalla passione di Matthias Borrelli per il legno e
          per le case di montagna. Ogni lavoro parte da un sopralluogo attento, prosegue
          con materiali scelti uno a uno e si conclude con una finitura fatta a mano.
          Nessuna fretta, nessuna scorciatoia: solo il tempo giusto perché il risultato duri.
        </p>
        <Link
          to="/chi-siamo"
          className="mt-8 inline-block border-b-2 border-wood pb-1 text-sm uppercase tracking-[0.2em] text-wood"
        >
          Conosci Matthias
        </Link>
      </section>

      <div className="py-16" />
      <CtaBand />
    </>
  );
}
