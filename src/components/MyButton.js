import { StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";

export default function MyButton() {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#0EE310",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    borderRadius: 4,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },
});
