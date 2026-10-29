import type { SystemPlate } from "../content";
import { asset } from "../lib/asset";
import { useThemeValue } from "../lib/theme";

/**
 * A drawn system plate. Each plate ships as a light and a dark SVG; only the file for the
 * current theme is requested, lazily, and a theme switch swaps the source.
 */
export function Plate({ plate }: { plate: SystemPlate }) {
  const theme = useThemeValue();
  return (
    <img
      className="system-plate"
      src={asset(`plates/${plate.name}-${theme}.svg`)}
      alt={plate.alt}
      width={plate.width}
      height={plate.height}
      loading="lazy"
      decoding="async"
    />
  );
}
