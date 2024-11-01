import {
    Image,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import { colors } from "../styles/global";
  import Input from "../components/Input";
  import SendMessageIcon from "../icons/SendMessageIcon";
  
  const CommentsScreen = () => {
    const onSendMessage = () => {
      console.log("Send message");
    };
  
    const onSendCommentBtn = (
      <TouchableOpacity onPress={onSendMessage}>
        <SendMessageIcon />
        {/* <Text style={styles.sendCommentBtn}>1</Text> */}
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/comment-sunset.png")}
          resizeMode="cover"
          style={styles.postImage}
        />
        <ScrollView contentContainerStyle={{ gap: 24 }}>
          <View style={styles.commentBlock}>
            <Image
              source={require("../assets/images/comment-avatar-left.png")}
              resizeMode="cover"
              style={styles.avatar}
            />
            <View style={[styles.messageBlock, styles.leftRadius]}>
              <Text style={styles.messageText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={[styles.messageInfo, styles.alignRight]}>
                09 червня, 2020 | 08:40
              </Text>
            </View>
          </View>
          <View style={styles.commentBlock}>
            <View style={[styles.messageBlock, styles.rightRadius]}>
              <Text style={styles.messageText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.messageInfo}>09 червня, 2020 | 09:14</Text>
            </View>
            <Image
              source={require("../assets/images/comment-avatar-right.png")}
              resizeMode="cover"
              style={styles.avatar}
            />
          </View>
          <View style={styles.commentBlock}>
            <Image
              source={require("../assets/images/comment-avatar-left.png")}
              resizeMode="cover"
              style={styles.avatar}
            />
            <View style={[styles.messageBlock, styles.leftRadius]}>
              <Text style={styles.messageText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={[styles.messageInfo, styles.alignRight]}>
                09 червня, 2020 | 09:20
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.sendWrap}>
          <Input
            placeholder="Коментувати..."
            rightBtn={onSendCommentBtn}
            outerStyles={styles.input}
            // outerStyles={styles.passwordBtn}
            // onTextChange={handlPasswordChange}
            // secureTextEntry={isPasswordVisible}
          />
        </View>
      </View>
    );
  };
  
  export default CommentsScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 16,
      paddingTop: 32,
      paddingBottom: 32,
      backgroundColor: colors.white,
      gap: 32,
    },
    postImage: {
      height: 240,
      width: "100%",
      borderRadius: 8,
    },
    commentBlock: {
      flexDirection: "row",
      gap: 16,
    },
    messageBlock: {
      flex: 1,
      width: "100%",
      padding: 16,
      backgroundColor: colors.background,
      borderRadius: 6,
      gap: 8,
    },
    leftRadius: {
      borderTopLeftRadius: 0,
    },
    rightRadius: {
      borderTopRightRadius: 0,
    },
    avatar: {
      width: 28,
      height: 28,
    },
    messageText: {
      fontSize: 13,
      fontWeight: "400",
      lineHeight: 18,
    },
    messageInfo: {
      fontSize: 10,
      fontWeight: "400",
      lineHeight: 18,
      color: colors.gray,
    },
    alignRight: {
      textAlign: "right",
    },
    sendWrap: {},
    sendCommentBtn: {
      fontWeight: "500",
      fontSize: 16,
      color: colors.gray,
    },
    input: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "500",
      fontSize: 16,
      color: colors.gray,
      borderRadius: "100",
      paddingRight: 8,
    },
  });
  