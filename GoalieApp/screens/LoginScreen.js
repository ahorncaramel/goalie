// ImagePicker.js

import React, { useState } from 'react';
import { 
    View,    
} from 'react-native';
import {Asset} from 'expo-asset';
import * as ImagePicker from 'expo-image-picker';

import LoginButton from '../components/LoginButton';
import ImageViewer from '../components/ImageViewer';
import { styles } from '../components/styles';



export default function LoginScreen({ navigation }) {
    const PlaceholderImage = require('../assets/images/climber.jpg');
    let placeholderUri = Asset.fromModule(PlaceholderImage).uri;
    const [selectedImage, setSelectedImage] = useState(placeholderUri);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        console.log(result);
        if (!result.canceled && result.assets) {
            setSelectedImage(result.assets[0].uri);
            setImageUri(result.assets[0].uri);
        } else {
            alert('You will keep the default image');
            let placeholderUri = Image.resolveAssetSource(PlaceholderImage).uri;
            setSelectedImage(placeholderUri);
            setImageUri(placeholderUri); 

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
            </View>  
            <View style={styles.ButtonContainerLogin}>
                <LoginButton theme= "choosePhoto"  
                label="Change photo" 
                onPress={pickImageAsync} 
                style={[styles.button, styles.footerContainer]}
                />
                <LoginButton theme="continue" 
                label="Continue with this photo" 
                onPress={() => navigation.navigate ('HomeScreen' , {selectedImage: selectedImage})}
                styles= {[styles.button, styles.footerContainer]}/>
            </View>
        </View>
    );
}


