import type { ThemeDescriptions } from '../types/theme-descriptions.type';
import type { ThemeIcons } from '../types/theme-icons.type';
import type { ThemeNames } from '../types/theme-names.type';
import type { ThemeValues } from '../types/theme-values.type';
import type { Themes } from '../types/themes.type';

/**
 * Interface representing the structure of theme information.
 */
export interface ThemesInfo {
  description: ThemeDescriptions;
  icon: ThemeIcons;
  id: Themes;
  name: ThemeNames;
  value: ThemeValues;
}
