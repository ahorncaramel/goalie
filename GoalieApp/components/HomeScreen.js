import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { View, 
    StyleSheet,
    Text,
    Pressable,
    Image } from 'react-native';

export default function HomeScreen({ route }) {
    const { selectedImage } = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: selectedImage}} s
            tyle={styles.image}
            blurRadius={5}
            />
            <Text style={styles.text}>Welcome to the Home Screen!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        color: '#25292e',
        textAlign: 'center',
    }
});