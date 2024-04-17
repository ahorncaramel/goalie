import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

const MyStack = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" 
                component={LoginScreen} 
                />
                <Stack.Screen name="HomeScreen"
                component={HomeScreen}
                options={{title: 'Home'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
// Path: GoalieApp/App.js
