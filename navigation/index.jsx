import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Home from "../screens/Home.jsx";
import Profile from "../screens/Profile.jsx";
import HomeStack from "../navigation/HomeStack.jsx";

const { Navigator, Screen } = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        style: styles.footer,
      }}
    >
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "white" : "gray" }}>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              color={focused ? "white" : "gray"}
              size={25}
            ></FontAwesome>
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "white" : "gray" }}>Profile</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              color={focused ? "white" : "gray"}
              size={25}
            ></FontAwesome>
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  footer: {
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
