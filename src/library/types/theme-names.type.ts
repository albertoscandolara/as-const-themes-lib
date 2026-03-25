import type { THEME_NAMES } from '../constants/theme-names.const';

/**
 * Union type of all values in the {@link THEME_NAMES} constant.
 */
export type ThemeNames = (typeof THEME_NAMES)[keyof typeof THEME_NAMES];
