import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import React from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/store";
import AuthReducers from "./src/store/reducers";
import { StatusBar } from "react-native";
import Profile from "./src/screens/Profile";

const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="login" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector((state) => state.AuthReducers.authToken);
  console.log(token);
  return (
    <NavigationContainer>
      {token === null ? (
        <AuthStack />
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <Entypo name="user" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarLabel: "About",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="business" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
              tabBarLabel: "Contact",
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="contact-support"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
