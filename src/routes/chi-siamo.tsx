import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { PageHeader, CtaBand } from "@/components/sections";
import { WoodDivider } from "@/components/WoodDivider";
import { HandIcon, ClockIcon, BrushIcon, MountainIcon } from "@/components/icons";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: "Chi Siamo — Bianco & Legno di Borrelli Matthias" },
      {
        name: "description",
        content:
          "Matthias Borrelli, artigiano falegname e imbianchino di montagna: esperienza, cura del dettaglio e materiali naturali.",
      },
      { property: "og:title", content: "Chi Siamo — Bianco & Legno" },
      {
        property: "og:description",
        content: "La storia e i valori di un laboratorio artigianale di montagna.",
      },
    ],
  }),
  component: ChiSiamo,
});

const valori = [
  {
    icon: HandIcon,
    title: "Artigianalità",
    text: "Ogni intervento è eseguito a mano, senza standardizzazioni: il pezzo si adatta alla casa, non il contrario.",
  },
  {
    icon: ClockIcon,
    title: "Esperienza",
    text: "Oltre quindici anni tra cantieri alpini, restauri di baite e ristrutturazioni di abitazioni private.",
  },
  {
    icon: BrushIcon,
    title: "Cura del dettaglio",
    text: "Giunzioni pulite, bordi netti, superfici uniformi. La differenza si vede da vicino.",
  },
  {
    icon: MountainIcon,
    title: "Ambiente di montagna",
    text: "Legni locali e prodotti a bassa emissione, scelti per resistere a gelo, umidità e forti escursioni termiche.",
  },
];

function ChiSiamo() {
  return (
    <>
      <PageHeader
        eyebrow="La nostra storia"
        title="Chi Siamo"
        subtitle="Il legno racconta chi lo lavora"
      />

      <section className="mx-auto mt-16 grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
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
              Cresciuto tra i boschi e le case in legno della valle, Matthias ha imparato il
              mestiere in bottega, affiancando falegnami di vecchia scuola. Nel 2009 ha aperto
              la propria attività, unendo due competenze che raramente viaggiano insieme:
              la lavorazione del legno e la tinteggiatura.
            </p>
            <p>
              Questo permette di seguire il cantiere dall'inizio alla fine — dalla revisione
              di un infisso alla mano di finitura sulla parete — con un solo referente,
              tempi certi e nessun rimpallo di responsabilità.
            </p>
            <p>
              Oggi Bianco &amp; Legno lavora per famiglie, seconde case, rifugi e piccole
              strutture ricettive, con lo stesso principio di sempre: fare bene, una cosa
              alla volta.
            </p>
          </div>
        </div>
      </section>

      <WoodDivider label="I nostri valori" />

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 sm:grid-cols-2">
          {valori.map((v) => (
            <div
              key={v.title}
              className="flex gap-5 rounded-sm border border-border bg-card p-7 shadow-warm"
            >
              <v.icon className="h-12 w-12 shrink-0 text-wood" />
              <div>
                <h3 className="text-xl text-wood">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="py-16" />
      <CtaBand />
    </>
  );
}
