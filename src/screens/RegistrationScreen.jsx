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
  Alert,
} from "react-native";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/Button";
import { colors } from "../../styles/global";
import { registerDB } from "../utils/auth";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = ({ navigation, route }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isAvatar, setIsAvatar] = useState(false);

  const handLoginChange = (value) => {
    setLogin(value);
  };

  const handlEmailChange = (value) => {
    setEmail(value);
  };

  const handlPasswordChange = (value) => {
    setPassword(value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onSignUp = () => {
    console.log("Credentials", `${login} + ${email} + ${password}`);
    registerDB({ email, password })
  };

  const onLogin = () => {
    navigation.navigate("Login", { userEmail: email });
    console.log("Log in!");
  };

  const onAddAvatar = () => {
    setIsAvatar(true);
    console.log("Add photo");
  };

  const onDelAvatar = () => {
    setIsAvatar(false);
    console.log("Delete photo");
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
              <View style={styles.avatarContainer}>
                {isAvatar && (
                  <Image
                    source={require("../../assets/images/avatar-image.png")}
                    resizeMode="cover"
                    style={styles.image}
                  />
                )}
                <TouchableOpacity
                  style={[styles.addAvatarBtn, isAvatar && styles.delAvatarBtn]}
                  onPress={isAvatar ? onDelAvatar : onAddAvatar}
                >
                  <Text
                    style={[styles.addAvatarText, isAvatar && styles.grayText]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={styles.wrapContainer}>
                <View style={styles.innerContainer}>
                  <Input
                    placeholder="Логін"
                    onTextChange={handLoginChange}
                    autofocus={true}
                  />
                  <Input
                    placeholder="Адреса електронної пошти"
                    onTextChange={handlEmailChange}
                    value={email}
                  />
                  <Input
                    placeholder="Пароль"
                    rightBtn={showBtn}
                    outerStyles={styles.passwordBtn}
                    onTextChange={handlPasswordChange}
                    secureTextEntry={isPasswordVisible}
                    value={password}
                  />
                </View>
                <View style={styles.InnerContainer}>
                  <Button onPress={(onSignUp)}>
                    <Text style={styles.loginBtnText}>Зареєструватися</Text>
                  </Button>
                  <View style={styles.signUpContainer}>
                    <Text style={styles.baseText}>
                      Вже є акаунт?
                      <TouchableWithoutFeedback onPress={onLogin}>
                        <Text> Увійти</Text>
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

export default RegistrationScreen;

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
    height: "70%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 16,
    paddingTop: 92,
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
  avatarContainer: {
    width: 120,
    height: 120,
    backgroundColor: colors.ligth_gray,
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  addAvatarBtn: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: colors.orange,
    borderWidth: 1,
    position: "absolute",
    bottom: 14,
    right: -12,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  delAvatarBtn: {
    borderColor: colors.border_gray,
    backgroundColor: colors.white,
  },
  addAvatarText: {
    color: colors.orange,
    fontSize: 25,
    lineHeight: 25,
  },
  grayText: {
    color: colors.gray,
    transform: [{ rotate: "45deg" }],
  },
});
