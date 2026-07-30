type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WindowIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <rect x="8" y="7" width="32" height="32" rx="2" />
      <path d="M24 7v32M8 23h32M5 42h38M6 7h36" />
    </svg>
  );
}

export function PlanksIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <rect x="7" y="9" width="34" height="8" rx="1.5" />
      <rect x="7" y="20" width="34" height="8" rx="1.5" />
      <rect x="7" y="31" width="34" height="8" rx="1.5" />
      <path d="M18 9v8M29 20v8M22 31v8" />
    </svg>
  );
}

export function RollerIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <rect x="10" y="8" width="28" height="10" rx="2" />
      <path d="M24 18v6h-9v5" />
      <rect x="11" y="29" width="8" height="12" rx="2" />
    </svg>
  );
}

export function BrushIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <path d="M31 6l11 11-13 13-11-11z" />
      <path d="M18 19l-7 7c-3 3-3 8 0 11s8 3 11 0l7-7" />
    </svg>
  );
}

export function MountainIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <path d="M4 38L18 14l9 14 5-7 12 17z" />
      <path d="M13 24h10M27 31h9" />
    </svg>
  );
}

export function HandIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <path d="M18 26V10a3 3 0 016 0v14" />
      <path d="M24 22v-6a3 3 0 016 0v8" />
      <path d="M30 24v-4a3 3 0 016 0v14c0 6-5 10-11 10s-11-4-11-10v-8a3 3 0 016 0" />
    </svg>
  );
}

export function ClockIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 12v13l8 5" />
    </svg>
  );
}

export function LeafIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base} aria-hidden="true">
      <path d="M40 8C20 8 10 18 10 30a10 10 0 0010 10c12 0 20-12 20-32z" />
      <path d="M8 42C16 34 26 24 36 16" />
    </svg>
  );
}
