import CameraRecordButton from "@/presentation/atoms/buttons/CameraRecordButton";
import { Colors } from "@/shared/constants/theme";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
    return (
        <View style={{ flex: 1, position: 'relative' }}>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    height: 64,
                    borderTopWidth: 0,
                    backgroundColor: Colors.light.primaryColor,
                    borderRadius: 100,
                    left: 20,
                    right: 20,
                    alignSelf: 'center',
                    marginHorizontal: 15,
                }
            }}>
                <Tabs.Screen name="post-content"
                    options={{
                        title: 'Post Content',
                        tabBarIcon: ({ color, size }) => (
                            <CameraRecordButton />
                        )
                    }} />
            </Tabs>
        </View>
    );
}