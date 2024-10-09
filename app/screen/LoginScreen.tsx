import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Import Firebase config
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined; // Add SignUp to the navigation stack
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = () => {
    // Kiểm tra xem người dùng đã nhập email và mật khẩu chưa
    if (!email || !password) {
      setErrorMessage("Bạn chưa điền đầy đủ thông tin.");
      return;
    }

    // Gọi hàm đăng nhập từ Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setErrorMessage(""); // Xóa lỗi nếu đăng nhập thành công
        navigation.replace("Home"); // Navigate to Home on successful login
      })
      .catch((error) => {
        // Xử lý lỗi từ Firebase và hiển thị thông báo
        if (error.code === "auth/invalid-email") {
          setErrorMessage("Email không hợp lệ.");
        } else if (error.code === "auth/wrong-password") {
          setErrorMessage("Mật khẩu không chính xác.");
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("Người dùng, email hoặc password không đúng.");
        } else {
          setErrorMessage("Đã có lỗi xảy ra. Vui lòng thử lại.");
        }
      });
  };

  return (
    <ImageBackground
      source={require("../../assets/bg-h.png")}
      style={styles.backgroundImage}
      imageStyle={{ resizeMode: "repeat" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
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
            <Text style={styles.link}>Don't have an account? </Text>
            <Text>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "center",
            padding: 10,
            marginTop: 20,
            borderRadius: 8,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <MaterialIcons name="facebook" size={30} color="#3b5998" />
            <Text>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: 10,
            marginTop: 10,
            borderRadius: 8,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <AntDesign name="google" size={30} color="#c02727" />
            <Text>Continue with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.errorContainer}>
          {/* Hiển thị lỗi nếu có */}
          {errorMessage ? (
            <Text style={styles.error}>({errorMessage})</Text>
          ) : null}
        </View>
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
    borderColor: "#ccc", // Light gray border color
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8, // Slightly rounded corners
    backgroundColor: "#fff", // White background for input
  },
  error: {
    flexDirection: "row",
    alignItems: "center",
    color: "red",
    marginTop: 10,
  },
  link: {
    color: "#B8B8B8", // Matching the button color
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#c02727",
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
  title: {
    color: "#5D5D5D",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
