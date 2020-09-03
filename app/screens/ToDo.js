import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import color from "../config/color";

const ToDo = () => {
  const [goal, setGoal] = useState("");
  const [list, setlist] = useState([]);

  const goalHandler = (text) => {
    setGoal(text);
  };

  const addButtonHandler = () => {
    setlist((prevList) => [
      ...prevList,
      { id: Math.random().toString(), value: goal, done: false },
    ]);
    // console.log(list);
  };

  const handleDelete = (item) => {
    setlist(list.filter((itm) => itm.id !== item.id));
  };

  const doneHandler = (item) => {
    const updatedList = list.map((listItem) => {
      if (item.id === listItem.id) {
        return { ...listItem, done: true };
      }
      return listItem;
    });
    setlist(updatedList);
  };

  function unDoneHandler(item) {
    const updatedList = list.map((listItem) => {
      if (item.id === listItem.id) {
        return { ...listItem, done: false };
      }
      return listItem;
    });
    setlist(updatedList);
  }

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> To Do App</Text>
      </View>
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <TextInput
            placeholder="Enter Goal"
            onChangeText={goalHandler}
            value={goal}
            style={styles.input}
          />
          <AppButton title="Add" onPress={addButtonHandler} />
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={list}
          renderItem={({ item }) => (
            <View style={styles.innerContainer}>
              <View>
                <AppButton
                  style={{ top: 10 }}
                  title="Done"
                  onPress={() => doneHandler(item)}
                />
                <AppButton
                  style={{ bottom: 10 }}
                  title="Undone"
                  onPress={() => unDoneHandler(item)}
                />
              </View>
              <View style={styles.listVeiw}>
                <Text>
                  {item.value}
                  {"\n"}
                  <Text style={{ fontWeight: "bold", color: color.primary }}>
                    {item.done ? "Done" : "Undone"}
                  </Text>
                </Text>
              </View>
              <TouchableWithoutFeedback onPress={() => handleDelete(item)}>
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={30}
                    color={color.primary}
                  />
                </View>
              </TouchableWithoutFeedback>
              {/* <AppButton title="Delete" onPress={() => handleDelete(item)} /> */}
            </View>
          )}
          style={styles.flatList}
        ></FlatList>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  flatList: {
    height: "100%",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: color.secondary,
    width: "70%",
  },
  listVeiw: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: color.lighterGray,
    borderBottomColor: color.secondary,
    borderBottomWidth: 1,
    width: "70%",
    justifyContent: "center",
    alignSelf: "center",
  },

  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  text: {
    color: color.primary,
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
    alignSelf: "center",
    paddingLeft: 10,
  },
  titleContainer: {
    backgroundColor: color.primary,
    width: "100%",
    height: 100,
  },
  titleText: {
    justifyContent: "center",
    alignSelf: "center",
    top: 60,
    fontWeight: "bold",
    color: color.white,
    fontSize: 25,
  },
  screen: {
    padding: 50,
    top: 40,
  },
});

export default ToDo;
