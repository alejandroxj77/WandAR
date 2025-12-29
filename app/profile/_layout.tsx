import { Stack } from "expo-router";

export default function profileLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="profile-edit" options={{ headerShown: false }} />
            <Stack.Screen name="customize" options={{ headerShown: false }} />
        </Stack>
    );
}