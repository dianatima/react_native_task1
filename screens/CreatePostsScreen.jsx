import {
    Dimensions,
    Image,
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
  import { useEffect, useState } from "react";
  import LocationIcon from "../icons/LocationIcon";
  import { colors } from "../styles/global";
  import PhotoIcon from "../icons/PhotoIcon";
  import Button from "../components/Button";
  import DeleteBtn from "../icons/DeleteIcon";
  import { useRoute } from "@react-navigation/native";
  import * as Location from "expo-location";
  
  const { width } = Dimensions.get("window");
  
  const CreatePostsScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [locationName, setLocationName] = useState("");
    const [myImgUri, setMyImgUri] = useState(null);
    const [isActiveBtn, setIsActiveBtn] = useState(false);
    const [locationPermission, setLocationPermission] = useState(null);
    const [locationCoord, setLocationCoord] = useState(null);
  
    const route = useRoute();
  
    useEffect(() => {
      if (route.params) {
        setMyImgUri(route.params.imgUri);
      }
    }, [route.params]);
  
    useEffect(() => {
      if (name && locationName && myImgUri) {
        setIsActiveBtn(true);
      } else {
        setIsActiveBtn(false);
      }
    }, [name, locationName, myImgUri]);
  
    const handleNameChange = (value) => {
      setName(value);
    };
  
    const handleLocationChange = (value) => {
      setLocationName(value);
    };
  
    const reset = () => {
      setName("");
      setLocationName("");
      setMyImgUri(null);
    };
  
    const onCreatePost = async () => {
      console.log("Create Posts");
  
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
  
      let location = await Location.getCurrentPositionAsync({});
  
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
  
      navigation.navigate("Posts", {
        name: name,
        locationName: locationName,
        myImgUri: myImgUri,
        coords: coords,
      });
  
      reset();
    };
  
    const handlePress = () => {
    reset();
    };
  
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : "padding"}
          style={styles.container}
        >
          <View>
            <View style={styles.photoContainer}>
              {myImgUri && (
                <Image source={{ uri: myImgUri }} style={styles.myImg} />
              )}
              <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
                <PhotoIcon />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.photoBtn}>
              <Text style={styles.text}>Завантажте фото</Text>
            </TouchableOpacity>
            <View style={styles.innerContainer}>
              <TextInput
                style={[styles.borderBottom, styles.text, styles.blackColor]}
                placeholder="Назва..."
                onChangeText={handleNameChange}
                value={name}
              />
              <View style={[styles.inputLocation, styles.borderBottom]}>
                <View>
                  <LocationIcon />
                </View>
                <TextInput
                  style={[styles.text, styles.blackColor]}
                  onChangeText={handleLocationChange}
                  placeholder="Місцевість..."
                  value={locationName}
                />
              </View>
            </View>
            <Button
              onPress={onCreatePost}
              btnStyle={
                isActiveBtn
                  ? { backgroundColor: colors.orange }
                  : { backgroundColor: colors.ligth_gray }
              }
            >
              <Text
                style={[
                  styles.createBtnText,
                  !isActiveBtn && styles.activeBtntext,
                ]}
              >
                Опублікувати
              </Text>
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
    activeBtntext: {
      color: colors.gray,
    },
    blackColor: {
      color: colors.balack_main,
    },
    delBtn: {
      flexDirection: "row",
      justifyContent: "center",
    },
    myImg: {
      height: "100%",
      width: "100%",
      position: "absolute",
      left: 0,
      top: 0,
    },
    disabledBtn: {
      backgroundColor: colors.grey,
    },
  });
  