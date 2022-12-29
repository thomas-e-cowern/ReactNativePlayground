import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeMap from "../../components/HomeMap";
import CovidMessage from "../../components/CovidMessage";

export default function App() {
  return (
    <View>
      <HomeMap />

      {/* Covid Message */}
      <CovidMessage />
      {/* Bottom Component */}
    </View>
  );
}
