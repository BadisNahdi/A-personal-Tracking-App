import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { StyleSheet, TextInput } from "react-native";
import Spacer from "./Spacer";
import { Context as Locationcontext } from "../context/Locationcontext";
import  useSaveTrack  from '../hooks/useSaveTrack'
const TrackForm = () => {
    const { state, startRecording, stopRecording, changeName } = useContext(Locationcontext);
    console.log(state.locations.length);
    const [saveTrack] = useSaveTrack();
    return (
        <>
            <TextInput style={styles.input} placeholder="Enter Name" onChangeText={changeName} value={state.name} />
            {state.recording
                ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="Start Recording" onPress={startRecording} />
            }
            <Spacer />
            {!state.recording && state.locations
                ? <Button title="Save Recording" onPress={saveTrack} />
                : null
            }
        </>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 5
    },
});
export default TrackForm;