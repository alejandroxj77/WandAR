import { Colors } from "@/shared/constants/theme";
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 40,
                height: 64,
                borderTopWidth: 0,
                backgroundColor: Colors.light.primaryColor,
                borderRadius: 100,
                width: '90%',
                left: 0,
                right: 0,
                marginHorizontal: 'auto',
            }
        }}>
            <Tabs.Screen name="post-content" options={{ title: 'Post Content' }} />
        </Tabs>
    );
}