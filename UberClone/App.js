import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import tw from "tailwindcss-react-native";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {/* <HomeScreen /> */}
        <text style={tw`text-red-500`}>Check out Tailwind</text>
      </SafeAreaView>
    </Provider>
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
