import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStorage from "@react-native-async-storage/async-storage";
const authReducer = (state, action) => {
    switch (action.type) {
        case 'clear_err_msg':
            console.log("Ouii c bon");
            return { ...state, errorMessage: '' };
        case 'add_error':
            console.log(action.payload);
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case signout:
            return { token: null, errorMessage:''}
        default:
            return state;
    }
};
const tryLocalSignin = dispatch => async (callback_1, callback_2) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        console.log("Local <3")
        if (callback_1) {
            callback_1();
            console.log("callback_2");
        }
    } else {
        if (callback_2) {
            callback_2();
            console.log("callback_2")
        }
    }
}
const clearErrorMessage = dispatch => {
    return () => {
        dispatch({ type: 'clear_err_msg'});
        console.log("Je suis ici");
    }
}
const signup = dispatch => {
    return async ({ email, password }, callback) => {
        console.log("signup");
        try {
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            //async ({ email, password }, callback) is simpler
            //navigate('TrackList');
            if (callback) {
                callback();
            }
            if (!response.data.token) {
                console.log("error");
                dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
            }
        } catch (err) {
            console.log("error here");
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
        }
    };
};
const signin = (dispatch) => {
    return async ({ email, password }, callback) => {
        console.log("signin");
        try {
            const response = await trackerApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            if (callback) {
                callback();
            }
        } catch (err) {
            console.log("error here");
            dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
        }
    }
};
const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
    }
};
export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);