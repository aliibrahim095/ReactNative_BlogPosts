import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import axios from "react-native-axios";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Home() {
  const [posts, setPosts] = useState();
  // const hobbies = ['fishing','reading','writing','running','coding']
  const { navigate } = useNavigation();

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json));
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <Text
          style={styles.getPostsButtons}
          onPress={() => navigate("Posts", { PostsObj: posts })}
        >
          Get Posts
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  hobbies: {
    fontSize: 25,
  },
  getPostsButtons: {
    color: "#FFFFFF",
    fontSize: 20,
    width: 350,
    height: 55,
    textAlign: "center",
    borderRadius: 50,
    backgroundColor: "brown",
    lineHeight: 53,
  },
});
