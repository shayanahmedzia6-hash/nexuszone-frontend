import { cn } from "@/lib/utils/cn";

type BrandSphereProps = {
  className?: string;
  dotClassName?: string;
};

const ROWS = 14;
const COLS = 14;
const RADIUS = 100;
const CENTER = { x: 100, y: 100 };

function bandColor(rowRatio: number): string {
  if (rowRatio < 0.34) return "var(--color-primary)";
  if (rowRatio < 0.67) return "var(--color-text)";
  return "var(--color-success)";
}

/**
 * Half-sphere dot mark echoing the Nexus Zone logo motif.
 * Generated (not a raster asset) so it never needs real photography.
 */
export function BrandSphere({ className, dotClassName }: BrandSphereProps) {
  const dots: { x: number; y: number; r: number; opacity: number; color: string }[] =
    [];

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const x = (col / (COLS - 1)) * RADIUS * 1.15;
      const y = (row / (ROWS - 1)) * RADIUS * 2;
      const dx = x - CENTER.x + 40;
      const dy = y - CENTER.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > RADIUS) continue;

      const edgeFade = 1 - dist / RADIUS;
      const depth = 1 - x / (RADIUS * 1.15);

      dots.push({
        x,
        y,
        r: 1.6 + edgeFade * 2.2,
        opacity: Math.min(1, 0.15 + edgeFade * depth * 1.6),
        color: bandColor(row / (ROWS - 1)),
      });
    }
  }

  return (
    <svg
      viewBox="0 0 160 200"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      {dots.map((dot, index) => (
        <circle
          key={index}
          cx={dot.x}
          cy={dot.y}
          r={dot.r}
          fill={dot.color}
          opacity={dot.opacity}
          className={dotClassName}
        />
      ))}
    </svg>
  );
}
