import { useAuthentication } from '@/domain/contexts/authenticationContext';
import BackButton from '@/presentation/atoms/buttons/BackButton';
import PrimaryButton from '@/presentation/atoms/buttons/PrimaryButton';
import DynamicBackground from '@/presentation/atoms/DynamicBackground';
import Label from '@/presentation/atoms/Label';
import LinearGradientBackground from '@/presentation/atoms/shared/LinearGradientBackground';
import BadgesContainer from '@/presentation/molecules/BadgesContainer';
import { ColumnLabelsInfo } from '@/presentation/molecules/ColumnLabelsInfo';
import CustomInput from '@/presentation/molecules/CustomInput';
import ObjectContent from '@/presentation/molecules/ObjectContent';
import ProfileAvatar from '@/presentation/molecules/ProfileAvatar';
import pickImage from '@/shared/utils/imagePickerUtils';
import { router } from 'expo-router';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileEdit() {
    const insets = useSafeAreaInsets();
    const { profile, updateLocalProfile } = useAuthentication();

    return <LinearGradientBackground>
        <View style={{flex: 1}}>
            <DynamicBackground backgroundColor='#f57c00' style={{justifyContent: 'space-evenly', height: '35%', paddingTop: insets.top, alignItems: 'center'}}>
                <Label style={{fontSize: 22}}>{'[WandARer009]'}</Label>
                <ProfileAvatar onPress={async ()=>{
                    const uri = await pickImage();
                    if(uri != null) {
                        updateLocalProfile({...profile!, avatar_image_url: uri});
                    }
                }}/>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                    <ColumnLabelsInfo text1='Post' text2='[87]'/>
                    <View/>
                    <ColumnLabelsInfo text1='Followers' text2='4058'/>
                </View>
            </DynamicBackground>
            <PrimaryButton 
                label='Customize' 
                onPress={()=>{
                    router.push('/profile/customize')
                }} 
                labelStyle={{fontSize: 16}} 
                styles={{top: -20, height: 40, width: 150, paddingVertical: 0, alignSelf: 'center'}
            }/>
            <View style={{alignItems: 'center', paddingHorizontal: 16, gap: 15}}>
                <CustomInput/>
                <FlatList
                    horizontal
                    ItemSeparatorComponent={()=>(<View style={{width: 10}}/>)}
                    data={[1,2,3,4,5,6,7,8,9,0]}
                    renderItem={()=>(<ObjectContent objectName='[object name]' price={100}/>)}
                />
                <BadgesContainer/>
            </View>
            <View style={{position: 'absolute', top: insets.top, left: 15}}>
                <BackButton/>
            </View>
        </View>
    </LinearGradientBackground>
}