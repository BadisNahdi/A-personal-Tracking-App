import React, { useContext } from "react";
import { Text, SafeAreaView } from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView>
            <Spacer />
            <Button title="Sign Out" onPress={() => {
                signout();
                navigation.navigate('Signup');
            }} />
        </SafeAreaView>
    );
};
export default AccountScreen;