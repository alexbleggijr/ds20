import { TpSymbolDefsLogos, TpSymbolDefsIcons } from '../enums/icons-defs.enum';

export const TP_SYMBOL_DEFS_ICONS = Object.values(TpSymbolDefsIcons);
export const TP_SYMBOL_DEFS_LOGOS = Object.values(TpSymbolDefsLogos);

export const TP_SYMBOL_DEFS = [
  ...TP_SYMBOL_DEFS_ICONS,
  ...TP_SYMBOL_DEFS_LOGOS,
];

export const TP_SYMBOL_DEFS_ICONS_STORYBOOK = TP_SYMBOL_DEFS_ICONS.map(
  (defs) => `${defs}`,
);
export const TP_SYMBOL_DEFS_LOGOS_STORYBOOK = TP_SYMBOL_DEFS_LOGOS.map(
  (defs) => `${defs}`,
);
