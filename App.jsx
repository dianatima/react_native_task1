// import * as SplashScreen from "expo-splash-screen";
import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

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
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  InnerContainer: {
    gap: 16,
  },
});
