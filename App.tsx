import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimatedTabBar, {TabsConfigsType} from 'curved-bottom-navigation-bar';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LoginScreen from "./app/screen/LoginScreen";
import HomeScreen from "./app/screen/HomeScreen"; // Màn hình sau khi đăng nhập
import SignUpScreen from "./app/screen/SignUpScreen";
import SplashScreen from "./app/screen/SplashScreen";
import Detail from "./app/food/Detail";
import SearchScreen from "./app/Tab/Search";
import CartScreen from "./app/Tab/Cart";
import HeartScreen from "./app/Tab/heart";
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

const CustomCartIcon = ({ color, size }: any) => {
  return (
    <View style={styles.cartIconContainer}>
      <FontAwesome name="cart-plus" size={30} color={"#fff"} />
    </View>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
    tabBar={props => (
      <AnimatedTabBar tabs={tabs} {...props} />
    )}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: "home" | "search" | "heart" | "user" | undefined; // Phải khai báo thì nó mới không báo lỗi ở chỗ name bên dưới

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Like") {
            iconName = "heart";
          } else if (route.name === "User") {
            iconName = "user";
          }

          if (route.name === "Cart") {
            return <CustomCartIcon color={color} size={size} />;
          }

          return iconName ? (
            <FontAwesome name={iconName} size={size} color={color} />
          ) : null;
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: "transparent",
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarLabel: "" }}
      />
      <Tab.Screen name="Like" component={HeartScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cartIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#e44f4f",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default App;
