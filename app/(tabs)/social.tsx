import PrimaryButton from '@/presentation/atoms/buttons/PrimaryButton';
import LinearGradientBackground from '@/presentation/atoms/shared/LinearGradientBackground';
import { InputIconMolecule } from '@/presentation/molecules/InputIcon';
import UserListItem from '@/presentation/molecules/UserListItem';
import { useModal } from '@/shared/context/modalContext';
import UnfriendModal from '@/shared/ui/modals/unfriend';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FlatList, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Social() {
  const insets = useSafeAreaInsets();
  const { showModal } = useModal();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { search: '' }
  });
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
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10
          }}>
            <Controller
              control={control}
              name="search"
              render={({ field: { onChange, onBlur, value } })=>{
                  return <View style={{flex: 1}}>
                      <InputIconMolecule 
                        styleContainer={{marginBottom: 0}}
                        postfixIcon="search"
                        placeholder='Search'
                        onChangeText={onChange}
                        value={value}
                        onBlur={onBlur}
                      />
                  </View>
              }}
            />
            <PrimaryButton
              label='Sort by'
              styles={{
                paddingVertical: 12
              }}
              onPress={()=>{}}
            />
            <Pressable onPress={()=>{}} style={[]}>
                <MaterialIcons name="person-add-alt-1" size={28} color="#0099FF" />
            </Pressable>
          </View>
          <View style={{
            alignItems: 'center',
            marginBottom: insets.bottom + 40,
          }}>
            <FlatList
              data={[1,2,3,4,5,6,7,8,9,0]}
              showsVerticalScrollIndicator={false}
              renderItem={
                  (user)=>{
                    return <UserListItem 
                      key={user+'user'} 
                      user={undefined} 
                      type="remove"
                      onRemove={async ()=>{
                        const content = <UnfriendModal userName={user+'user'}/>;
                        const result = await showModal({
                            content,
                            height: 250
                        });
                        if(result){
                            
                        }
                      }}
                    />
                  }
              }
            />
          </View>
      </View>
    </LinearGradientBackground>
  )
}
