import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import logo from "../assets/rose-trolley-logo.png";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={logo}
      />

      <NavOptions />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
