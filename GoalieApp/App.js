import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

// Placeholder image
const PlaceholderImage = require('./assets/images/climber.jpg');

export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
        </View>  
        <View style={styles.footerContainer}>
            <Button theme= "choosePhoto"  label="Change photo" />
            <Button theme="continue" label="Continue with this photo" />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 58,
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

// Path: GoalieApp/App.js
