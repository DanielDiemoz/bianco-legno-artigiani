import { Link } from "@tanstack/react-router";
import { Mountains } from "./Mountains";

export function Footer() {
  return (
    <footer className="mt-24 bg-wood text-primary-foreground">
      <Mountains className="block h-16 w-full text-cream" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-2xl" style={{ fontFamily: "var(--font-serif-display)" }}>
            Bianco &amp; Legno
          </p>
          <p className="script mt-1 text-lg opacity-80">di Borrelli Matthias</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-80">
            Falegnameria e imbiancatura artigianale. Lavori curati nel dettaglio,
            con il legno e i tempi della montagna.
          </p>
        </div>

        <div>
          <h2 className="text-lg">Contatti</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-85">
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
          <ul className="mt-4 space-y-2 text-sm opacity-85">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/chi-siamo" className="hover:underline">Chi Siamo</Link></li>
            <li><Link to="/servizi" className="hover:underline">Servizi</Link></li>
            <li><Link to="/galleria" className="hover:underline">Galleria</Link></li>
            <li><Link to="/contatti" className="hover:underline">Contatti</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-6 text-center">
          <p className="script text-2xl">Massima serietà e affidabilità</p>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Bianco &amp; Legno di Borrelli Matthias — P.IVA 01234567890
          </p>
        </div>
      </div>
    </footer>
  );
}
