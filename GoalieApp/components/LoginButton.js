import { 
    StyleSheet, 
    View,
    Pressable,
    Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
    
export default function LoginButton({label, theme, onPress, navigation}) {
    //this button allows the user to choose a photo from their library
    if (theme === "choosePhoto") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable 
                style={[styles.button, { backgroundColor: "#b3b3b3"}]} 
                onPress={onPress                                                                                }
                >
                    <FontAwesome 
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
                </Pressable>
            </View>
        );
    }
    //this button continues to the next screen by passing on the selected image
    if (theme === "continue") {
        return (
            <View style={[styles.buttonContainer, {borderWidth: 3, borderColor: "#1E90FF", borderRadius: 18}]}>
                <Pressable style={[styles.button, { backgroundColor: "#b3b3b3"}]} 
                onPress={onPress}
                    >
                  <FontAwesome
                  name="forward"
                  size={18}
                  color="#25292e"
                  style={styles.buttonIcon}
                  />
                  <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
                </Pressable>
              </View>
          );
        }

    return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                  <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
              </View>
          );
        }
        

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,  
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3, 
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    }, 
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#fff",
        fontSize: 17,
    },
});