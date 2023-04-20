import { NavigationActions } from "@react-navigation/native";
let navigator;
//let because it is gonna be declared later
export const setnavigator = (nav) => {
    navigator = nav;
};
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};