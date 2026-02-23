import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getBrandContent } from "../../../../../utils/brandUtils";
import { useBrand } from "../../../../../hooks/useBrand";
interface BrandedFooterProps {
  style?: object;
}

const BrandedFooter: React.FC<BrandedFooterProps> = ({ style = {} }) => {
  const { brandName, brandSlug, themeColor } = useBrand();
  const { footerText } = getBrandContent(brandName);

  return (
    <View style={[styles.footer, { backgroundColor: themeColor }, style]}>
      <Text style={styles.footerText}>{footerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
});

export default BrandedFooter;
