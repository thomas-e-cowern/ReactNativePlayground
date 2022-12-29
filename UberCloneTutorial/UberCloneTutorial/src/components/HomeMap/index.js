import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeMap() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: "#a0abff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>I am a map</Text>
    </View>
  );
}
