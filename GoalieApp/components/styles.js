
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    },
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
