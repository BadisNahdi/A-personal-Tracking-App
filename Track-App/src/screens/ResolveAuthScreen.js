import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from '../context/AuthContext';
const ResolveAuthScreen = ({ navigation }) => {
    const { tryLocalSignin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin(() => { navigation.navigate('TabScreen'); }, () => { navigation.navigate('Signup'); })
    }, [])
    return null;
}
export default ResolveAuthScreen;