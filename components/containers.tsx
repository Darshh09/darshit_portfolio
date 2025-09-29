export function PageWrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return <main className={`container-hero py-16 md:py-20 ${className || ''}`}>{children}</main>;
}
