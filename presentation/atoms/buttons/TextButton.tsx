import { TextStyle, TouchableOpacity } from "react-native";
import Label from "../Label";

export default function TextButton({ styles, label, onPress, isLoading }: { label: string, styles?: TextStyle, onPress: () => void, isLoading?: boolean }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Label style={styles}>{label}</Label>
        </TouchableOpacity>
    );
}