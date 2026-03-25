import type { THEME_ICONS } from '../constants/theme-icons.const';

/**
 * Union type of all values in the {@link THEME_ICONS} constant.
 */
export type ThemeIcons = (typeof THEME_ICONS)[keyof typeof THEME_ICONS];
