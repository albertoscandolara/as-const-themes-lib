// Constants
import type { THEMES } from '../constants/themes.const.ts';

/**
 * Union type of all values in the {@link THEMES} constant.
 */
export type Themes = (typeof THEMES)[keyof typeof THEMES];
