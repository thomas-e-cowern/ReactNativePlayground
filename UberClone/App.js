import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import logo from "./assets/rose-trolley-logo.png";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <View style={{ padding: 5 }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={logo}
          />
        </View>
        <StatusBar style="auto" />
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
