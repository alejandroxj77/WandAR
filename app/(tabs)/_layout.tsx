import CameraRecordButton from "@/presentation/atoms/buttons/CameraRecordButton";
import Books from "@/presentation/atoms/icons/books";
import Map from "@/presentation/atoms/icons/map";
import Message from "@/presentation/atoms/icons/message";
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
                    left: 20,
                    right: 20,
                    height: 60,
                    marginHorizontal: 15,
                    backgroundColor: Colors.light.primaryColor,
                    borderRadius: 50,
                    borderTopWidth: 0,
                    paddingBottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                },
                tabBarShowLabel: false,
            }}>
                <Tabs.Screen name="library"
                    options={{
                        tabBarButton: (props) => (
                            <Pressable onPress={props.onPress} style={[props.style, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Books width={45} height={45} />
                            </Pressable>
                        ),
                    }} />
                <Tabs.Screen name="map"
                    options={{
                        tabBarButton: (props) => (
                            <Pressable onPress={props.onPress} style={[props.style, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Map width={45} height={45} />
                            </Pressable>
                        ),
                    }} />
                <Tabs.Screen name="post-content"
                    options={{
                        tabBarButton: (props) => (
                            <Pressable onPress={props.onPress} style={[props.style, {  justifyContent: 'center', alignItems: 'center' }]}>
                                <CameraRecordButton />
                            </Pressable>
                        ),
                    }} />
                <Tabs.Screen name="profile"
                    options={{
                        tabBarButton: (props) => (
                            <Pressable onPress={props.onPress} style={[props.style, {  justifyContent: 'center', alignItems: 'center' }]}>
                                <ProfileIcon width={45} height={45} />
                            </Pressable>
                        ),
                    }} />
                <Tabs.Screen name="social"
                    options={{
                        tabBarButton: (props) => (
                            <Pressable onPress={props.onPress} style={[props.style, {  justifyContent: 'center', alignItems: 'center' }]}>
                                <Message width={45} height={45} />
                            </Pressable>
                        ),
                    }} />
            </Tabs>
        </View>
    );
}