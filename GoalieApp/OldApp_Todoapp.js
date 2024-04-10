import { StatusBar } from 'expo-status-bar';
import React from "react";
import { 
  StyleSheet,  
  Text,  
  View,
  KeyboardAvoidingView, 
  Keyboard,
  TextInput, 
  TouchableOpacity, 
  ScrollView
 } from 'react-native';

import Goal from "./Goal";

export default function App() {

// From a tutorial on how to build a to-do list app in React Native, see:
//https://dev.to/codesphere/building-your-first-react-native-application-with-expo-5381

  const [goal, setGoal] = React.useState();
  const [goalItems, setGoalItems] = React.useState([]);

  function handleAddGoal() {
    Keyboard.dismiss();
    setGoalItems([...goalItems, goal]);
    setGoal(null);
  }

  function deleteGoal(index) {
    let itemsCopy = [...goalItems];
    itemsCopy.splice(index, 1);
    setGoalItems(itemsCopy)
  }



  return (
    <View style={styles.container}>
      {/*Scroll view wehn list gets longer than page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps = "handled"
      >
       {/* Goals */}
       <View style={styles.goalWrapper}>
          <Text style={styles.sectionTitle}>My Goal List</Text>
          <View style={styles.items}>
            {/* This is where the goals will go! */}
            {goalItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => selectTask(index)}
                >
                  <Goal text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a goal */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeGoalWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add new goal"}
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <TouchableOpacity onPress={() => handleAddGoal()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
            <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  goalWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeGoalWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});