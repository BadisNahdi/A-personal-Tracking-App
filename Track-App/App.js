import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/Locationcontext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Account' component={AccountScreen} options={{ tabBarIcon: () => <FontAwesome name="gear" size={24} color="black" /> }}></Tab.Screen>
      <Tab.Screen name='TrackCreate' component={TrackCreateScreen} options={{ tabBarIcon: () => <FontAwesome5 name="plus" size={24} color="black" /> }}></Tab.Screen>
      <Tab.Screen name='TrackList' component={TrackListScreen} options={{ tabBarIcon: () => <FontAwesome name="th-list" size={24} color="black" /> }}></Tab.Screen>
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ResolveAuth' component={ResolveAuthScreen}></Stack.Screen>
        <Stack.Screen name='Signup' component={SignupScreen} options={{ headerLeft: null }}></Stack.Screen>
        <Stack.Screen name='Signin' component={SigninScreen} options={{ headerLeft: null }}></Stack.Screen>
        <Stack.Screen name='TabScreen' component={TabScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='TrackDetail' component={TrackDetailScreen} options={{ header: 'Track Detail' }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default () => {
  return <TrackProvider children={<LocationProvider children={<AuthProvider children={<App />} />} />} />
    ;
};