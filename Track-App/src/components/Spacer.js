import React from "react";
import { View, StyleSheet } from "react-native";
const Spacer = ({ Children }) => {
    return <View style={Styles.spacer}>{Children}</View>;
};
const Styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});
export default Spacer;