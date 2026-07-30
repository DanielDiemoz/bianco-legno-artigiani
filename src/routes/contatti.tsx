import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageHeader } from "@/components/sections";
import { WoodDivider } from "@/components/WoodDivider";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti e Preventivi — Bianco & Legno di Borrelli Matthias" },
      {
        name: "description",
        content:
          "Richiedi un preventivo gratuito: telefono +39 123 456 7890, info@biancoelegno.it, Instagram @biancoelegno.borrelli.",
      },
      { property: "og:title", content: "Contatti — Bianco & Legno" },
      {
        property: "og:description",
        content: "Sopralluogo e preventivo gratuiti per falegnameria e imbiancatura.",
      },
    ],
  }),
  component: Contatti,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Inserisci il tuo nome").max(100, "Nome troppo lungo"),
  email: z.string().trim().email("Indirizzo email non valido").max(255),
  telefono: z
    .string()
    .trim()
    .max(30, "Numero troppo lungo")
    .regex(/^[0-9+()\s.-]*$/, "Numero di telefono non valido")
    .optional()
    .or(z.literal("")),
  messaggio: z
    .string()
    .trim()
    .min(10, "Descrivi brevemente il lavoro (min. 10 caratteri)")
    .max(1000, "Messaggio troppo lungo"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-wood";

function Contatti() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHeader
        eyebrow="Parliamone"
        title="Contatti"
        subtitle="Massima serietà e affidabilità"
      />

      <section className="mx-auto mt-16 grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-sm border border-border bg-card p-8 shadow-warm sm:p-10">
          <h2 className="text-2xl text-wood">Richiedi un preventivo</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Raccontaci il lavoro: rispondiamo entro 24 ore lavorative.
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
            <div>
              <label htmlFor="nome" className="text-xs uppercase tracking-[0.2em] text-wood">
                Nome e cognome *
              </label>
              <input id="nome" name="nome" maxLength={100} className={fieldClass} />
              {errors.nome ? (
                <p className="mt-1 text-xs text-destructive">{errors.nome}</p>
              ) : null}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-wood">
                  Email *
                </label>
                <input id="email" name="email" type="email" maxLength={255} className={fieldClass} />
                {errors.email ? (
                  <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="telefono" className="text-xs uppercase tracking-[0.2em] text-wood">
                  Telefono
                </label>
                <input id="telefono" name="telefono" type="tel" maxLength={30} className={fieldClass} />
                {errors.telefono ? (
                  <p className="mt-1 text-xs text-destructive">{errors.telefono}</p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="messaggio" className="text-xs uppercase tracking-[0.2em] text-wood">
                Messaggio *
              </label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows={6}
                maxLength={1000}
                className={fieldClass}
              />
              {errors.messaggio ? (
                <p className="mt-1 text-xs text-destructive">{errors.messaggio}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-wood px-8 py-3.5 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-wood-dark sm:w-auto"
            >
              Invia richiesta
            </button>

            {sent ? (
              <p className="script text-xl text-wood-light" role="status">
                Grazie! La tua richiesta è stata registrata, ti ricontattiamo presto.
              </p>
            ) : null}
          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-sm border border-border bg-secondary/50 p-8">
            <h2 className="text-2xl text-wood">Dove trovarci</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-wood-light">
                  Telefono
                </span>
                <a href="tel:+391234567890" className="text-lg text-wood hover:underline">
                  +39 123 456 7890
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-wood-light">
                  Email
                </span>
                <a href="mailto:info@biancoelegno.it" className="text-lg text-wood hover:underline">
                  info@biancoelegno.it
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-wood-light">
                  Instagram
                </span>
                <a
                  href="https://instagram.com/biancoelegno.borrelli"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-wood hover:underline"
                >
                  @biancoelegno.borrelli
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-sm border border-border bg-card p-8">
            <h3 className="text-xl text-wood">Orari di laboratorio</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Lunedì – Venerdì: 8.00 – 12.00 / 13.30 – 18.00
              <br />
              Sabato: su appuntamento
              <br />
              Domenica: chiuso
            </p>
          </div>
        </aside>
      </section>

      <WoodDivider label="Massima serietà e affidabilità" />
    </>
  );
}
