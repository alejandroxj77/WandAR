import { Colors } from "@/shared/constants/theme";
import { Text, View } from "react-native";

export default function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.dark.white }}>
            <Text>Profile</Text>
        </View>
    );
}