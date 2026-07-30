import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo_bn_nobg.png";

export function Logo({ size = "sm" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const cls =
    size === "xl"
      ? "h-80 w-80 sm:h-[28rem] sm:w-[28rem]"
      : size === "lg"
        ? "h-52 w-52 sm:h-72 sm:w-72"
        : size === "md"
          ? "h-28 w-28"
          : "h-24 w-24";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logo}
        alt="Logo Bianco & Legno"
        width={512}
        height={512}
        className={`${cls} drop-shadow-md`}
      />
    </Link>
  );
}
