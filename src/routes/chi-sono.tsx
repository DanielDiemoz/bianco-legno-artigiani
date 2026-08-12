import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { PageHeader, CtaBand } from "@/components/sections";
import { WoodDivider } from "@/components/WoodDivider";
import { HandIcon, ClockIcon, BrushIcon, MountainIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLang, t } from "@/lib/i18n";

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

function ValoreCard({
  icon: Icon,
  title,
  text,
  i,
}: {
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
  const { lang } = useLang();

  const valori = [
    {
      icon: HandIcon,
      title: t(lang, "chiSono.valori.artigianalita.title"),
      text: t(lang, "chiSono.valori.artigianalita.text"),
    },
    {
      icon: ClockIcon,
      title: t(lang, "chiSono.valori.esperienza.title"),
      text: t(lang, "chiSono.valori.esperienza.text"),
    },
    {
      icon: BrushIcon,
      title: t(lang, "chiSono.valori.curaDettaglio.title"),
      text: t(lang, "chiSono.valori.curaDettaglio.text"),
    },
    {
      icon: MountainIcon,
      title: t(lang, "chiSono.valori.montagna.title"),
      text: t(lang, "chiSono.valori.montagna.text"),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t(lang, "chiSono.eyebrow")}
        title={t(lang, "chiSono.title")}
        subtitle={t(lang, "chiSono.subtitle")}
      />

      <section
        ref={aboutRef}
        className="mx-auto mt-16 grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2"
        style={{
          opacity: aboutRevealed ? 1 : 0,
          transform: aboutRevealed ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
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
          <p className="script mt-2 text-xl text-wood-light">{t(lang, "chiSono.role")}</p>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>{t(lang, "chiSono.story.p1")}</p>
            <p>{t(lang, "chiSono.story.p2")}</p>
            <p>{t(lang, "chiSono.story.p3")}</p>
            <p className="script text-xl text-wood-light">"{t(lang, "chiSono.story.quote")}"</p>
          </div>
        </div>
      </section>

      <WoodDivider label={t(lang, "chiSono.values")} />

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
