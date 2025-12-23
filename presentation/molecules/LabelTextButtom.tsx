import { FontFamilies } from "@/shared/constants/fonts";
import { Colors } from "@/shared/constants/theme";
import { Pressable, StyleProp, StyleSheet, TextStyle, View } from "react-native";
import Label from "../atoms/Label";

export default function LabelTextButtom(
    { 
        style,
        label,
        postfixText,
        postfixOnPress,
    }: { 
        label: string,
        style?: StyleProp<TextStyle>,
        postfixText?: string,
        postfixOnPress?: () => void,
    }) {
    return <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
        <Label style={[styles.label, style]}>{label}</Label>
        {postfixText != null && <Pressable onPress={postfixOnPress}><Label style={[styles.secundaryLabel]}>{postfixText}</Label></Pressable>}
    </View>;
}

const styles = StyleSheet.create({
    label: {
        fontFamily: FontFamilies.PantonBold,
        fontSize: 16,
        fontWeight: '700',
        color: Colors.light.text,
    },
    secundaryLabel: {
        fontFamily: FontFamilies.PantonBold,
        fontSize: 16,
        fontWeight: '700',
        color: Colors.light.primaryColor,
    },
});