import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { WoodDivider } from "@/components/WoodDivider";
import { Mountains } from "@/components/Mountains";
import { WindowIcon, PlanksIcon, RollerIcon } from "@/components/icons";
import { CtaBand } from "@/components/sections";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronDown } from "lucide-react";
import { useLang, t } from "@/lib/i18n";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";

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
    img: g1,
    svcKey: "infissi",
    to: "/servizi" as const,
  },
  {
    icon: PlanksIcon,
    img: g2,
    svcKey: "perlinato",
    to: "/servizi" as const,
  },
  {
    icon: RollerIcon,
    img: g3,
    svcKey: "imbiancatura",
    to: "/servizi" as const,
  },
];

function ServiceCard({
  icon: Icon,
  svcKey,
  img,
  to,
  i,
  lang,
}: {
  icon: typeof WindowIcon;
  svcKey: string;
  img: string;
  to: "/servizi";
  i: number;
  lang: "it" | "fr";
}) {
  const { ref, revealed } = useScrollReveal<HTMLAnchorElement>({ staggerDelay: i * 100 });
  const title = t(lang, `servizi.${svcKey}.title`);
  const text: Record<string, Record<string, string>> = {
    it: {
      infissi:
        "Recupero, carteggiatura e verniciatura di finestre, porte e scuri: il legno originale torna a nuova vita.",
      perlinato:
        "Rivestimenti in abete, larice o cirmolo per pareti e soffitti, montati su misura con finiture naturali.",
      imbiancatura:
        "Tinteggiature interne ed esterne con pitture traspiranti, cantiere protetto e consegna pulita.",
    },
    fr: {
      infissi:
        "Récupération, calage et peinture de fenêtres, portes et volets: le bois d'origine retrouve une seconde vie.",
      perlinato:
        "Revêtements en pin, chêne ou frêne pour murs et plafonds, montés sur mesure avec finitions naturelles.",
      imbiancatura:
        "Peintures pour intérieurs et extérieurs avec des peintures respirables, chantier protégé et remise propre.",
    },
  };

  return (
    <Link
      ref={ref}
      to={to}
      className="group overflow-hidden rounded-sm border border-border bg-card shadow-warm transition-transform hover:-translate-y-1"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent" />
        <Icon className="absolute bottom-3 left-3 h-8 w-8 text-wood" />
      </div>
      <div className="p-6 pt-4 text-center">
        <h2 className="text-xl text-wood">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {text[lang][svcKey as keyof typeof text.it]}
        </p>
        <span className="script mt-4 inline-block text-lg text-wood-light">
          {t(lang, "home.about.knowMe")} →
        </span>
      </div>
    </Link>
  );
}

function AboutSection({ lang }: { lang: "it" | "fr" }) {
  const { ref, revealed } = useScrollReveal();
  return (
    <section
      ref={ref}
      className="mx-auto max-w-4xl px-5"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <h2 className="text-center text-3xl text-wood sm:text-4xl">{t(lang, "home.about.title")}</h2>
      <p className="mt-6 text-center leading-relaxed text-muted-foreground">
        {t(lang, "home.about.text")}
      </p>
      <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-3">
        <div className="rounded-sm border border-border bg-card p-5 text-center">
          <span className="text-3xl text-wood sm:text-4xl">2026</span>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-wood-light">
            {t(lang, "home.about.founded")}
          </p>
        </div>
        <div className="rounded-sm border border-border bg-card p-5 text-center">
          <span className="text-3xl text-wood sm:text-4xl">6+</span>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-wood-light">
            {t(lang, "home.about.experience")}
          </p>
        </div>
        <div className="rounded-sm border border-border bg-card p-5 text-center">
          <span className="text-3xl text-wood sm:text-4xl">100%</span>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-wood-light">
            {t(lang, "home.about.handmade")}
          </p>
        </div>
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm text-wood-light">{t(lang, "home.about.experienceText")}</p>
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/chi-sono"
          className="inline-block border-b-2 border-wood pb-1 text-sm uppercase tracking-[0.2em] text-wood"
        >
          {t(lang, "home.about.knowMe")}
        </Link>
      </div>
    </section>
  );
}

function Index() {
  const { lang } = useLang();
  return (
    <>
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-16 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/80 via-background to-background" />
        <div className="pointer-events-none absolute inset-0 paper-grain" />
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--wood) 12%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--wood) 10%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <Logo size="xl" />
        </div>
        <h1 className="relative z-10 mt-4 text-2xl text-wood sm:text-4xl">
          {t(lang, "home.hero.slogan")}
        </h1>
        <p className="relative z-10 mt-3 max-w-lg text-sm leading-relaxed text-wood-light sm:text-base">
          {t(lang, "home.hero.subtitle")}
        </p>
        <Link
          to="/contatti"
          className="relative z-10 mt-8 rounded-sm bg-wood px-9 py-3.5 text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-warm transition-colors hover:bg-wood-dark"
        >
          {t(lang, "home.hero.cta")}
        </Link>
        <Mountains className="absolute bottom-0 block h-24 w-full text-slate-mountain" />
      </section>

      <WoodDivider label={t(lang, "home.services")} />

      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {servizi.map((s, i) => (
            <ServiceCard key={s.svcKey} {...s} i={i} lang={lang} />
          ))}
        </div>
      </section>

      <WoodDivider label={t(lang, "home.about.chiSiamo")} />

      <AboutSection lang={lang} />

      <div className="py-20" />
      <CtaBand />
    </>
  );
}
