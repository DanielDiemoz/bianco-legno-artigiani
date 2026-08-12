import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useLang, type Lang, t, translations } from "@/lib/i18n";

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1.5 rounded-sm bg-secondary/30 p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLang("it")}
        className={cn(
          "rounded px-2 py-0.5 transition-colors",
          lang === "it"
            ? "bg-wood text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-pressed={lang === "it"}
      >
        IT
      </button>
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={cn(
          "rounded px-2 py-0.5 transition-colors",
          lang === "fr"
            ? "bg-wood text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
    </div>
  );
}

const getLinks = (lang: Lang) =>
  [
    { to: "/", label: t(lang, "contatti.nav.home") },
    { to: "/chi-sono", label: t(lang, "contatti.nav.chiSono") },
    { to: "/servizi", label: t(lang, "contatti.nav.servizi") },
    { to: "/galleria", label: t(lang, "contatti.nav.galleria") },
    { to: "/contatti", label: t(lang, "contatti.nav.contatti") },
  ] as const;

export function Header() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const links = getLinks(lang);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const el = menuRef.current;
    if (!el) return;
    const start = performance.now();
    el.style.display = "block";
    el.style.opacity = "0";
    el.style.transform = "translateY(-8px)";
    function frame(now: number) {
      const tt = Math.min((now - start) / 200, 1);
      el!.style.opacity = String(tt);
      el!.style.transform = `translateY(${-8 * (1 - tt)}px)`;
      if (tt < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, [open]);

  function close() {
    const el = menuRef.current;
    if (!el) {
      setOpen(false);
      return;
    }
    const start = performance.now();
    function frame(now: number) {
      const tt = Math.min((now - start) / 150, 1);
      el!.style.opacity = String(1 - tt);
      el!.style.transform = `translateY(${-8 * tt}px)`;
      if (tt < 1) {
        requestAnimationFrame(frame);
      } else {
        el!.style.display = "none";
        setOpen(false);
      }
    }
    requestAnimationFrame(frame);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm uppercase tracking-[0.15em] text-wood transition-colors hover:text-wood-light"
              activeProps={{ className: "border-b-2 border-wood pb-0.5" }}
            >
              {l.label}
            </Link>
          ))}
          <LangSwitcher />
        </nav>

        <button
          type="button"
          onClick={() => (open ? close() : setOpen(true))}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm border border-border text-wood md:hidden"
        >
          <span
            className={`block h-0.5 w-5 bg-wood transition-all duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-wood transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-wood transition-all duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="border-t border-border bg-card md:hidden"
      >
        <ul className="mx-auto max-w-6xl px-5 py-2">
          {links.map((l) => (
            <li key={l.to} className="border-b border-border/60 last:border-0">
              <Link
                to={l.to}
                onClick={close}
                className="block py-3 text-sm uppercase tracking-[0.15em] text-wood"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
