import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';


//components
// import Button from './components/Button';
// import ImageViewer from './components/ImageViewer';
import ImagePicker from './components/ImagePicker';


export default function App() {
    return (
        <NavigationContainer>
            <ImagePicker />
            <StatusBar style="auto" />
        </NavigationContainer>  
    );
}


// Path: GoalieApp/App.js
