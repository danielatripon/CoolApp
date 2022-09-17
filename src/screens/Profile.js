import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { Logout } from "../store/actions";

export default function Profile() {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };
  return (
    <View style={StyleSheet.container}>
      <Button onPress={submit}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
