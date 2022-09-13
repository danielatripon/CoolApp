import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import MyButton from "../components/MyButton";

export default function Contact() {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Contact us</Text>
        <Input
          placeholder=" Enter name..."
          leftIcon={{ type: "font-awesome", name: "user" }}
        />
        <Input
          placeholder=" Enter email..."
          leftIcon={{ type: "font-awesome", name: "envelope" }}
        />
        <Input
          placeholder=" Enter message..."
          leftIcon={{ type: "font-awesome", name: "comment" }}
        />

        <MyButton></MyButton>
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
