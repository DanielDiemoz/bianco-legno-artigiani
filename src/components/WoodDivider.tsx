export function WoodDivider({ label }: { label?: string }) {
  return (
    <div className="relative flex items-center justify-center py-10" aria-hidden={!label}>
      <div className="h-4 w-full max-w-6xl overflow-hidden rounded-[3px] bg-wood shadow-warm">
        <div
          className="h-full w-full opacity-40"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,.18) 0 2px, transparent 2px 26px), repeating-linear-gradient(90deg, rgba(0,0,0,.25) 0 1px, transparent 1px 140px)",
          }}
        />
      </div>
      {label ? (
        <span className="script absolute bg-background px-6 text-2xl text-wood-light">{label}</span>
      ) : null}
    </div>
  );
}
