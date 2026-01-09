import PrimaryButton from '@/presentation/atoms/buttons/PrimaryButton';
import TextButton from '@/presentation/atoms/buttons/TextButton';
import Label from '@/presentation/atoms/Label';
import { useModal } from '@/shared/context/modalContext';
import React from 'react';
import { View } from 'react-native';

const UnfriendModal = ({userName}:{userName: string}) => {
    const { hideModal } = useModal();

    return (
        <View style={{justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: 16}}>

           <Label>Unfriend</Label> 
           <Label>{userName}</Label> 
            

            <PrimaryButton label='Unfriend' labelStyle={{fontSize: 18, paddingHorizontal: 80}} styles={{backgroundColor: 'red'}} onPress={()=>{}}/>

            <TextButton label='Cancel' onPress={hideModal} styles={{textDecorationLine: 'underline', fontSize: 18}}/>
        </View>
    );
};

export default UnfriendModal;