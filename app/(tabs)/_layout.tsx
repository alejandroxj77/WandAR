import CameraRecordButton from "@/presentation/atoms/buttons/CameraRecordButton";
import ProfileIcon from "@/presentation/atoms/icons/profileIcon";
import { Colors } from "@/shared/constants/theme";
import { Tabs } from "expo-router";
import { Pressable, View } from "react-native";

export default function TabLayout() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 30,
                    height: 64,
                    borderTopWidth: 0,
                    backgroundColor: Colors.light.primaryColor,
                    borderRadius: 100,
                    left: 20,
                    right: 20,
                    alignSelf: 'center',
                    marginHorizontal: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                tabBarShowLabel: false,
            }}>
                <Tabs.Screen name="post-content"
                    options={{
                        tabBarButton: (props) => (
                            <Pressable onPress={props.onPress} style={[props.style, { padding: 0 }]}>
                                <CameraRecordButton />
                            </Pressable>
                        ),
                    }} />
                <Tabs.Screen name="profile"
                    options={{
                        tabBarButton: (props) => (
                            <Pressable onPress={props.onPress} style={[props.style, { padding: 0, }]}>
                                <ProfileIcon width={45} height={45} />
                            </Pressable>
                        ),
                    }} />
            </Tabs>
        </View>
    );
}