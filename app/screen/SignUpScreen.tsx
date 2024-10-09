import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Import auth from firebase.ts
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const SignUpScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Mật khẩu không khớp");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      Alert.alert("Đăng Ký Thành Công", "Tài khoản đã được tạo thành công!");
      navigation.replace("Login");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message);
      } else {
        Alert.alert("Error", "An unknown error occurred");
      }
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/bg-h.png")} // Hình nền giống như LoginScreen
      style={styles.backgroundImage}
      imageStyle={{ resizeMode: "repeat" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={styles.link}>If you have an account already.</Text>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc", // Màu viền nhạt
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8, // Góc hơi tròn
    backgroundColor: "#fff", // Nền trắng cho ô nhập liệu
  },
  title: {
    color: "#5D5D5D",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#c02727", // Màu nền cho nút
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
  link: {
    color: "#B8B8B8", // Màu chữ liên kết
    textAlign: "center",
  },
});

export default SignUpScreen;
