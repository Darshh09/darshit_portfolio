export function PageWrap({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <main
      className={`
        mx-auto
        w-full
        max-w-full
        px-4
        sm:max-w-2xl
        md:max-w-4xl
        lg:max-w-6xl
        py-8
        sm:py-12
        md:py-20
        ${className || ''}
      `}
    >
      {children}
    </main>
  );
}
