import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CtaBand } from "@/components/sections";
import { WoodDivider } from "@/components/WoodDivider";
import { WindowIcon, PlanksIcon, RollerIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLang, t } from "@/lib/i18n";
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

const svcKeys = ["infissi", "perlinato", "imbiancatura"];
const svcIcons = [WindowIcon, PlanksIcon, RollerIcon];
const svcImgs = [g1, g2, g3];

function ServizioArticle({
  s,
  i,
  lang,
}: {
  s: { title: string; intro: string; items: string[] };
  i: number;
  lang: "it" | "fr";
}) {
  const { ref, revealed } = useScrollReveal({ staggerDelay: i * 150 });
  return (
    <article
      ref={ref}
      className="grid items-center gap-10 lg:grid-cols-2"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
      }}
    >
      <img
        src={svcImgs[i]}
        alt={s.title}
        width={900}
        height={900}
        loading="lazy"
        className={`w-full rounded-sm border border-border object-cover shadow-warm-lg ${
          i % 2 === 1 ? "lg:order-2" : ""
        }`}
      />
      <div>
        {svcIcons[i] &&
          (() => {
            const Icon = svcIcons[i];
            return <Icon className="h-14 w-14 text-wood" />;
          })()}
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
  const { lang } = useLang();
  return (
    <>
      <PageHeader
        eyebrow={t(lang, "servizi.eyebrow")}
        title={t(lang, "servizi.title")}
        subtitle={t(lang, "servizi.subtitle")}
      />

      <div className="mx-auto max-w-6xl px-5">
        {svcKeys.map((key, i) => {
          const s = {
            title: t(lang, `servizi.${key}.title`),
            intro: t(lang, `servizi.${key}.intro`),
            items: translations[lang].servizi[key].items as string[],
          };
          return (
            <div key={key}>
              <WoodDivider />
              <ServizioArticle s={s} i={i} lang={lang} />
            </div>
          );
        })}
      </div>

      <div className="py-20" />
      <CtaBand />
    </>
  );
}

// Import translations type to access items array
import { translations } from "@/lib/i18n";
