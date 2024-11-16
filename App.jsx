// import * as SplashScreen from "expo-splash-screen";
import 'react-native-gesture-handler';
import { useFonts } from "expo-font";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/redux/store/store';
import { useEffect } from 'react';
import { authStateChanged } from './src/utils/auth';


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
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
    </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  InnerContainer: {
    gap: 16,
  },
});
