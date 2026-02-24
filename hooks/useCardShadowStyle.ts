import { useTheme } from "@react-navigation/native";
import { ViewStyle } from "react-native";

const useCardShadowStyle = (): ViewStyle => {
  const { colors } = useTheme();

  return {
    shadowColor: colors.primary,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius:4
  }
}

export default useCardShadowStyle;
