import { BlurView } from "expo-blur";
import { Pressable, StyleSheet } from "react-native";
import ShapesIcon from "../atoms/icons/ShapesIcon";

export default function ObjectPickerMenu() {
    return (
        <Pressable style={styles.container}>
            <BlurView intensity={20} style={styles.blur} />
            <ShapesIcon />
        </Pressable>)
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22.5,
        overflow: 'hidden',
        position: 'absolute',
        right: 16,
        marginVertical: 20,
        bottom: 20,
        top: 50,
    },
    blur: {
        ...StyleSheet.absoluteFillObject,
    },
});