import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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
});
