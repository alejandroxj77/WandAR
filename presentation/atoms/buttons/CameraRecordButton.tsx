import { Colors } from "@/shared/constants/theme";
import { StyleSheet, View } from "react-native";
import Home from "../icons/home";

export default function CameraRecordButton() {

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Home/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64,
        backgroundColor: Colors.dark.white,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    innerContainer: {
        width: 60,
        height: 60,
        backgroundColor: Colors.dark.white,
        borderColor: Colors.dark.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 3,
    },
});