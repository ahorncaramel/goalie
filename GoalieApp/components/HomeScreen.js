import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { View, 
    StyleSheet,
    Text,
    Pressable,
    ImageBackground } from 'react-native';
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    textContainer: {
        backgroundColor: 'rgba(128,128,128,0.6)',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)'},
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    }
});