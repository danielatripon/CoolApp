import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";

import { useDispatch } from "react-redux";
import { LoginFunction } from "../store/actions";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(username, password);

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(LoginFunction(username, password));
  };

  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Login</Text>
        <Input
          placeholder=" Enter username..."
          leftIcon={{ type: "font-awesome", name: "user" }}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Input
          placeholder=" Enter password..."
          secureTextEntry={true}
          leftIcon={{ type: "font-awesome", name: "lock" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button onPress={submit}>Login</Button>
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
