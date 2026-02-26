import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import BrandedHeader from "@/components/branded/BrandedHeader";
import BrandedButton from "@/components/branded/BrandedButton";
import BrandedFooter from "@/components/branded/BrandedFooter";
import { Redirect } from "expo-router";
export default function HomeScreen() {
  const handleButtonPress = () => {
    Alert.alert(
      "Shared Codebase",
      "This app shares the same codebase as other brands!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    );
  };

  return (
    // <View style={styles.container}>
    //   <BrandedHeader title="Welcome" />
    //   <View style={styles.content}>
    //     <BrandedButton
    //       title="Show Shared Codebase Info"
    //       onPress={handleButtonPress}
    //     />
    //   </View>
    //   <BrandedFooter />
    // </View>
    <Redirect href='/login' />
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
