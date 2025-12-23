import { Colors } from "@/shared/constants/theme";
import { StyleSheet, View } from "react-native";

export default function CameraRecordButton() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        backgroundColor: Colors.dark.white,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: 26,
        height: 26,
        backgroundColor: Colors.dark.white,
        borderColor: Colors.dark.primaryColor,
        borderRadius: 50,
        borderWidth: 3,
    },
});