import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from "../context/Locationcontext";
const Map = () => {
    //just get the currentlocation
    const { state } = useContext(LocationContext);
    const currentLocation = state["currentLoction"];
    const  locations = state["locations"];
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }
    return <MapView
        style={Styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >
        <Circle
            center={currentLocation.coords}
            radius={2}
            strokeColor='rgba(158, 158, 255, 1.0)'
            fillColor='rgba(158, 158 255, 0.3)'
        />
        <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
};
const Styles = StyleSheet.create({
    map: {
        height: 500
    }
});
export default Map;