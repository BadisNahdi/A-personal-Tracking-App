import React, { useContext } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from "../context/TrackContext";
import MapView,{ Polyline} from "react-native-maps";
const TrackDetailScreen = ({ navigation, route }) => {
    const { state } = useContext(TrackContext);
    const _id = route.params._id;
    console.log(_id)
    const track = state.find(t => t._id == _id);
    const initial_coords = track.locations[0].coords;
    return <>
        <MapView
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initial_coords
            }}
            style={Styles.map}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
    </>  
};
const Styles = StyleSheet.create({
    map: {
        height:300
    } 
})
export default TrackDetailScreen;