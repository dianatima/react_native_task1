import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../styles/global";
import LogoutBotton from "../components/LogoutBottom";
import LocationIcon from "../icons/LocationIcon";
import CommentIconOrange from "../icons/CommentIconOrange";
import LikeIcon from "../icons/LikeIcon";
import { ScrollView } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const ProfileScreen = ({ navigation, route }) => {
  const onDelAvatar = () => {
    console.log("Delete photo");
  };

  const onComment = () => {
    navigation.navigate("Comments");
    console.log("Open comments!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/bg-image.png")}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../assets/images/avatar-image.png")}
              resizeMode="cover"
              style={styles.image}
            />
            <TouchableOpacity
              style={[styles.addAvatarBtn, styles.delAvatarBtn]}
              onPress={onDelAvatar}
            >
              <Text style={[styles.addAvatarText, styles.grayText]}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logOut}>
            <LogoutBotton onPress={() => console.log("LOG OUT!")} />
          </View>
          <Text style={styles.avatarName}>Natali Romanova</Text>
          <ScrollView
            contentContainerStyle={{
              gap: 32,
              paddingTop: 33,
              paddingBottom: 43,
            }}
          >
            <View style={styles.postItem}>
              <Image
                source={require("../assets/images/post-nature.png")}
                resizeMode="cover"
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>Ліс</Text>
              <View style={styles.bottomtWrap}>
                <View style={styles.iconsWrap}>
                  <TouchableWithoutFeedback onPress={onComment}>
                    <View style={styles.commmentWrap}>
                      <CommentIconOrange />
                      <Text style={styles.postText}>8</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <View style={styles.commmentWrap}>
                    <LikeIcon />
                    <Text style={styles.postText}>153</Text>
                  </View>
                </View>
                <View style={styles.locationWrap}>
                  <LocationIcon />
                  <Text style={[styles.postText, styles.underlinedText]}>
                    Ukraine
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.postItem}>
              <Image
                source={require("../assets/images/post-sunset.png")}
                resizeMode="cover"
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>Захід на Чорному морі</Text>
              <View style={styles.bottomtWrap}>
                <View style={styles.iconsWrap}>
                  <TouchableWithoutFeedback onPress={onComment}>
                    <View style={styles.commmentWrap}>
                      <CommentIconOrange />
                      <Text style={styles.postText}>3</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <View style={styles.commmentWrap}>
                    <LikeIcon />
                    <Text style={styles.postText}>200</Text>
                  </View>
                </View>
                <View style={styles.locationWrap}>
                  <LocationIcon />
                  <Text style={[styles.postText, styles.underlinedText]}>
                    Ukraine
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.postItem}>
              <Image
                source={require("../assets/images/post-house.png")}
                resizeMode="cover"
                style={styles.postImage}
              />
              <Text style={styles.postTitle}>Старий будинок у Венеції</Text>
              <View style={styles.bottomtWrap}>
                <View style={styles.iconsWrap}>
                  <TouchableWithoutFeedback onPress={onComment}>
                    <View style={styles.commmentWrap}>
                      <CommentIconOrange />
                      <Text style={styles.postText}>50</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <View style={styles.commmentWrap}>
                    <LikeIcon />
                    <Text style={styles.postText}>200</Text>
                  </View>
                </View>
                <View style={styles.locationWrap}>
                  <LocationIcon />
                  <Text style={[styles.postText, styles.underlinedText]}>
                    Italy
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

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
    height: "80%",
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
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  avatarName: {
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  postItem: {
    gap: 8,
  },
  postImage: {
    height: 240,
    width: "100%",
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.balack_main,
  },
  bottomtWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconsWrap: {
    gap: 24,
    flexDirection: "row",
  },
  commmentWrap: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  locationWrap: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  postText: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.balack_main,
  },
  underlinedText: {
    textDecorationLine: "underline",
  },
});
