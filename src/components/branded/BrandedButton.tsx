import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useBrand } from "../../../hooks/useBrand";

interface BrandedButtonProps {
  title: string;
  onPress: () => void;
  style?: object;
}

const BrandedButton: React.FC<BrandedButtonProps> = ({
  title,
  onPress,
  style = {},
}) => {
  const { brandName, brandSlug, themeColor } = useBrand();

  // Different button styles based on brand
  const getButtonStyle = () => {
    switch (brandSlug) {
      case "brand-two":
        return [
          styles.defaultButton,
          {
            backgroundColor: themeColor,
            borderWidth: 2,
            borderColor: "#333",
            borderRadius: 10,
          },
          style,
        ];

      case "brand-three":
        return [
          styles.defaultButton,
          {
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: themeColor,
            borderRadius: 25,
          },
          style,
        ];

      default: // Brand One
        return [styles.defaultButton, { backgroundColor: themeColor }, style];
    }
  };

  // Different text styles based on brand
  const getTextStyle = () => {
    switch (brandSlug) {
      case "brand-three":
        return [styles.defaultButtonText, { color: themeColor }];

      default:
        return [styles.defaultButtonText, { color: "#FFFFFF" }];
    }
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  defaultButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default BrandedButton;
