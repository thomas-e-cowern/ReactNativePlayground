import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function HomeSearch() {
  return (
    <View>
      {/* Input box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where to?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={"clockcircle"} size={16} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </View>

      {/* last destiantion */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={"clockcircle"} size={16} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>1909</Text>
      </View>

      {/* Home */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#218cff" }]}>
          <AntDesign name={"home"} size={16} color={"#ffffff"} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
}
