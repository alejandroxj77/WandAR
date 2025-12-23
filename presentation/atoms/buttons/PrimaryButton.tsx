import { Colors } from "@/shared/constants/theme";
import { ActivityIndicator, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import Label from "../Label";

export default function PrimaryButton({ styles, label, labelStyle, onPress, isLoading, disabled }: { styles?: ViewStyle, label: string, labelStyle?: TextStyle, onPress: () => void, isLoading?: boolean, disabled?: boolean }) {
    return (
        <TouchableOpacity style={[_styles.container, { backgroundColor: disabled ? Colors.dark.disabledColor : Colors.dark.primaryColor }, styles]} onPress={onPress}>
            {
                isLoading ? (
                    <ActivityIndicator size="small" color={Colors.dark.text} />
                ) : (
                    <Label style={labelStyle}>{label}</Label>
                )
            }
        </TouchableOpacity>
    );
}

const _styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.dark.primaryColor,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 18,
    },
});