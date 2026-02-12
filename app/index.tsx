import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Constants from "expo-constants";

export default function HomeScreen() {
  // Get app name from expo config
  const appName = Constants.expoConfig?.name || "White Label App";

  // Get theme color from extra config
  const themeColor = Constants.expoConfig?.extra?.themeColor || "#007AFF";

  const handleButtonPress = () => {
    Alert.alert(
      "Shared Codebase",
      `This app (${appName}) shares the same codebase as other brands!`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.brandText}>{appName}</Text>
        <Text style={styles.subtitle}>White Label App</Text>

        {/* Button below the text with themed background */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: themeColor }]}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonText}>Show Shared Codebase Info</Text>
        </TouchableOpacity>
      </View>
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
  brandText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
