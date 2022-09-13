import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import MyButton from "../components/MyButton";

export default function Login() {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Login</Text>
        <Input
          placeholder=" Enter username..."
          leftIcon={{ type: "font-awesome", name: "user" }}
        />

        <Input
          placeholder=" Enter password..."
          secureTextEntry={true}
          leftIcon={{ type: "font-awesome", name: "lock" }}
        />
        <MyButton buttonText="Press This"></MyButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: "#DFFBEE",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#0EE310",
  },
  title: {
    color: "#74C5A1",
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 20,
    textAlign: "center",
  },
});
