import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, onSubmit_callback,submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (<>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>
        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
        <Spacer />
        <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry />
        {errorMessage ? <Text style={Styles.errorMessage}>{errorMessage}</Text> : null}
        <Spacer />
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password }, () => {onSubmit_callback()})} />
        <Spacer />
    </>
    )
};
const Styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});
export default AuthForm;