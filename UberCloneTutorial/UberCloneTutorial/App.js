import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./src/screens/HomeScreen";

import DestinationSearch from "./src/screens/DestinationSearch";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="dark-content" />
    // </View>

    // <HomeScreen />
    <DestinationSearch />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
