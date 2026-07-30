export function Mountains({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 160 L180 60 L280 110 L430 20 L560 120 L700 50 L840 130 L980 60 L1200 160 Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M0 160 L150 100 L300 140 L470 70 L620 150 L780 95 L950 145 L1200 90 L1200 160 Z"
        fill="currentColor"
        opacity="0.32"
      />
    </svg>
  );
}
