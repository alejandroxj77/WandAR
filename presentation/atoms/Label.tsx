import { FontFamilies } from "@/shared/constants/fonts";
import { Colors } from "@/shared/constants/theme";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

export default function Label({ children, style }: { children: React.ReactNode, style?: StyleProp<TextStyle> }) {
    return <Text style={[styles.label, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    label: {
        fontFamily: FontFamilies.PantonBold,
        fontSize: 16,
        fontWeight: '700',
        color: Colors.light.text,
    },
});