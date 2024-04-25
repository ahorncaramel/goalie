import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { View, 
    StyleSheet,
    Text,
    Pressable,
    ImageBackground } from 'react-native';
import { styles } from '../components/styles';
import { useNavigation } from '@react-navigation/native';
//import ImageViewer from './ImageViewer';

export default function HomeScreen({ route }) {
    const { selectedImage } = route.params;
    const navigation = useNavigation();

    console.log(selectedImage);
    return (
        <ImageBackground source= {{uri: selectedImage}} 
        style={styles.overlay}
        resizeMode ="contain"

        >
            <View style={StyleSheet.textContainer}>
                <Text style={styles.text}>Welcome to the home of your goals!</Text>
            </View>
            <Pressable
            style={styles.button}
            onPress = {() => navigation.navigate('CreateGoal')}
            >
                <Text style={styles.buttonText}>Create a new Goal</Text>
            <StatusBar style="auto" />
            </Pressable>
        </ImageBackground>
    );
}

