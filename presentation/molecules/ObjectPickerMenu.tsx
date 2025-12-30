import { BlurView } from "expo-blur";
import { Pressable, StyleSheet, View } from "react-native";
import ShapesIcon from "../atoms/icons/ShapesIcon";

export default function ObjectPickerMenu() {
    return <View>
        <Pressable style={styles.container}>
            <BlurView intensity={20} style={styles.blur} />
            <ShapesIcon />
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22.5,
        overflow: 'hidden',
        position: 'relative',
        right: 16,
        marginVertical: 20,
    },
    blur: {
        ...StyleSheet.absoluteFillObject,
    },
});