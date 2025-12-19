import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { AuthenticationProvider } from '@/domain/contexts/authenticationContext';
import { useColorScheme } from '@/domain/hooks/use-color-scheme';
import { PantonFonts } from '@/shared/constants/fonts';
import { LoaderProvider } from '@/shared/context/loaderContext';

// Prevent the splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, fontError] = useFonts(PantonFonts);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Hide the splash screen once fonts are loaded or if there's an error
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Don't render the app until fonts are loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <LoaderProvider>
        <AuthenticationProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="authentication" options={{ headerShown: false }} />
          </Stack>
        </AuthenticationProvider>
      </LoaderProvider>
    </ThemeProvider>
  );
}
