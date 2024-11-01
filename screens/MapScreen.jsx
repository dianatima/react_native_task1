import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const [markerCoords, setMarkerCoords] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        cameraZoomRange={{
          minCenterCoordinateDistance: 20,
          maxCenterCoordinateDistance: 5,
        }}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
        onMarkerDragEnd={(e) =>
          console.log("COORDINATES", e.nativeEvent.coordinate)
        }
      >
        <Marker
          draggable={true}
          title="I am here"
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          description="Hello"
          onPress={() => console.log("Marker is pressed")}
        />
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
