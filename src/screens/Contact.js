import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text>Contact us</Text>

      <StatusBar style="auto" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFFBEE",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#0EE310",
  },
});
