import React, { useCallback, useEffect, useState } from "react";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colorScheme } from "nativewind";
import * as SplashScreen from "expo-splash-screen";
import { LoadingProvider } from "@/context/LoadingContext";
import { StackBackProvider } from "../context/StackBackContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PortalHost } from "@rn-primitives/portal";
import './global.css'
import StackRoutes from "../components/routes/StackRoutes";
import { useColorScheme } from '~/lib/useColorScheme';
import { Switch } from '~/components/ui/switch';
import { Label } from '~/components/ui/label';
import { Link } from 'expo-router';
import ForceUpdate from "@/components/ForceUpdate/ForceUpdate";


colorScheme.set("dark");

SplashScreen.preventAutoHideAsync();

const DarkModeSwitcherDev = () => {
  const { isDarkColorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
      {__DEV__ && (
        <View className={'bg-white flex-row w-full'}>
          <View
            className="flex-row gap-1 items-center mr-12"
            style={{
              bottom: 0,
              left: 0,
            }}>
            <Switch
              checked={isDarkColorScheme}
              onCheckedChange={() => {
                console.log('toggled 1');

                toggleColorScheme();
              }}
            />
            <Label
              nativeID="dark-mode"
              onPress={() => {
                console.log('toggled');
                toggleColorScheme();
              }}>
              Dark Mode Toggle
            </Label>
          </View>
          <View>
            <Link href={'/test'}>Test UI</Link>
          </View>
        </View>
      )}
    </>
  );
};

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  const DARK_THEME: Theme = {
    dark: false,
    colors: {
      background: '#A855F7', // background
      border: 'hsl(240 5.9% 90%)', // border
      card: 'hsl(0 0% 100%)', // card
      notification: 'hsl(0 84.2% 60.2%)', // destructive
      primary: '#A855F7', // primary
      text: '#ffffff', // foreground
    },
    fonts: {
      regular: { fontFamily: 'Inter', fontWeight: '400' },
      medium: { fontFamily: 'Inter', fontWeight: '500' },
      bold: { fontFamily: 'Inter', fontWeight: '700' },
      heavy: { fontFamily: 'Inter', fontWeight: '900' },
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
              <ForceUpdate>
                <StackRoutes />
              </ForceUpdate>
              <PortalHost />
              <DarkModeSwitcherDev />
            </GestureHandlerRootView>
          </StackBackProvider>
        </LoadingProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
