import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import BrandedHeader from "./src/components/branded/BrandedHeader";
import BrandedButton from "./src/components/branded/BrandedButton";
import BrandedFooter from "./src/components/branded/BrandedFooter";
export default function HomeScreen() {
  const handleButtonPress = () => {
    Alert.alert(
      "Shared Codebase",
      "This app shares the same codebase as other brands!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    );
  };

  return (
    <View style={styles.container}>
      <BrandedHeader title="Welcome" />
      <View style={styles.content}>
        <BrandedButton
          title="Show Shared Codebase Info"
          onPress={handleButtonPress}
        />
      </View>
      <BrandedFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
