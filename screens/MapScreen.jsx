import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

const MapScreen = () => {
  const [markerCoords, setMarkerCoords] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
    
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
    
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }


        let location = await Location.getCurrentPositionAsync({});

        const coords = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };
        

        console.log('location', location);
      setLocation(coords);
    })();
  }, []);


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
        latitude: location ? location.latitude : 37.78825,
        longitude: location ? location.longitude : -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        cameraZoomRange={{
          minCenterCoordinateDistance: 20,
          maxCenterCoordinateDistance: 5,
        }}
        showsUserLocation={true}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
        onMarkerDragEnd={(e) =>
          console.log("COORDINATES", e.nativeEvent.coordinate)
        }
          >
              {location !== null && (
                  <Marker
                  //   draggable={true}
                    title="I am here"
                  //   coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  coordinate={location}
                    description="Hello"
                    onPress={() => console.log("Marker is pressed")}
                  />
              )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
