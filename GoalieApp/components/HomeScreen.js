import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { View, 
    StyleSheet,
    Text,
    Pressable,
    ImageBackground } from 'react-native';
import { styles } from './styles';
//import ImageViewer from './ImageViewer';

export default function HomeScreen({ route }) {
    const { selectedImage } = route.params;
    console.log(selectedImage);
    return (
        <ImageBackground source= {{uri: selectedImage}} 
        style={styles.overlay}
        resizeMode ="contain"

        >
            <View style={StyleSheet.textContainer}>
                <Text style={styles.text}>Welcome to the Home Screen!</Text>
            </View>
            <StatusBar style="auto" />
        </ImageBackground>
    );
}

