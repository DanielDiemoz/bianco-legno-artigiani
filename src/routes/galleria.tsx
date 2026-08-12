import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { PageHeader, CtaBand } from "@/components/sections";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
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

const serviceLinks: Record<string, string> = {
  Prima: "/servizi",
  Dopo: "/servizi",
  Perlinato: "/servizi",
  Imbiancatura: "/servizi",
  "Dietro le quinte": "/servizi",
};

const lavori = [
  {
    img: g4,
    title: "Scuri in larice",
    tag: "Prima",
    text: "Serramenti esterni sbiaditi dall'esposizione al sole e al gelo.",
  },
  {
    img: g1,
    title: "Scuri in larice",
    tag: "Dopo",
    text: "Legno carteggiato, impregnato e rifinito a pennello.",
  },
  {
    img: g2,
    title: "Mansarda in abete",
    tag: "Perlinato",
    text: "Rivestimento parete e soffitto con doghe spazzolate.",
  },
  {
    img: g3,
    title: "Soggiorno in valle",
    tag: "Imbiancatura",
    text: "Rasatura e doppia mano di pittura traspirante.",
  },
  {
    img: g5,
    title: "Il laboratorio",
    tag: "Dietro le quinte",
    text: "Gli attrezzi con cui nasce ogni lavorazione.",
  },
  {
    img: g6,
    title: "Vano scala",
    tag: "Dopo",
    text: "Perlinato tinteggiato avorio e corrimano in legno oliato.",
  },
];

function GalleriaItem({
  l,
  i,
  onSelect,
}: {
  l: (typeof lavori)[number];
  i: number;
  onSelect: () => void;
}) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>({
    staggerDelay: i * 80,
  });

  const serviceTo = serviceLinks[l.tag];

  return (
    <figure
      ref={ref}
      className="group cursor-pointer overflow-hidden rounded-sm border border-border bg-card shadow-warm transition-all duration-500 hover:shadow-warm-lg"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div className="relative overflow-hidden" onClick={onSelect}>
        <img
          src={l.img}
          alt={`${l.title} — ${l.text}`}
          width={900}
          height={675}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="script absolute left-0 top-4 bg-wood px-4 py-1 text-lg text-primary-foreground">
          {l.tag}
        </span>
      </div>
      <figcaption className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-lg text-wood">{l.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{l.text}</p>
          </div>
          {serviceTo ? (
            <Link
              to={serviceTo as "/servizi"}
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 rounded-sm border border-border p-1.5 text-wood-light transition-colors hover:bg-wood hover:text-primary-foreground"
              aria-label="Vedi il servizio"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}

function Galleria() {
  const [selected, setSelected] = useState<number | null>(null);
  const { lang } = useLang();

  function prev() {
    setSelected((s) => (s !== null ? (s - 1 + lavori.length) % lavori.length : null));
  }

  function next() {
    setSelected((s) => (s !== null ? (s + 1) % lavori.length : null));
  }

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={t(lang, "contatti.nav.galleria")}
        subtitle="Alcuni lavori realizzati"
      />

      <section className="mx-auto mt-16 max-w-6xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lavori.map((l, i) => (
            <GalleriaItem key={i} l={l} i={i} onSelect={() => setSelected(i)} />
          ))}
        </div>
      </section>

      <Dialog open={selected !== null} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none sm:rounded-none">
          {selected !== null && (
            <div className="relative flex items-center justify-center">
              <img
                src={lavori[selected].img}
                alt={lavori[selected].title}
                className="max-h-[85vh] w-auto rounded-sm object-contain shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
                <p className="script text-xl text-white">{lavori[selected].title}</p>
                <p className="mt-1 text-sm text-white/80">{lavori[selected].text}</p>
              </div>

              <button
                onClick={prev}
                className="absolute left-2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
                aria-label="Immagine precedente"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
                aria-label="Immagine successiva"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <DialogClose className="absolute right-2 top-2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60">
                <X className="h-5 w-5" />
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="py-20" />
      <CtaBand />
    </>
  );
}
