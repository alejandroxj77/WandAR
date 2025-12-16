import Label from "@/presentation/atoms/Label";
import LinearGradientBackground from "@/presentation/atoms/shared/LinearGradientBackground";
import WandARIcon from "@/presentation/molecules/WandARIcon";
import { StyleSheet, View } from "react-native";

export default function Login() {
    return (
        <LinearGradientBackground>
            <View style={styles.container}>
                <WandARIcon appIconStyle={{ height: 80, width: 80 }} appNameStyle={{ height: 35, width: 200 }} />
                <Label style={styles.title}>Welcome!</Label>
            </View>
        </LinearGradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 88,
        fontSize: 30,
        fontWeight: 'bold',
    },
});