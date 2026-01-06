'use client';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DarshitMark(props: React.ComponentProps<'svg'>) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use black for light theme, white for dark theme
  // Default to white during SSR to prevent hydration mismatch
  const fillColor = mounted && resolvedTheme === "light" ? "black" : "white";

  return (
    <svg
      width="75"
      height="43"
      viewBox="0 0 75 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      suppressHydrationWarning
      {...props}
    >
      <path d="M0 5H6.23601V37H0V5Z" fill={fillColor}/>
      <rect x="6.23602" y="37" width="23.1623" height="5" fill={fillColor}/>
      <rect x="6.23602" width="23.1623" height="5" fill={fillColor}/>
      <rect width="4.8923" height="17.1299" transform="matrix(0.932438 -0.361329 0.293952 0.95582 29.4029 4.76758)" fill={fillColor}/>
      <rect width="4.88783" height="17.1429" transform="matrix(0.937045 0.349208 -0.283616 0.958938 34.2604 21)" fill={fillColor}/>
      <rect x="49" width="22" height="5" fill={fillColor}/>
      <rect x="44" y="5" width="5" height="17" fill={fillColor}/>
      <path d="M49 22H71V27H49V22Z" fill={fillColor}/>
      <rect x="71" y="25" width="4" height="13" fill={fillColor}/>
      <rect x="49" y="38" width="22" height="5" fill={fillColor}/>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  // Generate the SVG string, choosing fill based on the color provided:
  // If color is "#000" (light theme), use black; if "#fff" (dark), use white
  const fill = color === "#000" ? "black" : "white";
  return `<svg width="75" height="43" viewBox="0 0 75 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5H6.23601V37H0V5Z" fill="${fill}"/><rect x="6.23602" y="37" width="23.1623" height="5" fill="${fill}"/><rect x="6.23602" width="23.1623" height="5" fill="${fill}"/><rect width="4.8923" height="17.1299" transform="matrix(0.932438 -0.361329 0.293952 0.95582 29.4029 4.76758)" fill="${fill}"/><rect width="4.88783" height="17.1429" transform="matrix(0.937045 0.349208 -0.283616 0.958938 34.2604 21)" fill="${fill}"/><rect x="49" width="22" height="5" fill="${fill}"/><rect x="44" y="5" width="5" height="17" fill="${fill}"/><path d="M49 22H71V27H49V22Z" fill="${fill}"/><rect x="71" y="25" width="4" height="13" fill="${fill}"/><rect x="49" y="38" width="22" height="5" fill="${fill}"/></svg>`;
}
