import BackButton from '@/presentation/atoms/buttons/BackButton';
import PrimaryButton from '@/presentation/atoms/buttons/PrimaryButton';
import LinearGradientBackground from '@/presentation/atoms/shared/LinearGradientBackground';
import BackgroundItem from '@/presentation/molecules/BackgroundItem';
import ColorSelector from '@/presentation/molecules/ColorSelector';
import { Dimensions, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Customize() {
    const insets = useSafeAreaInsets();

    return <LinearGradientBackground>
        <View style={{flex: 1, paddingTop: insets.top, paddingHorizontal: 16, gap: 15}}>
            <BackButton/>
            <View style={{height: 20}}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <PrimaryButton label='Banner' onPress={()=>{}} styles={{width: '48%', paddingVertical: 10}}/>
                <PrimaryButton label='Background' onPress={()=>{}} styles={{width: '48%', paddingVertical: 10}}/>
            </View>
            <ColorSelector onColorSelect={(color)=>{}}/>
            <FlatList
                data={[1,2,3,4,5,7,8,9,0,1,2,3,4,5,7,8,9,0]}
                numColumns={3}
                ItemSeparatorComponent={()=>(<View style={{height: 15}}/>)}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <BackgroundItem 
                        source={{uri: 'https://i.pinimg.com/736x/2f/5f/9a/2f5f9a16d7a5170a4690185f5e15e679.jpg'}} 
                        style={{
                            width: Dimensions.get('window').width / 3.4, 
                            height: Dimensions.get('window').width / 3.4,
                        }}
                    />
                )}
            />
        </View>
    </LinearGradientBackground>
}