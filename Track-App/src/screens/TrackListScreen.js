import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import { useIsFocused } from '@react-navigation/native';
const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    console.log('state');
    console.log(state);
    const isFocused = useIsFocused();
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTracks();
            console.log('data');
            console.log(data);
        }
        fetchData();
    }, []);
    return <>
        <FlatList
            data={state}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('TrackDetail', { _id: item._id })
                }}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item._id}
        />
    </>
};
export default TrackListScreen;