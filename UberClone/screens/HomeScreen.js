import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import logo from "../assets/rose-trolley-logo.png";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_MAPS_APIKEY } from "@env";
import Config from "react-native-config";

const HomeScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Image
        style={{ width: 100, height: 100, resizeMode: "contain" }}
        source={logo}
      />

      <GooglePlacesAutocomplete
        placeholder="Where from?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />

      <NavOptions />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
