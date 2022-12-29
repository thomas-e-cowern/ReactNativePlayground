import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: "#a0abff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Travel only if necessary</Text>
      <Text>
        Help us to restrict the spread of COVID by taking into accout local
        regulations and masking when appropriate
      </Text>
      <Text>Learn more </Text>
    </View>
  );
}
