import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
  } from "react-native";
  import { colors } from "../styles/global";
  import CommentIcon from "../icons/CommentIcon";
  import LocationIcon from "../icons/LocationIcon";
  
  const PostsScreen = ({ navigation, route }) => {
    const onLogin = () => {
      navigation.navigate("Comments");
      console.log("Open comments!");
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <Image
              source={require("../assets/images/avatar-image.png")}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.userName}>Natalia Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.postList}>
          <View style={styles.postItem}>
            <Image
              source={require("../assets/images/post-nature.png")}
              resizeMode="cover"
              style={styles.postImage}
            />
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.bottomtWrap}>
              <TouchableWithoutFeedback onPress={onLogin}>
                <View style={styles.commmentWrap}>
                  <CommentIcon />
                  <Text style={styles.postCommment}>0</Text>
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.locationWrap}>
                <LocationIcon />
                <Text style={styles.postTLocation}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  export default PostsScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 16,
      paddingVertical: 32,
      backgroundColor: colors.white,
    },
    userContainer: {
      flexDirection: "row",
      width: "100%",
      gap: 8,
      marginBottom: 32,
    },
    avatarContainer: {
      width: 60,
      height: 60,
    },
    infoContainer: {
      justifyContent: "center",
    },
    image: {
      height: "100%",
      width: "100%",
    },
    userName: {
      fontSize: 13,
      fontWeight: "700",
      color: colors.balack_main,
    },
    userEmail: {
      fontSize: 11,
      fontWeight: "400",
      color: colors.email,
    },
    postList: {
      gap: 32,
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
    postCommment: {
      fontSize: 16,
      fontWeight: "400",
      color: colors.gray,
    },
    postTLocation: {
      fontSize: 16,
      fontWeight: "400",
      color: colors.balack_main,
      textDecorationLine: "underline",
    },
  });
  