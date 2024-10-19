// import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet } from "react-native";
// import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
    <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  InnerContainer: {
    gap: 16,
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    bottom: 0,
  },

  title: {
    textAlign: "center",
    fontSize: 31,
    fontWeight: "500",
  },
});
