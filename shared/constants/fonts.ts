/**
 * Font family and weight mappings for Panton fonts
 */

export const FontFamilies = {
  PantonRegular: 'Panton-Regular',
  PantonThin: 'Panton-Thin',
  PantonBold: 'Panton-Bold',
  PantonNarrow: 'PantonNarrow',
} as const;

export type FontFamily = typeof FontFamilies[keyof typeof FontFamilies];

export const FontWeights = {
  Thin: '100',
  ExtraLight: '200',
  Light: '300',
  Regular: '400',
  SemiBold: '600',
  Bold: '700',
  ExtraBold: '800',
  Heavy: '900',
  Black: '900',
  Fat: '900',
} as const;

export type FontWeight = keyof typeof FontWeights;

/**
 * Font file paths for loading with expo-font
 * Maps to assets/fonts/panton/
 * 
 * Note: expo-font will automatically extract the font family name from each TTF file
 * and register all weights/styles under that family name. The keys here are just
 * for reference - the actual font family names will be determined by the TTF metadata.
 */
export const PantonFonts = {
  // Panton Regular - all weights and styles
  'Panton-Thin': require('../../assets/fonts/panton/Panton-Trial-Thin.ttf'),
  'Panton-ThinItalic': require('../../assets/fonts/panton/Panton-Trial-ThinItalic.ttf'),
  'Panton-ExtraLight': require('../../assets/fonts/panton/Panton-Trial-ExtraLight.ttf'),
  'Panton-ExtraLightItalic': require('../../assets/fonts/panton/Panton-Trial-ExtraLightItalic.ttf'),
  'Panton-Light': require('../../assets/fonts/panton/Panton-Trial-Light.ttf'),
  'Panton-LightItalic': require('../../assets/fonts/panton/Panton-Trial-LightItalic.ttf'),
  'Panton-Regular': require('../../assets/fonts/panton/Panton-Trial-Regular.ttf'),
  'Panton-RegularItalic': require('../../assets/fonts/panton/Panton-Trial-RegularItalic.ttf'),
  'Panton-SemiBold': require('../../assets/fonts/panton/Panton-Trial-SemiBold.ttf'),
  'Panton-SemiBoldItalic': require('../../assets/fonts/panton/Panton-Trial-SemiBoldItalic.ttf'),
  'Panton-Bold': require('../../assets/fonts/panton/Panton-Trial-Bold.ttf'),
  'Panton-BoldItalic': require('../../assets/fonts/panton/Panton-Trial-BoldItalic.ttf'),
  'Panton-ExtraBold': require('../../assets/fonts/panton/Panton-Trial-ExtraBold.ttf'),
  'Panton-ExtraBoldItalic': require('../../assets/fonts/panton/Panton-Trial-ExtraBoldItalic.ttf'),
  'Panton-Heavy': require('../../assets/fonts/panton/Panton-Trial-Heavy.ttf'),
  'Panton-HeavyItalic': require('../../assets/fonts/panton/Panton-Trial-HeavyItalic.ttf'),
  'Panton-Black': require('../../assets/fonts/panton/Panton-Trial-Black.ttf'),
  'Panton-BlackItalic': require('../../assets/fonts/panton/Panton-Trial-BlackItalic.ttf'),
  'Panton-Fat': require('../../assets/fonts/panton/Panton-Trial-Fat.ttf'),
  'Panton-FatItalic': require('../../assets/fonts/panton/Panton-Trial-FatItalic.ttf'),

  // PantonNarrow - all weights and styles
  'PantonNarrow-Thin': require('../../assets/fonts/panton/PantonNarrow-Trial-Thin.ttf'),
  'PantonNarrow-ThinItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-ThinItalic.ttf'),
  'PantonNarrow-ExtraLight': require('../../assets/fonts/panton/PantonNarrow-Trial-ExtraLight.ttf'),
  'PantonNarrow-ExtraLightItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-ExtraLightItalic.ttf'),
  'PantonNarrow-Light': require('../../assets/fonts/panton/PantonNarrow-Trial-Light.ttf'),
  'PantonNarrow-LightItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-LightItalic.ttf'),
  'PantonNarrow-Regular': require('../../assets/fonts/panton/PantonNarrow-Trial-Regular.ttf'),
  'PantonNarrow-RegularItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-RegularItalic.ttf'),
  'PantonNarrow-SemiBold': require('../../assets/fonts/panton/PantonNarrow-Trial-SemiBold.ttf'),
  'PantonNarrow-SemiBoldItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-SemiBoldItalic.ttf'),
  'PantonNarrow-Bold': require('../../assets/fonts/panton/PantonNarrow-Trial-Bold.ttf'),
  'PantonNarrow-BoldItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-BoldItalic.ttf'),
  'PantonNarrow-ExtraBold': require('../../assets/fonts/panton/PantonNarrow-Trial-ExtraBold.ttf'),
  'PantonNarrow-ExtraBoldItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-ExtraBoldItalic.ttf'),
  'PantonNarrow-Heavy': require('../../assets/fonts/panton/PantonNarrow-Trial-Heavy.ttf'),
  'PantonNarrow-HeavyItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-HeavyItalic.ttf'),
  'PantonNarrow-Black': require('../../assets/fonts/panton/PantonNarrow-Trial-Black.ttf'),
  'PantonNarrow-BlackItalic': require('../../assets/fonts/panton/PantonNarrow-Trial-BlackItalic.ttf'),
};

/**
 * Helper function to get font family name for React Native
 */
export function getFontFamily(family: FontFamily = FontFamilies.PantonRegular): string {
  return family;
}

/**
 * Helper function to get font style object for React Native Text components
 */
export function getFontStyle(
  family: FontFamily = FontFamilies.PantonRegular,
  weight: FontWeight = 'Regular',
  italic: boolean = false
): { fontFamily: string; fontWeight?: string; fontStyle?: string } {
  const fontFamily = getFontFamily(family);
  const fontWeight = FontWeights[weight];

  return {
    fontFamily,
    fontWeight,
    ...(italic && { fontStyle: 'italic' }),
  };
}

