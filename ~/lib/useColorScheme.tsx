import { useColorScheme as useNativewindColorScheme } from 'nativewind';

export function useColorScheme() {
  const { setColorScheme, toggleColorScheme, colorScheme } = useNativewindColorScheme();
  return {
    colorScheme: colorScheme ?? 'dark',
    isDarkColorScheme: colorScheme === 'dark',
    setColorScheme,
    toggleColorScheme,
  };
}
