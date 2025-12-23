import SettingsDropdown from "@/presentation/atoms/buttons/Dropdown";
import MapModeSelector from "@/presentation/atoms/buttons/MapModeSelector";
import PrimaryButton from "@/presentation/atoms/buttons/PrimaryButton";
import SettingsSwitch from "@/presentation/atoms/buttons/Switch";
import Label from "@/presentation/atoms/Label";
import LinearGradientBackground from "@/presentation/atoms/shared/LinearGradientBackground";
import { ColumnLabelsInfo } from "@/presentation/molecules/ColumnLabelsInfo";
import ProfileAvatar from "@/presentation/molecules/ProfileAvatar";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Profile() {
    const insets = useSafeAreaInsets();
    
    return (
        <LinearGradientBackground>
            <View style={{
                flex: 1,
                padding: 16,
                paddingTop: insets.top,
                marginBottom: insets.bottom + 100,
                alignItems: 'center',
                gap: 25
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
                <Label style={{fontSize: 22}}>{'[WandARer009]'}</Label>
                <PrimaryButton label="WandAR Pro" labelStyle={{fontSize: 18}} styles={{backgroundColor: 'red', paddingVertical:10, paddingHorizontal: 35}} onPress={()=>{}}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                    <PrimaryButton label="Settings" styles={style.tabsButtom} labelStyle={style.tabsLabel} onPress={()=>{}}/>
                    <PrimaryButton label={`Followed\nUsers`} styles={style.tabsButtom} labelStyle={style.tabsLabel} onPress={()=>{}}/>
                    <PrimaryButton label={`Blocked\nUsers`} styles={style.tabsButtom} labelStyle={style.tabsLabel} onPress={()=>{}}/>
                    <PrimaryButton label={`About\nWandAR`} styles={style.tabsButtom} labelStyle={style.tabsLabel} onPress={()=>{}}/>
                </View>
                <Label style={{fontSize: 18}}>{'[john.smith@hotmail.com]'}</Label>
                <View style={{width: '85%', height: 2, backgroundColor: '#0097D3', opacity: .2}}/>
                <ScrollView style={{width: '100%'}}>
                    <View style={{gap: 25, alignItems: 'center'}}>
                        <PrimaryButton label="Change Account Passaword" labelStyle={{fontSize: 18}} styles={{paddingVertical:13, paddingHorizontal: 35, width: '85%'}} onPress={()=>{}}/>
                        <PrimaryButton label="Change Account Username" labelStyle={{fontSize: 18}} styles={{paddingVertical:13, paddingHorizontal: 35, width: '85%'}} onPress={()=>{}}/>
                        <View style={{width: '85%', height: 2, backgroundColor: '#0097D3', opacity: .2}}/>
                        <Label style={{fontSize: 20}}>{'Updates'}</Label>
                        <SettingsSwitch label="Automatic Updates" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <PrimaryButton label="Check For Updates" labelStyle={{fontSize: 18}} disabled styles={{paddingVertical:13, paddingHorizontal: 35, width: '85%'}} onPress={()=>{}}/>
                        <View style={{width: '85%', height: 2, backgroundColor: '#0097D3', opacity: .2}}/>
                        <Label style={{fontSize: 20}}>{'Notifications'}</Label>
                        <SettingsDropdown label="Object in proximity" value={'100 m'} style={{width: '80%'}}/>
                        <SettingsDropdown label="Previously viewed object in proximity" value={'off'} style={{width: '80%'}}/>
                        <SettingsSwitch label="Friends request" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Followed by new user" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Friend/followed user posts" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsDropdown label="Post about to expire" value={'1 day remaining'} style={{width: '80%'}}/>
                        <SettingsSwitch label="Post timed out" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsDropdown label="Friend post about to expire" value={'1 day remaining'} style={{width: '80%'}}/>
                        <SettingsSwitch label="Post has been reported" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Message from friend" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="New feature(s) available" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsDropdown label="Object viewed" value={'10 times'} style={{width: '80%'}}/>
                        <SettingsSwitch label="Object sold" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <View style={{width: '85%', height: 2, backgroundColor: '#0097D3', opacity: .2}}/>
                        <Label style={{fontSize: 20}}>{'Home Screen Tools'}</Label>
                        <SettingsSwitch label="Hide Buttons" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Public / Private" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Text" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Pencil" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Shapes" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Camera Roll" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Audio" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Upload" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Camera Off" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Switch Camera" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <SettingsSwitch label="Camera Flash" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <View style={{width: '85%', height: 2, backgroundColor: '#0097D3', opacity: .2}}/>
                        <Label style={{fontSize: 20}}>{'Mode'}</Label>
                        <SettingsSwitch label="Color Mode" onValueChange={()=>{}} value style={{width: '80%'}}/>
                        <MapModeSelector/>
                        <View style={{width: '85%', height: 2, backgroundColor: '#0097D3', opacity: .2}}/>
                        <View style={{flexDirection: 'row', width: '85%', justifyContent: 'space-between'}}>
                            <View style={{width: '45%', gap: 15}}>
                                <PrimaryButton label="Reset Cache" labelStyle={style.tabsLabel}  styles={{paddingVertical:13, paddingHorizontal: 15}} onPress={()=>{}}/>
                                <PrimaryButton label="User Feedback" labelStyle={style.tabsLabel}  styles={{paddingVertical:13, paddingHorizontal: 15}} onPress={()=>{}}/>
                            </View>
                            <View style={{width: '45%', gap: 15}}>
                                <PrimaryButton label="Sign Out" labelStyle={style.tabsLabel}  styles={{backgroundColor: 'red', paddingVertical:13, paddingHorizontal: 15}} onPress={()=>{}}/>
                                <PrimaryButton label="Delete Account" labelStyle={style.tabsLabel}  styles={{paddingVertical:13, paddingHorizontal: 15}} onPress={()=>{}}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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