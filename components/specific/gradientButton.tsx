import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientButton = ({ title, onPress }) => {
  return (
    <LinearGradient
      colors={["#F98B1F", "#FF774C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    width: 335,
    height: 51,
    textAlign: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

export default GradientButton;
