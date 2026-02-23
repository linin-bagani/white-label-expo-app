import { useColorScheme as useNativewindColorScheme } from 'nativewind';

export function useColorScheme() {
  // const { colorScheme, setColorScheme, toggleColorScheme } = useNativewindColorScheme();
  const { setColorScheme, toggleColorScheme, colorScheme } = useNativewindColorScheme();
  return {
    colorScheme: colorScheme ?? 'dark',
    isDarkColorScheme: colorScheme === 'dark',
    // colorScheme: 'light',
    // isDarkColorScheme: false,
    setColorScheme,
    toggleColorScheme,
  };
}
