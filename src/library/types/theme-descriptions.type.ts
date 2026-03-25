import type { THEME_DESCRIPTIONS } from '../constants/theme-descriptions.const';

/**
 * Union type of all values in the {@link THEME_DESCRIPTIONS} constant.
 */
export type ThemeDescriptions =
  (typeof THEME_DESCRIPTIONS)[keyof typeof THEME_DESCRIPTIONS];
