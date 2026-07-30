import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const isLarge = size === "lg";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logo}
        alt="Logo Bianco & Legno: finestra in legno, montagne innevate e pennello"
        width={1024}
        height={1024}
        className={isLarge ? "h-28 w-28 sm:h-40 sm:w-40" : "h-11 w-11"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif-display text-wood ${isLarge ? "text-3xl sm:text-5xl" : "text-lg sm:text-xl"}`}
          style={{ fontFamily: "var(--font-serif-display)" }}
        >
          Bianco <span className="text-slate-mountain">&</span> Legno
        </span>
        <span
          className={`script text-wood-light ${isLarge ? "mt-2 text-xl sm:text-2xl" : "mt-1 text-sm"}`}
        >
          di Borrelli Matthias
        </span>
      </span>
    </Link>
  );
}
