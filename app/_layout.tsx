import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';

import { AuthenticationProvider } from '@/domain/contexts/authenticationContext';
import { ProfileProvider } from '@/domain/contexts/profileContext';
import { SocialProvider } from '@/domain/contexts/socialContext';
import { useColorScheme } from '@/domain/hooks/use-color-scheme';
import { PantonFonts } from '@/shared/constants/fonts';
import { LoaderProvider } from '@/shared/context/loaderContext';
import { ModalProvider } from '@/shared/context/modalContext';
import { KeyboardAvoidingView, Platform } from 'react-native';

// Prevent the splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

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
        <ModalProvider>
          <ProfileProvider>
            <AuthenticationProvider>
              <SocialProvider>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                  keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
                >
                  <Stack screenOptions={{ headerShown: false }} initialRouteName='authentication'>
                    <Stack.Screen name="authentication" options={{ headerShown: false }} />
                  </Stack>
                </KeyboardAvoidingView>
              </SocialProvider>
            </AuthenticationProvider>
          </ProfileProvider>
        </ModalProvider>
      </LoaderProvider>
      <Toast />
    </ThemeProvider>
  );
}
