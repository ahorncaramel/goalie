import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',    
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
        justifyContent: 'center',
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
    imageContainer: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2,
    },
    footerContainer: {
        flex: 0.3,
        alignItems: 'center',
        paddingBotton: 2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginBottom: 10,
       // position: 'absolute',
       // bottom: 0,
    },
    ButtonContainerLogin: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "white",
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 21,
    },
});