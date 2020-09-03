import React from "react";
import { View, StyleSheet } from "react-native";
import color from "../config/color";

const ListView = ({ title }) => {
  return (
    <View style={styles.listVeiw}>
      <Text style={styles.input}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listVeiw: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    width: "65%",
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: color.secondary,
    width: "50%",
  },
});

export default ListView;
