import React from "react";
import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import color from "../config/color";

const AppButton = ({ title, onPress, color = "primary", style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color[color] }, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor: color.primary,
    borderRadius: 25,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.primary,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
