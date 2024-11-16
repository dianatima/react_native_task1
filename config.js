// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRMmBRBtvrEcyt6V0DTlusurg4ymWmUkE",
  authDomain: "mobile-app-b29f2.firebaseapp.com",
  databaseURL: "<https://mobile-app-b29f2.firebaseio.com>",
  projectId: "mobile-app-b29f2",
  //   storageBucket: "mobile-app-b29f2.appspot.com",
  storageBucket: "gs://mobile-app-b29f2.firebasestorage.app",
  //   messagingSenderId: "272690612538",
  //   appId: "app-id",
  //   measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

// Ініціалізація Auth з AsyncStorage для роботи редакс персистора
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
