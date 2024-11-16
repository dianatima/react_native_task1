import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
  } from "react-native";
  import { colors } from "../../styles/global";
  import CommentIcon from "../../icons/CommentIcon";
  import LocationIcon from "../../icons/LocationIcon";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useState } from "react";
  
const PostsScreen = ({ navigation }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [userName, setUserName] = useState(userInfo?.displayName || '')
    console.log('userInfo',userInfo);
  const route = useRoute();
  console.log('params', route.params);
  
    const onLogin = () => {
      navigation.navigate("Comments");
      console.log("Open comments!");
    };
    
    const onLocation = () => {
      navigation.navigate("Map");
      console.log("Open map!");
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.avatarContainer}>
            <Image
              // source={require("../../assets/images/avatar-image.png")}
              source={userInfo.profilePhoto ? ({ uri: userInfo?.profilePhoto }) : (require("../../assets/images/avatar-image.png")) }
              resizeMode="cover"
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.userName}>{userInfo?.displayName || 'Anonim'}</Text>
            <Text style={styles.userEmail}>{userInfo?.email || 'Anonim'}</Text>
          </View>
        </View>
        <View style={styles.postList}>
          <View style={styles.postItem}>
            <Image
              source={require("../../assets/images/post-nature.png")}
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
              <TouchableWithoutFeedback onPress={onLocation}>
                <View style={styles.locationWrap}>
                  <LocationIcon />
                  <Text style={styles.postTLocation}>
                    Ivano-Frankivs'k Region, Ukraine
                  </Text>
                </View>
              </TouchableWithoutFeedback>
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
      borderRadius: 16,
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
  