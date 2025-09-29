export function SmallLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] tracking-widest text-white/40">{children}</span>;
}

export function MonoHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`mt-1 font-medium text-[24px] tracking-[0.18em] text-[#dce3ff] ${className || ''}`}>
      {children}
    </h1>
  );
}

export function Muted({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[15px] leading-7 text-white/70 ${className || ''}`}>{children}</p>;
}
