import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mountains } from "./Mountains";

export function Footer() {
  return (
    <footer className="mt-24 bg-wood text-primary-foreground">
      <Mountains className="block h-16 w-full text-cream" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-sm bg-white/90 p-1.5 shadow-sm">
            <Logo size="md" />
          </div>
          <p className="script text-lg text-primary-foreground/90">di Borrelli Matthias</p>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/85">
            Falegnameria e imbiancatura artigianale. Lavori curati nel dettaglio,
            con il legno e i tempi della montagna.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Contatti</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
            <li>
              <a href="tel:+391234567890" className="hover:underline">
                +39 123 456 7890
              </a>
            </li>
            <li>
              <a href="mailto:info@biancoelegno.it" className="hover:underline">
                info@biancoelegno.it
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/biancoelegno.borrelli"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @biancoelegno.borrelli
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg">Pagine</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/chi-sono" className="hover:underline">Chi Sono</Link></li>
            <li><Link to="/servizi" className="hover:underline">Servizi</Link></li>
            <li><Link to="/galleria" className="hover:underline">Galleria</Link></li>
            <li><Link to="/contatti" className="hover:underline">Contatti</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-6 text-center">
          <p className="script text-2xl">Massima serietà e affidabilità</p>
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Bianco &amp; Legno di Borrelli Matthias — P.IVA 01234567890
          </p>
        </div>
      </div>
    </footer>
  );
}
