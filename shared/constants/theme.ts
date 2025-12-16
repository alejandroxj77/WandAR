/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';
import { FontFamilies } from './fonts';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#FFFFFF',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** Panton as default font family */
    sans: FontFamilies.Panton,
    /** PantonNarrow for narrow text */
    narrow: FontFamilies.PantonNarrow,
    /** System serif fallback */
    serif: 'ui-serif',
    /** System rounded fallback */
    rounded: 'ui-rounded',
    /** System monospace fallback */
    mono: 'ui-monospace',
  },
  default: {
    /** Panton as default font family */
    sans: FontFamilies.Panton,
    /** PantonNarrow for narrow text */
    narrow: FontFamilies.PantonNarrow,
    /** System serif fallback */
    serif: 'serif',
    /** System rounded fallback */
    rounded: 'normal',
    /** System monospace fallback */
    mono: 'monospace',
  },
  web: {
    /** Panton with system font fallbacks for web */
    sans: `"Panton", "Panton-Regular", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    /** PantonNarrow with system font fallbacks for web */
    narrow: `"PantonNarrow", "PantonNarrow-Regular", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    /** System serif fallback */
    serif: "Georgia, 'Times New Roman', serif",
    /** System rounded fallback */
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    /** System monospace fallback */
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
