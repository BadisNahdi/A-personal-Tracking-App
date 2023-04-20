import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin(() => {navigation.navigate('TabScreen');});
    }, []);
    //secureTextEntry is the same as secureTextEntry={true}
    return <View style={Styles.container}>
        <AuthForm
            headerText="Sign up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            //onSubmit={({ email, password }) => signup({ email, password })} the same as 
            onSubmit={signup}
        onSubmit_callback={() => {navigation.navigate('TabScreen')}}
        />
        <TouchableOpacity onPress={() => {
            clearErrorMessage();
            navigation.navigate('Signin');
        }}>
            <Text style={Styles.link}>Already have an Account? Sign instead</Text>
        </TouchableOpacity>
    </View>
};
const Styles = StyleSheet.create({
    link: {
        color: 'blue',
        marginLeft: 5
    }
})
export default SignupScreen;