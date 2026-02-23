import React, { useCallback, useEffect, useState } from "react";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colorScheme } from "nativewind";
import * as SplashScreen from "expo-splash-screen";
import { LoadingProvider } from "../context/LoadingContext";
import { StackBackProvider } from "../context/StackBackContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PortalHost } from "@rn-primitives/portal";
import './global.css'

colorScheme.set("dark");

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  const DARK_THEME: Theme = {
    dark: false,
    colors: {
      background: `#A855F7`,
      border: `hsl(240 5.9% 90%`,
      card: `hsl(0 0% 100%)`,
      notification: `hsl(0 84.2% 60.2%)`,
      primary: `#A855F7`,
      text: `#ffffff`,
    },
    fonts: {
      regular: { fontFamily: "Inter", fontWeight: "400" },
      medium: { fontFamily: "Inter", fontWeight: "500" },
      bold: { fontFamily: "Inter", fontWeight: "700" },
      heavy: { fontFamily: "Inter", fontWeight: "900" },
    },
  };

  useEffect(() => {
    async function prepare() {
      try {
        //
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ThemeProvider value={DARK_THEME}>
        <StatusBar />
        <LoadingProvider>
          <StackBackProvider>
            <GestureHandlerRootView>
              <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
              </Stack>
              <PortalHost />
            </GestureHandlerRootView>
          </StackBackProvider>
        </LoadingProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
