import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import PostDetails from "./PostDetails.jsx";
import { useNavigation } from "@react-navigation/core";

import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function Posts() {
  const { params = {} } = useRoute();
  const { navigate } = useNavigation();

  return (
    <ScrollView style={{ marginTop: -70 }}>
      {params.PostsObj.map((post) => (
        <Card style={styles.cardy}>
          <Card.Title title={post.title} />
          <Card.Cover source={{ uri: "https://source.unsplash.com/random" }} />
          <Card.Actions>
            <TouchableOpacity style={styles.buttons}>
              <Text style={{color:'#FFFFFF'}} onPress={() => navigate("Home")}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
              <Text style={{color:'#FFFFFF'}} onPress={() => navigate("PostDetails", { postData: post })}>
                View
              </Text>
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cardy: {
    margin: 90,
    width: 200,
    height: 150,
    borderRadius: 20,
  },
  activeTexty: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
  },
  inActiveTexty: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 30,
  },
  buttons: {
    color: "#FFFFFF",
    fontSize: 10,
    width: 90,
    height: 50,
    textAlign: "center",
    borderRadius: 50,
    backgroundColor: "brown",
    lineHeight: 53,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
});
