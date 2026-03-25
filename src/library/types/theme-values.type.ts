import type { THEME_VALUES } from '../constants/theme-values.const';

/**
 * Union type of all values in the {@link THEME_VALUES} constant.
 */
export type ThemeValues = (typeof THEME_VALUES)[keyof typeof THEME_VALUES];
