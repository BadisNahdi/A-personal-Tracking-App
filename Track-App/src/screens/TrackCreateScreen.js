import React, { useCallback, useContext } from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from "react-native-elements";
import { useIsFocused } from '@react-navigation/native';
import Map from "../components/Map";
import { Context as Locationcontext } from "../context/Locationcontext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
const TrackCreateScreen = () => {
    const { state, addLocation } = useContext(Locationcontext);
    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);
    const isFocused = useIsFocused();
    const [err] = useLocation(isFocused || state.recording, callback);
    return <SafeAreaView>
        <Text h3>Create a Map</Text>
        <Map />
        {err ? <Text>Please enable locations services</Text> : null}
        <TrackForm />
    </SafeAreaView>
};
export default TrackCreateScreen;