// Constants
import { THEME_DESCRIPTIONS } from '../constants/theme-descriptions.const';
import { THEME_ICONS } from '../constants/theme-icons.const';
import { THEME_NAMES } from '../constants/theme-names.const';
import { THEME_VALUES } from '../constants/theme-values.const';
import { THEMES } from '../constants/themes.const';
// Interfaces
import type { ThemesInfo } from '../interfaces/themes.interface';
// Types
import type { Themes } from '../types/themes.type';

/**
 * A mapping of theme identifiers to their corresponding information.
 */
export const THEMES_MAPPER = new Map<Themes, ThemesInfo>([
  [
    THEMES.DARK,
    {
      description: THEME_DESCRIPTIONS.DARK,
      icon: THEME_ICONS.DARK,
      id: THEMES.DARK,
      name: THEME_NAMES.DARK,
      value: THEME_VALUES.DARK,
    },
  ],
  [
    THEMES.DARK_PURPLE,
    {
      description: THEME_DESCRIPTIONS.DARK_PURPLE,
      icon: THEME_ICONS.DARK_PURPLE,
      id: THEMES.DARK_PURPLE,
      name: THEME_NAMES.DARK_PURPLE,
      value: THEME_VALUES.DARK_PURPLE,
    },
  ],
  [
    THEMES.FERRARI,
    {
      description: THEME_DESCRIPTIONS.FERRARI,
      icon: THEME_ICONS.FERRARI,
      id: THEMES.FERRARI,
      name: THEME_NAMES.FERRARI,
      value: THEME_VALUES.FERRARI,
    },
  ],
  [
    THEMES.LIGHT,
    {
      description: THEME_DESCRIPTIONS.LIGHT,
      icon: THEME_ICONS.LIGHT,
      id: THEMES.LIGHT,
      name: THEME_NAMES.LIGHT,
      value: THEME_VALUES.LIGHT,
    },
  ],
  [
    THEMES.LIGHT_BLUE,
    {
      description: THEME_DESCRIPTIONS.LIGHT_BLUE,
      icon: THEME_ICONS.LIGHT_BLUE,
      id: THEMES.LIGHT_BLUE,
      name: THEME_NAMES.LIGHT_BLUE,
      value: THEME_VALUES.LIGHT_BLUE,
    },
  ],
]);
