import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo_bn_nobg.png";

export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const isLarge = size === "lg";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logo}
        alt="Logo Bianco & Legno"
        width={512}
        height={512}
        className={isLarge ? "h-44 w-44 sm:h-60 sm:w-60" : "h-20 w-20"}
      />
    </Link>
  );
}
