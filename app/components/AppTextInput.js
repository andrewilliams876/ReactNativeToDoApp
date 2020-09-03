import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const AppTextInput = ({ onChangeText, value, style, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      styles={style.c}
    />
  );
};

const styles = StyleSheet.create({
  c: {
    width: "50%",
  },
});

export default AppTextInput;
