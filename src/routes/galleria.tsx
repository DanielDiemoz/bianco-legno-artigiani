import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CtaBand } from "@/components/sections";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title: "Galleria Lavori — Bianco & Legno di Borrelli Matthias" },
      {
        name: "description",
        content:
          "Fotografie di infissi restaurati, pareti in perlinato e imbiancature realizzate in case e baite di montagna.",
      },
      { property: "og:title", content: "Galleria Lavori — Bianco & Legno" },
      {
        property: "og:description",
        content: "Prima e dopo dei nostri interventi di falegnameria e imbiancatura.",
      },
    ],
  }),
  component: Galleria,
});

const lavori = [
  { img: g4, title: "Scuri in larice", tag: "Prima", text: "Serramenti esterni sbiaditi dall'esposizione al sole e al gelo." },
  { img: g1, title: "Scuri in larice", tag: "Dopo", text: "Legno carteggiato, impregnato e rifinito a pennello." },
  { img: g2, title: "Mansarda in abete", tag: "Perlinato", text: "Rivestimento parete e soffitto con doghe spazzolate." },
  { img: g3, title: "Soggiorno in valle", tag: "Imbiancatura", text: "Rasatura e doppia mano di pittura traspirante." },
  { img: g5, title: "Il laboratorio", tag: "Dietro le quinte", text: "Gli attrezzi con cui nasce ogni lavorazione." },
  { img: g6, title: "Vano scala", tag: "Dopo", text: "Perlinato tinteggiato avorio e corrimano in legno oliato." },
];

function Galleria() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Galleria"
        subtitle="Alcuni lavori realizzati"
      />

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lavori.map((l, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-sm border border-border bg-card shadow-warm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={l.img}
                  alt={`${l.title} — ${l.text}`}
                  width={900}
                  height={900}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="script absolute left-0 top-4 bg-wood px-4 py-1 text-lg text-primary-foreground">
                  {l.tag}
                </span>
              </div>
              <figcaption className="p-5">
                <h2 className="text-lg text-wood">{l.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{l.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="py-20" />
      <CtaBand />
    </>
  );
}
