import { ThemeProvider } from '@components';
import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import {
  Barlow_300Light, Barlow_400Regular, Barlow_500Medium, Barlow_600SemiBold,
} from '@expo-google-fonts/barlow';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Barlow_300Light,
    Barlow_400Regular,
    Barlow_500Medium,
    Barlow_600SemiBold,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Stack screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="details/[id]" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
