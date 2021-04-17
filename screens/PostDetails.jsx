import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import Posts from './Posts.jsx'

import { useNavigation } from "@react-navigation/core";

import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export default function PostDetails() {
  const { params = {} } = useRoute();
  const { navigate } = useNavigation();

  console.log(params.postData);
  return (
    <View>
      <Card style={styles.cardy}>
        <Card.Title title={params.postData.title} />
        <Card.Content>
          <Paragraph>{params.postData.body}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://source.unsplash.com/random" }} />
        <Card.Actions>
          <TouchableOpacity style={styles.buttons}>
            <Text  style={{color:'#FFFFFF'}} onPress={() => navigate("Home")}>Back</Text>
          </TouchableOpacity>
        </Card.Actions>
      </Card>
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
  cardy: {
    margin:20,
    width: 400,
    height: 300,
    borderRadius: 10,
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
  }
});
