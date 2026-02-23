import React from "react";
import { View, StyleSheet, Alert ,Text} from "react-native";
import BrandedHeader from "./src/components/branded/BrandedHeader";
import BrandedButton from "./src/components/branded/BrandedButton";
import BrandedFooter from "./src/components/branded/BrandedFooter";
import './global.css'

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
      <View className="flex-1 items-center justify-center bg-white">
           <Text className="text-xl mt-20 font-bold text-blue-500">
             Welcome to Nativewind!
           </Text>
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
});
