// React
import { useEffect } from "react";
// React Native
import { useColorScheme } from "react-native";
// Expo
import { SplashScreen, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
// Components
import { Header } from "../components/Header";
// Context
import { GlobalProvider } from "../contexts";
// Libreries
import { SWRConfig, SWRConfiguration } from "swr";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

/**
 * Functional component that load the app
 *
 * @return React.ReactNode <RootLayout/>
 */
export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <App />}
    </>
  );
}

/**
 * Functional component that has the main config and logics
 *
 * @return React.ReactNode <App/>
 */
function App() {
  const colorScheme = useColorScheme();
  const swrConfig: SWRConfiguration = {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  };

  return (
    <GlobalProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SWRConfig value={swrConfig}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ header: () => <></> }} />
            <Stack.Screen
              name="detail"
              options={{
                header: () => <Header title="Detalle" canGoBack canFavorite />,
              }}
            />
          </Stack>
        </SWRConfig>
      </ThemeProvider>
    </GlobalProvider>
  );
}
