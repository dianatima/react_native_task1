import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export default function CameraScreen({navigation}) {
  const [facing, setFacing] = useState('back');
    const [permissionResponse, requestLibraryPermission] = MediaLibrary.usePermissions();
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const camera = useRef();
    
    useEffect(() => {
        const getCameraPermission = async () => {
            const { status } = await requestCameraPermission();
            if (status !== 'granted') {
                alert("Ми потребуємо вашої дозволу на використання камери.");
            }
        };

        getCameraPermission();
    }, [requestCameraPermission]);


    if (!cameraPermission) {
        return <View />;
      }
    
      if (!cameraPermission.granted) {
        return (
          <View style={styles.container}>
            <Text style={styles.message}>
              Ми потребуємо вашого дозволу для використання камери
            </Text>
            <Button onPress={requestCameraPermission} title="Надати дозвіл" />
          </View>
        );
      }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const takePhoto = async () => {
    if (!camera) return;
    const image = await camera?.current?.takePictureAsync();
    await MediaLibrary.saveToLibraryAsync(image.uri); 
    navigation.navigate("CreatePosts",{ imgUri: image.uri })

  }

  return (
    <View style={styles.container}>
      <CameraView ref={camera} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});