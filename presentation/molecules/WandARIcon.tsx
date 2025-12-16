import { StyleSheet, View, ViewStyle } from "react-native";
import AppName from "../atoms/icons/AppName";
import AppIcon from "../atoms/icons/Icon";

export default function WandARIcon({ appIconStyle, appNameStyle }: { appIconStyle?: ViewStyle, appNameStyle?: ViewStyle }) {
    return (
        <View style={styles.container}>
            <AppIcon height={appIconStyle?.height} width={appIconStyle?.width} />
            <AppName height={appNameStyle?.height} width={appNameStyle?.width} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
});