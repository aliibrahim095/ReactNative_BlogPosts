import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Home from "../screens/Home.jsx";
import Profile from "../screens/Profile.jsx";
import Posts from "../screens/Posts.jsx";
import PostDetails from "../screens/PostDetails.jsx";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: styles.header,
        headerLeft: () => <Text style={styles.blogStyly}>BLOGPOSTS</Text>,
      }}
    >
      <Screen name="Home" component={Home} options={{}} />
      <Screen name="Posts" component={Posts} options={{}} />
      <Screen name="PostDetails" component={PostDetails} options={{}} />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
  blogStyly: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 10,
    padding: 20,
  },
});
