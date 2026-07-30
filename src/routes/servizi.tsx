import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CtaBand } from "@/components/sections";
import { WoodDivider } from "@/components/WoodDivider";
import { WindowIcon, PlanksIcon, RollerIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — Infissi, Perlinato e Imbiancatura | Bianco & Legno" },
      {
        name: "description",
        content:
          "Rinnovazione infissi in legno, pareti di perlinato su misura e imbiancatura interni ed esterni in zona alpina.",
      },
      { property: "og:title", content: "Servizi — Bianco & Legno" },
      {
        property: "og:description",
        content: "Tre specializzazioni artigianali: infissi, perlinato, imbiancatura.",
      },
    ],
  }),
  component: Servizi,
});

const servizi = [
  {
    icon: WindowIcon,
    img: g1,
    title: "Rinnovazione infissi in legno",
    intro:
      "Finestre, porte, scuri e portoncini recuperati anziché sostituiti: un intervento più sostenibile e spesso molto più conveniente della sostituzione integrale.",
    items: [
      "Sopralluogo e valutazione dello stato del legno",
      "Sverniciatura, carteggiatura e stuccatura delle fessurazioni",
      "Sostituzione di parti ammalorate e regolazione della ferramenta",
      "Impregnante protettivo e doppia mano di finitura",
      "Rifacimento sigillature e riposa in opera",
    ],
  },
  {
    icon: PlanksIcon,
    img: g2,
    title: "Pareti di perlinato",
    intro:
      "Rivestimenti in legno per pareti, soffitti e sottotetti, realizzati su misura in abete spazzolato, larice o cirmolo, con posa a incastro precisa e ordinata.",
    items: [
      "Consulenza su essenza, larghezza doghe e verso di posa",
      "Realizzazione dell'orditura e livellamento del supporto",
      "Posa maschio-femmina con giunzioni invisibili",
      "Coibentazione integrativa dove richiesta",
      "Finitura a cera, olio naturale o smalto opaco",
    ],
  },
  {
    icon: RollerIcon,
    img: g3,
    title: "Imbiancatura",
    intro:
      "Tinteggiature per interni ed esterni con prodotti traspiranti, adatti anche a murature vecchie e ambienti soggetti a umidità e sbalzi termici.",
    items: [
      "Protezione di pavimenti, mobili e serramenti",
      "Rasatura, stuccatura e trattamento antimuffa",
      "Pitture lavabili, a calce o silossaniche per esterni",
      "Velature e finiture decorative su richiesta",
      "Pulizia finale e riconsegna dell'ambiente",
    ],
  },
];

function ServizioArticle({ s, i }: { s: typeof servizi[number]; i: number }) {
  const { ref, revealed } = useScrollReveal({ staggerDelay: i * 150 });
  return (
    <article ref={ref} className="grid items-center gap-10 lg:grid-cols-2" style={{
      opacity: revealed ? 1 : 0,
      transform: revealed ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
    }}>
      <img
        src={s.img}
        alt={s.title}
        width={900}
        height={900}
        loading="lazy"
        className={`w-full rounded-sm border border-border object-cover shadow-warm-lg ${
          i % 2 === 1 ? "lg:order-2" : ""
        }`}
      />
      <div>
        <s.icon className="h-14 w-14 text-wood" />
        <h2 className="mt-4 text-3xl text-wood">{s.title}</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">{s.intro}</p>
        <ul className="mt-6 space-y-2.5">
          {s.items.map((it) => (
            <li key={it} className="flex gap-3 text-sm text-foreground/85">
              <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-wood-light" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Servizi() {
  return (
    <>
      <PageHeader
        eyebrow="Cosa faccio"
        title="I Miei Servizi"
        subtitle="Dal telaio alla mano di finitura"
      />

      <div className="mx-auto max-w-6xl px-5">
        {servizi.map((s, i) => (
          <div key={s.title}>
            <WoodDivider />
            <ServizioArticle s={s} i={i} />
          </div>
        ))}
      </div>

      <div className="py-20" />
      <CtaBand />
    </>
  );
}
