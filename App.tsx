import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LoginScreen from "./app/screen/LoginScreen";
import HomeScreen from "./app/screen/HomeScreen"; // Màn hình sau khi đăng nhập
import SignUpScreen from "./app/screen/SignUpScreen";
import SplashScreen from "./app/screen/SplashScreen";
import Detail from "./app/food/Detail";
import SearchScreen from "./app/Tab/Search";
import CartScreen from "./app/Tab/Cart";
import HeartScreen from "./app/Tab/Heart";
import UserScreen from "./app/Tab/User";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  Splash: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName:
            | "home"
            | "search"
            | "heart"
            | "user"
            | "cart-plus"
            | undefined; // Phải khai báo thì nó mới không báo lỗi ở chỗ name bên dưới

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Like") {
            iconName = "heart";
          } else if (route.name === "User") {
            iconName = "user";
          } else if (route.name === "Cart") {
            iconName = "cart-plus";
          }

          return iconName ? (
            <FontAwesome name={iconName} size={size} color={color} />
          ) : null;
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderRadius: 10,
        },
        tabBarActiveTintColor: "#c02727",
        tabBarInactiveTintColor: "#8e8e93",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Like" component={HeartScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
