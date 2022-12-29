import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function HomeSearch() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: "#a0abff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Input box */}
      <View>
        <Text>Where to?</Text>
        <View>
          <AntDesign name={"clockcircle"} size={16} />
          <Text>Now</Text>
          <MaterialIcons name={"keyboard-arrow-down"} size={16} />
        </View>
      </View>
      {/* last destiantion */}

      {/* Home */}
    </View>
  );
}
