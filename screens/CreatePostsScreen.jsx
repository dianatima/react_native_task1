import {
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import { useState } from "react";
  import LocationIcon from "../icons/LocationIcon";
  import { colors } from "../styles/global";
  import PhotoIcon from "../icons/PhotoIcon";
  import Button from "../components/Button";
  import DeleteBtn from "../icons/DeleteIcon";
  
  const { width } = Dimensions.get("window");
  
  const CreatePostsScreen = ({ navigation, route }) => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
  
    const onCreatePost = () => {
      console.log("Create Posts");
      navigation.navigate("PostsScreen");
    };
  
    const handlePress = () => {
      console.log("Delete Post");
      navigation.navigate("PostsScreen");
    };
  
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : "padding"}
          style={styles.container}
        >
          <View>
            <View style={styles.photoContainer}>
              <PhotoIcon />
            </View>
            <TouchableOpacity style={styles.photoBtn}>
              <Text style={styles.text}>Завантажте фото</Text>
            </TouchableOpacity>
            <View style={styles.innerContainer}>
              <TextInput
                style={[styles.borderBottom, styles.text, styles.blackColor]}
                placeholder="Назва..."
                //   onTextChange={handlEmailChange}
              />
              <View style={[styles.inputLocation, styles.borderBottom]}>
                <View>
                  <LocationIcon />
                </View>
                <TextInput
                  style={[styles.text, styles.blackColor]}
                  placeholder="Місцевість..."
                  // outerStyles={styles.passwordBtn}
                  // onTextChange={handlPasswordChange}
                />
              </View>
            </View>
            <Button onPress={onCreatePost}>
              <Text style={styles.createBtnText}>Опублікувати</Text>
            </Button>
          </View>
  
          <TouchableOpacity onPress={handlePress} style={styles.delBtn}>
            <DeleteBtn />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  };
  
  export default CreatePostsScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.white,
      justifyContent: "space-between",
      paddingTop: 32,
      paddingBottom: 34,
    },
    photoContainer: {
      backgroundColor: colors.ligth_gray,
      borderRadius: 8,
      borderColor: colors.border_gray,
      borderWidth: 1,
      width: "100%",
      height: 240,
      justifyContent: "center",
      alignItems: "center",
      // marginTop: 32,
    },
    photoBtn: {
      marginTop: 8,
    },
    text: {
      color: colors.gray,
      fontSize: 16,
      fontWeight: "400",
    },
    innerContainer: {
      paddingVertical: 32,
      gap: 16,
    },
    inputLocation: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
    },
    borderBottom: {
      borderBottomWidth: 1,
      borderColor: colors.border_gray,
      paddingVertical: 16,
    },
    createBtnText: {
      fontSize: 16,
      fontWeight: "400",
      color: colors.white,
      textAlign: "center",
    },
    blackColor: {
      color: colors.balack_main,
    },
    delBtn: {
      flexDirection: "row",
      justifyContent: "center",
    },
  });
  