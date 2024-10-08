// SplashScreen.tsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ({ navigation }: any) => {
  // Tự động chuyển sang màn hình Login sau 5 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Chuyển sang trang Login sau 5 giây
    }, 5000);

    return () => clearTimeout(timer); // Clear timer khi component bị unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/splash-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "#5D5D5D",
  },
});

export default SplashScreen;
