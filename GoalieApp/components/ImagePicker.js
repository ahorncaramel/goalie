// ImagePicker.js

import React, { useState } from 'react';
import { 
    View,
    StyleSheet    
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Button from './Button';
import ImageViewer from './ImageViewer';

const PlaceholderImage = require('../assets/images/climber.jpg');

export default function ImagePickerComponent() {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select an image')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>
            </View>  
            <View style={styles.footerContainer}>
                <Button theme= "choosePhoto"  label="Change photo" onPress={pickImageAsync} />
                <Button theme="continue" label="Continue with this photo" />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 58,
      },
      container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
      footerContainer: {
          flex: 1 / 3,
          alignItems: 'center',
      },
    });
