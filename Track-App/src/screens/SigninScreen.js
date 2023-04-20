import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return <View>
        <AuthForm
            headerText="Sign in for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            //onSubmit={({ email, password }) => signup({ email, password })} the same as 
            onSubmit={signin}
            onSubmit_callback={() => navigation.navigate('TabScreen')}
        />
        <TouchableOpacity onPress={() => {
            navigation.navigate('Signup');
            clearErrorMessage();
        }}>
            <Text style={Styles.link}>Don't have an account? Sign up instead</Text>
        </TouchableOpacity>
    </View>
};
const Styles = StyleSheet.create({
    link: {
        color: 'blue',
        marginLeft: 5
    }
})
export default SigninScreen;