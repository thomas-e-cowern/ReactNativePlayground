import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Help us to restrict the spread of COVID by taking into accout local
        regulations and masking when appropriate
      </Text>
      <Text style={styles.learnMore}>Learn more </Text>
    </View>
  );
}
