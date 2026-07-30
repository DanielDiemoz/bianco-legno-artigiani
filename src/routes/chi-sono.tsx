import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { PageHeader, CtaBand } from "@/components/sections";
import { WoodDivider } from "@/components/WoodDivider";
import { HandIcon, ClockIcon, BrushIcon, MountainIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/chi-sono")({
  head: () => ({
    meta: [
      { title: "Chi Sono — Bianco & Legno di Borrelli Matthias" },
      {
        name: "description",
        content:
          "Matthias Borrelli, artigiano falegname e imbianchino di montagna: esperienza, cura del dettaglio e materiali naturali.",
      },
      { property: "og:title", content: "Chi Sono — Bianco & Legno" },
      {
        property: "og:description",
        content: "La storia e i valori di un laboratorio artigianale di montagna.",
      },
    ],
  }),
  component: ChiSono,
});

const valori = [
  {
    icon: HandIcon,
    title: "Artigianalità",
    text: "Eseguo ogni intervento a mano, senza standardizzazioni: il pezzo si adatta alla casa, non il contrario.",
  },
  {
    icon: ClockIcon,
    title: "Esperienza",
    text: "Ho oltre quindici anni di esperienza tra cantieri alpini, restauri di baite e ristrutturazioni di abitazioni private.",
  },
  {
    icon: BrushIcon,
    title: "Cura del dettaglio",
    text: "Curo giunzioni pulite, bordi netti, superfici uniformi. La differenza si vede da vicino.",
  },
  {
    icon: MountainIcon,
    title: "Ambiente di montagna",
    text: "Scelgo legni locali e prodotti a bassa emissione, per resistere a gelo, umidità e forti escursioni termiche.",
  },
];

function ValoreCard({ icon: Icon, title, text, i }: {
  icon: typeof HandIcon;
  title: string;
  text: string;
  i: number;
}) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>({ staggerDelay: i * 100 });
  return (
    <div
      ref={ref}
      className="flex gap-5 rounded-sm border border-border bg-card p-7 shadow-warm"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <Icon className="h-12 w-12 shrink-0 text-wood" />
      <div>
        <h3 className="text-xl text-wood">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function ChiSono() {
  const { ref: aboutRef, revealed: aboutRevealed } = useScrollReveal();

  return (
    <>
      <PageHeader
        eyebrow="La mia storia"
        title="Chi Sono"
        subtitle="Il legno racconta chi lo lavora"
      />

      <section ref={aboutRef} className="mx-auto mt-16 grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2" style={{
        opacity: aboutRevealed ? 1 : 0,
        transform: aboutRevealed ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}>
        <img
          src={aboutImg}
          alt="Matthias Borrelli al lavoro su un telaio di finestra in legno nel suo laboratorio"
          width={1200}
          height={912}
          loading="lazy"
          className="w-full rounded-sm border border-border object-cover shadow-warm-lg"
        />
        <div>
          <h2 className="text-3xl text-wood sm:text-4xl">Matthias Borrelli</h2>
          <p className="script mt-2 text-xl text-wood-light">Falegname e imbianchino</p>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Sono cresciuto tra i boschi e le case in legno della valle, ho imparato il
              mestiere in bottega, affiancando falegnami di vecchia scuola. Nel 2009 ho aperto
              la mia attività, unendo due competenze che raramente viaggiano insieme:
              la lavorazione del legno e la tinteggiatura.
            </p>
            <p>
              Questo mi permette di seguire il cantiere dall'inizio alla fine — dalla revisione
              di un infisso alla mano di finitura sulla parete — con un solo referente,
              tempi certi e nessun rimpallo di responsabilità.
            </p>
            <p>
              Oggi lavoro con Bianco &amp; Legno per famiglie, seconde case, rifugi e piccole
              strutture ricettive, con lo stesso principio di sempre: fare bene, una cosa
              alla volta.
            </p>
          </div>
        </div>
      </section>

      <WoodDivider label="I miei valori" />

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 sm:grid-cols-2">
          {valori.map((v, i) => (
            <ValoreCard key={v.title} {...v} i={i} />
          ))}
        </div>
      </section>

      <div className="py-16" />
      <CtaBand />
    </>
  );
}
