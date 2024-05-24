import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { FontAwesome } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { colors } from "../constants/colors"
import { FontAwesome6 } from '@expo/vector-icons';

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("")
  //console.log(error);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome6 name="searchengin" size={24} color="white" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={24} color="white" />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign name="back" size={24} color="white" />
      </Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.teal400,
    color: colors.platinum,
    borderRadius: 10,
  },
})


/*
https://github.com/topics/frontend-boilerplate
https://github.com/GorvGoyl/Clone-Wars
https://www.freecodecamp.org/news/create-a-cross-platform-twitter-clone-with-vue-js/
https://eadistancia.unsta.edu.ar/lic-en-desarrollo-y-calidad-de-software
https://www.wappalyzer.com/upgraded/?utm_source=upgraded&utm_medium=extension&utm_campaign=wappalyzer
https://www.patreon.com/user?u=110986904
https://github.com/spancavil/Comision53285-Apps
https://platzi.com/escuela/blockchain/#lp2-Perfiles%20Profesionales
*/