import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import * as AsyncStorage from "../../utils/AsyncStorage.js";


export default function Other() {

  const save = async () =>{
    AsyncStorage.setItem("myName",name);
  }

  const load = async () => {
    setName(await AsyncStorage.getItem("myName"));
  }

  

  const [name,setName] = useState(""); 


  useEffect(() => {
    load()
  },[]);

  return (
    <View style={styles.page}>
      <Text>Dein Name:</Text>

      <TextInput style={styles.text} onChangeText={(text) => setName(text)} />

      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text> SAVE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text> REMOVE</Text>
      </TouchableOpacity>

      <Text style={{color: "white"}}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
  },

  text: {
    borderWidth: 1,
    borderColor: "white",
    alignSelf: "stretch",
    height: 60,
    borderRadius: 6,
    fontSize: 20,
    color: "white",
    paddingHorizontal: 20,
    margin: 32,
  },

  button: {
    backgroundColor: "#AAABBB",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    height: 60,
    borderRadius: 6,
    fontSize: 20,
    color: "white",
    paddingHorizontal: 20,
    margin: 32,
  },
});
