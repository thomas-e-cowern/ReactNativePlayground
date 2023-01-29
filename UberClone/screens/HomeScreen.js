import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import logo from "../assets/rose-trolley-logo.png";

const HomeScreen = () => {
  return (
    <View style={{ padding: 5 }}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={logo}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
