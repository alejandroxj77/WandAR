import { useAuthentication } from "@/domain/contexts/authenticationContext";
import { useProfile } from "@/domain/contexts/profileContext";
import SettingsDropdown from "@/presentation/atoms/buttons/Dropdown";
import MapModeSelector from "@/presentation/atoms/buttons/MapModeSelector";
import PrimaryButton from "@/presentation/atoms/buttons/PrimaryButton";
import SettingsSwitch from "@/presentation/atoms/buttons/Switch";
import Label from "@/presentation/atoms/Label";
import LinearGradientBackground from "@/presentation/atoms/shared/LinearGradientBackground";
import WandARInfoScreen from "@/presentation/molecules/AboutWandAr";
import { ColumnLabelsInfo } from "@/presentation/molecules/ColumnLabelsInfo";
import ProfileAvatar from "@/presentation/molecules/ProfileAvatar";
import UserListItem from "@/presentation/molecules/UserListItem";
import { useModal } from "@/shared/context/modalContext";
import WandARPro from "@/shared/ui/modals/WandARPro";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationState, SceneMap, SceneRendererProps, TabDescriptor, TabView } from 'react-native-tab-view';

const settings = () => {
    const { profile, signOut } = useAuthentication();
    const { profileSettings, updateSetting } = useProfile();
    return (
        <View style={{
            alignItems: 'center',
            marginBottom: 60,
        }}>
            <Label style={{ fontSize: 18, paddingTop: 15, paddingBottom: 15 }}>{profile?.email}</Label>
            <View style={{ width: '95%', height: 2, backgroundColor: '#0097D3', opacity: .2 }} />
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                <View style={{ gap: 25, alignItems: 'center' }}>
                    <View />
                    <PrimaryButton label="Change Account Passaword" labelStyle={{ fontSize: 18 }} styles={{ paddingVertical: 13, paddingHorizontal: 35, width: '85%' }} onPress={() => { } } />
                    <PrimaryButton label="Change Account Username" labelStyle={{ fontSize: 18 }} styles={{ paddingVertical: 13, paddingHorizontal: 35, width: '85%' }} onPress={() => { } } />
                    <View style={{ width: '95%', height: 2, backgroundColor: '#0097D3', opacity: .2 }} />
                    <Label style={{ fontSize: 20 }}>{'Updates'}</Label>
                    <SettingsSwitch label="Automatic Updates" onValueChange={(val) => updateSetting('updates', 'automatic_updates', val)} value={profileSettings.updates.automatic_updates} style={{ width: '90%' }} />
                    <PrimaryButton label="Check For Updates" labelStyle={{ fontSize: 18 }} disabled={profileSettings.updates.automatic_updates} styles={{ paddingVertical: 13, paddingHorizontal: 35, width: '85%' }} onPress={() => { } } />
                    <View style={{ width: '95%', height: 2, backgroundColor: '#0097D3', opacity: .2 }} />
                    <Label style={{ fontSize: 20 }}>{'Notifications'}</Label>
                    <SettingsDropdown label="Object in proximity" value={'100 m'} style={{ width: '90%' }} onSelect={(val) => updateSetting('notifications', 'object_in_proximity', val)} options={['25 m', '50 m', '100 m', '200 m', 'Off']}/>
                    <SettingsDropdown label="Previously viewed object in proximity" value={'Off'} style={{ width: '90%' }} onSelect={(val) => updateSetting('notifications', 'previously_viewed_object_in_proximity', val)} options={['25 m', '50 m', '100 m', '200 m', 'Off']}/>
                    <SettingsSwitch label="Friends request" onValueChange={(val) => updateSetting('notifications', 'friends_request', val)} value={profileSettings.notifications.friends_request} style={{ width: '90%' }} />
                    <SettingsSwitch label="Followed by new user" onValueChange={(val) => updateSetting('notifications', 'followed_by_new_user', val)} value={profileSettings.notifications.followed_by_new_user} style={{ width: '90%' }} />
                    <SettingsSwitch label="Friend/followed user posts" onValueChange={(val) => updateSetting('notifications', 'friend_followed_user_posts', val)} value={profileSettings.notifications.friend_followed_user_posts} style={{ width: '90%' }} />
                    <SettingsDropdown label="Post about to expire" value={'1 day remaining'} style={{ width: '90%' }} onSelect={(val) => updateSetting('notifications', 'post_about_to_expire', val)} options={['6 hrs remaining', '12 hrs remaining', '1 day remaining', '2 days remaining', '1 week remaining', 'Off']}/>
                    <SettingsSwitch label="Post timed out" onValueChange={(val) => updateSetting('notifications', 'post_timed_out', val)} value={profileSettings.notifications.post_timed_out} style={{ width: '90%' }} />
                    <SettingsDropdown label="Friend post about to expire" value={'1 day remaining'} style={{ width: '90%' }} onSelect={(val) => updateSetting('notifications', 'friend_post_about_to_expire', val)} options={['6 hrs remaining', '12 hrs remaining', '1 day remaining', '2 days remaining', '1 week remaining', 'Off']}/>
                    <SettingsSwitch label="Post has been reported" onValueChange={(val) => updateSetting('notifications', 'post_has_been_reported', val)} value={profileSettings.notifications.post_has_been_reported} style={{ width: '90%' }} />
                    <SettingsSwitch label="Message from friend" onValueChange={(val) => updateSetting('notifications', 'message_from_friend', val)} value={profileSettings.notifications.message_from_friend} style={{ width: '90%' }} />
                    <SettingsSwitch label="New feature(s) available" onValueChange={(val) => updateSetting('notifications', 'new_features_available', val)} value={profileSettings.notifications.new_features_available} style={{ width: '90%' }} />
                    <SettingsDropdown label="Object viewed" value={'10 times'} style={{ width: '90%' }} onSelect={(val) => updateSetting('notifications', 'object_viewed', val)} options={['5 times', '10 times', '20 times', 'Off']}/>
                    <SettingsSwitch label="Object sold" onValueChange={(val) => updateSetting('notifications', 'object_sold', val)} value={profileSettings.notifications.object_sold} style={{ width: '90%' }} />
                    <View style={{ width: '95%', height: 2, backgroundColor: '#0097D3', opacity: .2 }} />
                    <Label style={{ fontSize: 20 }}>{'Home Screen Tools'}</Label>
                    <SettingsSwitch label="Hide Buttons" onValueChange={(val) => updateSetting('home_screen_tools', 'hide_buttons', val)} value={profileSettings.home_screen_tools.hide_buttons} style={{ width: '90%' }} />
                    <SettingsSwitch label="Public / Private" onValueChange={(val) => updateSetting('home_screen_tools', 'public_private_mode', val)} value={profileSettings.home_screen_tools.public_private_mode} style={{ width: '90%' }} />
                    <SettingsSwitch label="Text" onValueChange={(val) => updateSetting('home_screen_tools', 'text_enabled', val)} value={profileSettings.home_screen_tools.text_enabled} style={{ width: '90%' }} />
                    <SettingsSwitch label="Pencil" onValueChange={(val) => updateSetting('home_screen_tools', 'pencil_enabled', val)} value={profileSettings.home_screen_tools.pencil_enabled} style={{ width: '90%' }} />
                    <SettingsSwitch label="Shapes" onValueChange={(val) => updateSetting('home_screen_tools', 'shapes_enabled', val)} value={profileSettings.home_screen_tools.shapes_enabled} style={{ width: '90%' }} />
                    <SettingsSwitch label="Camera Roll" onValueChange={(val) => updateSetting('home_screen_tools', 'camera_roll_enabled', val)} value={profileSettings.home_screen_tools.camera_roll_enabled} style={{ width: '90%' }} />
                    <SettingsSwitch label="Audio" onValueChange={(val) => updateSetting('home_screen_tools', 'audio_enabled', val)} value={profileSettings.home_screen_tools.audio_enabled} style={{ width: '90%' }} />
                    <SettingsSwitch label="Upload" onValueChange={(val) => updateSetting('home_screen_tools', 'upload_enabled', val)} value={profileSettings.home_screen_tools.upload_enabled} style={{ width: '90%' }} />
                    <SettingsSwitch label="Camera Off" onValueChange={(val) => updateSetting('home_screen_tools', 'camera_off', val)} value={profileSettings.home_screen_tools.camera_off} style={{ width: '90%' }} />
                    <SettingsSwitch label="Switch Camera" onValueChange={(val) => updateSetting('home_screen_tools', 'switch_camera', val)} value={profileSettings.home_screen_tools.switch_camera} style={{ width: '90%' }} />
                    <SettingsSwitch label="Camera Flash" onValueChange={(val) => updateSetting('home_screen_tools', 'camera_flash', val)} value={profileSettings.home_screen_tools.camera_flash} style={{ width: '90%' }} />
                    <View style={{ width: '95%', height: 2, backgroundColor: '#0097D3', opacity: .2 }} />
                    <Label style={{ fontSize: 20 }}>{'Mode'}</Label>
                    <SettingsSwitch label="Color Mode" onValueChange={(val) => updateSetting('mode', 'color_mode', val)} value={profileSettings.mode.color_mode} style={{ width: '90%' }} />
                    <MapModeSelector />
                    <View style={{ width: '95%', height: 2, backgroundColor: '#0097D3', opacity: .2 }} />
                    <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between' }}>
                        <View style={{ width: '47%', gap: 15 }}>
                            <PrimaryButton label="Reset Cache" labelStyle={style.tabsLabel} styles={{ paddingVertical: 13, paddingHorizontal: 20 }} onPress={() => { } } />
                            <PrimaryButton label="User Feedback" labelStyle={style.tabsLabel} styles={{ paddingVertical: 13, paddingHorizontal: 20 }} onPress={() => { } } />
                        </View>
                        <View style={{ width: '47%', gap: 15 }}>
                            <PrimaryButton label="Sign Out" labelStyle={style.tabsLabel} styles={{ backgroundColor: 'red', paddingVertical: 13, paddingHorizontal: 20 }} onPress={signOut} />
                            <PrimaryButton label="Delete Account" labelStyle={style.tabsLabel} styles={{ paddingVertical: 13, paddingHorizontal: 20 }} onPress={() => { } } />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const followedUser = () => (
    <View style={{
        alignItems: 'center',
    }}>
        <FlatList
            data={[1,2,3,4,5,6,7,8,9,0]}
            showsVerticalScrollIndicator={false}
            renderItem={
                (user)=>{
                    return <UserListItem key={user+'user'} user={undefined} type="followed"/>
                }
            }
        />
    </View>
);

const blockedUser = () => (
    <View style={{
        alignItems: 'center',
    }}>
        <FlatList
            data={[1,2,3,4,5,6,7,8,9,0]}
            showsVerticalScrollIndicator={false}
            renderItem={
                (user)=>{
                    return <UserListItem key={user+'user'} user={undefined} type="blocked"/>
                }
            }
        />
    </View>
);

const aboutWandAr = () => (
    <WandARInfoScreen/>
);

const renderScene = SceneMap({
    settings: settings,
    followedUser: followedUser,
    blockedUser: blockedUser,
    aboutWandAr: aboutWandAr,
});

export default function Profile() {
    const insets = useSafeAreaInsets();
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const { profile } = useAuthentication();
    const { showModal, hideModal } = useModal();
    const [routes] = useState([
        { key: 'settings', title: 'Settings' },
        { key: 'followedUser', title: 'Followed\nUser' },
        { key: 'blockedUser', title: 'Blocked\nUser' },
        { key: 'aboutWandAr', title: 'About\nWandAR' },
    ]);

    const renderTabBar = (props: SceneRendererProps & {
        navigationState: NavigationState<{
            key: string;
            title: string;
        }>;
        options: Record<string, TabDescriptor<{
            key: string;
            title: string;
        }>> | undefined
    }) => {
        const { navigationState, jumpTo } = props;
        return (
            <View style={{gap:15, alignItems: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    {
                        navigationState.routes.map((tab, index) => {
                            const isFocused = navigationState.index === index;
                            let styleButtom = [style.tabsButtom, isFocused && {backgroundColor: '#ffffff'}];
                            let styleLabel = [style.tabsLabel, isFocused && {color: '#0097d3'}];
                            return <PrimaryButton key={tab.key} label={tab.title} styles={styleButtom} labelStyle={styleLabel} onPress={() => {
                                jumpTo(tab.key);
                            }}/>;
                        })
                    }
                </View>
            </View>
        );
    }
    
    return (
        <LinearGradientBackground>
            <View style={{
                flex: 1,
                padding: 16,
                paddingTop: insets.top,
                marginBottom: insets.bottom + 80,
                alignItems: 'center',
                gap: 15
            }}>
                <Label style={{fontSize: 22}}>{'[WandARer Level 1]'}</Label>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <View style={style.columnInfo}>
                        <ColumnLabelsInfo text1="Post:" text2="[87]"/>
                        <ColumnLabelsInfo text1="Followers:" text2="[4058]"/>
                    </View>
                    <ProfileAvatar/>
                    <View style={style.columnInfo}>
                        <ColumnLabelsInfo text1="Sell Slots:" text2="[3]" image="Sell"/>
                        <ColumnLabelsInfo text1="Wallet:" text2="[50]" image="Money"/>
                    </View>
                </View>
                <Label style={{fontSize: 22}}>{profile?.username}</Label>
                <PrimaryButton 
                    label="WandAR Pro" 
                    labelStyle={{fontSize: 18}} 
                    styles={{backgroundColor: 'red', paddingVertical:10, paddingHorizontal: 35}} 
                    onPress={()=>{
                        showModal({
                            content: <WandARPro onCancel={hideModal} onConfirm={()=>{}}/>,
                            dismissible: false,
                            fullScreen: true,
                        });
                    }}
                />
                <TabView
                    swipeEnabled={false}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </LinearGradientBackground>
    );
}

const style = StyleSheet.create({
    columnInfo: {
        flex: 1,
        gap: 45,
        alignItems: 'center'
    },
    tabsButtom: {
        paddingVertical: 0,
        height: 45,
        paddingHorizontal: 0,
        width: '23%'
    },
    tabsLabel: {
        fontSize: 14,
        textAlign: 'center',
    }
})