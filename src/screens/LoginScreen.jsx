import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { colors } from "../../styles/global";
import { useDispatch } from "react-redux";
import { loginDB } from "../utils/auth";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const dispatch = useDispatch();

  const handlEmailChange = (value) => {
    setEmail(value);
  };

  const handlPasswordChange = (value) => {
    setPassword(value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onLogin = async () => {
    // navigation.navigate("Home");
    console.log('onLogin')
    try {
      await loginDB({ email, password }, dispatch)
      // Логіка для переходу на інший екран або відображення повідомлення про успіх
    } catch (err) {
      console.error('Login error:', err); // Логування помилок
    }
  };

  const onSignUp = () => {
    navigation.navigate("Registration", { userEmail: email });
    console.log("Sign up!");
  };

  const showBtn = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={styles.showBtn}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bg-image.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : "padding"}
            style={styles.container}
          >
            <View style={styles.formContainer}>
              <Text style={styles.title}>Увійти</Text>
              <View style={styles.wrapContainer}>
                <View style={styles.innerContainer}>
                  <Input
                    placeholder="Адреса електронної пошти"
                    onTextChange={handlEmailChange}
                    autofocus={true}
                  />
                  <Input
                    placeholder="Пароль"
                    rightBtn={showBtn}
                    outerStyles={styles.passwordBtn}
                    onTextChange={handlPasswordChange}
                    secureTextEntry={isPasswordVisible}
                  />
                </View>
                <View style={styles.InnerContainer}>
                  <Button onPress={onLogin}>
                    <Text style={styles.loginBtnText}>Увійти</Text>
                  </Button>
                  <View style={styles.signUpContainer}>
                    <Text style={styles.baseText}>
                      Немає акаунту?
                      <TouchableWithoutFeedback onPress={onSignUp}>
                        <Text style={styles.signUpText}> Зареєструватися</Text>
                      </TouchableWithoutFeedback>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContainer: {
    gap: 43,
    marginTop: 32,
  },
  innerContainer: {
    gap: 16,
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    bottom: 0,
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "50%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    color: colors.balack_main,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "500",
  },
  showBtn: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: colors.blue,
  },
  passwordBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginBtnText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: colors.white,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  baseText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: colors.blue,
  },
  signUpText: {
    textDecorationLine: "underline",
  },
});
