import { useSocial } from '@/domain/contexts/socialContext';
import PrimaryButton from '@/presentation/atoms/buttons/PrimaryButton';
import LoaderAtom from '@/presentation/atoms/LoaderAtom';
import LinearGradientBackground from '@/presentation/atoms/shared/LinearGradientBackground';
import EmptyState from '@/presentation/molecules/EmptyState';
import { InputIconMolecule } from '@/presentation/molecules/InputIcon';
import UserListItem from '@/presentation/molecules/UserListItem';
import { useModal } from '@/shared/context/modalContext';
import UnfriendModal from '@/shared/ui/modals/Unfriend';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FlatList, Pressable, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Social() {
  const insets = useSafeAreaInsets();
  const { showModal } = useModal();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { search: '' }
  });
  const { friends, getFriends } = useSocial();

  useEffect(() => {
    getFriends();
  }, []);
  

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
            {
              friends == undefined 
              ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <LoaderAtom
                    color='white'
                    size={'large'}
                  />
                </View>
              : friends.length == 0 
                ? <View style={{flex: 1, justifyContent:'center', alignContent: 'center'}}>
                    <EmptyState 
                      title='Find Your Scouting Partners'
                      description='It looks like you’re exploring solo for now. Bring your friends along for the ride and start building your AR community today.' 
                      buttonLabel='Invite friends' 
                      height={'50%'} 
                      iconName={'face-man'} 
                      onPress={()=>{}} 
                    />
                  </View> 
                : <FlatList
                    data={friends}
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
              }
          </View>
      </View>
    </LinearGradientBackground>
  )
}
