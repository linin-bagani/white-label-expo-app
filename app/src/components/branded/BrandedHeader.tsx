import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useBrand } from "../../../../hooks/useBrand";

interface BrandedHeaderProps {
  title?: string;
}

const BrandedHeader: React.FC<BrandedHeaderProps> = ({ title = "Welcome" }) => {
  const { brandName, brandSlug, themeColor, logoPath } = useBrand();

  // Determine if the logo is an SVG file
  const isSvg = logoPath?.endsWith(".svg");

  // Render different headers based on brand
  const renderBrandSpecificHeader = () => {
    switch (brandSlug) {
      case "brand-two":
        return (
          <View style={styles.headerContainer}>
            {logoPath && !isSvg && (
              <Image
                source={{ uri: logoPath }}
                style={styles.logo}
                onError={(e) =>
                  console.warn("Error loading logo:", e.nativeEvent.error)
                }
                onLoadStart={() => console.log("Loading logo...")}
              />
            )}
            {logoPath && isSvg && (
              <Text style={styles.svgPlaceholder}>SVG Logo</Text>
            )}
            <Text style={[styles.title, { color: themeColor }]}>{title}</Text>
            <Text style={styles.subtitle}>Premium Experience</Text>
          </View>
        );

      case "brand-three":
        return (
          <View style={[styles.headerContainer]}>
            <View
              style={{
                backgroundColor: themeColor,
                padding: 20,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <Text style={styles.whiteTitle}>{title}</Text>
              <Text style={styles.whiteSubtitle}>Exclusive Access</Text>
            </View>
          </View>
        );

      default: // Brand One
        return (
          <View style={styles.headerContainer}>
            {logoPath && !isSvg && (
              <Image
                source={{ uri: logoPath }}
                style={styles.logo}
                onError={(e) =>
                  console.warn("Error loading logo:", e.nativeEvent.error)
                }
                onLoadStart={() => console.log("Loading logo...")}
              />
            )}
            {logoPath && isSvg && (
              <Text style={styles.svgPlaceholder}>SVG Logo</Text>
            )}
            <Text style={[styles.title, { color: themeColor }]}>
              {brandName}
            </Text>
            <Text style={styles.subtitle}>White Label App</Text>
          </View>
        );
    }
  };

  return <>{renderBrandSpecificHeader()}</>;
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  whiteTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  whiteSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  svgPlaceholder: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
});

export default BrandedHeader;
