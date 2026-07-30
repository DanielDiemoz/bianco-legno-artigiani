import { Link } from "@tanstack/react-router";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="paper-grain border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:py-20">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.35em] text-wood-light">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 text-4xl text-wood sm:text-5xl">{title}</h1>
        {subtitle ? (
          <p className="script mx-auto mt-4 max-w-2xl text-xl text-wood-light sm:text-2xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-5xl px-5">
      <div className="rounded-sm border border-border bg-card p-10 text-center shadow-warm">
        <h2 className="text-3xl text-wood">Parliamo del tuo progetto</h2>
        <p className="mt-3 text-muted-foreground">
          Sopralluogo e preventivo gratuiti in tutta la valle e nei comuni limitrofi.
        </p>
        <Link
          to="/contatti"
          className="mt-7 inline-block rounded-sm bg-wood px-8 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-wood-dark"
        >
          Richiedi un preventivo
        </Link>
      </div>
    </section>
  );
}
