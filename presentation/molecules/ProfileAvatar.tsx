import { useAuthentication } from '@/domain/contexts/authenticationContext';
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import EditButton from '../atoms/icons/editButtom';

const ProfileAvatar = ({onPress}: {onPress?(): Promise<void> | null}) => {
  const { profile } = useAuthentication();
  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.avatarWrapper}
        onPress={() => {
          if(onPress) {
            onPress();
            return;
          }
          router.push('/profile/profile-edit');
        }}
      >
        <View style={styles.orangeCircle}>
          <Image
            source={{ uri: profile?.avatar_image_url ?? 'https://i.pravatar.cc/300' }}
            style={styles.image}
          />
        </View>

        <View 
          style={styles.editButton} 
        >
          <EditButton />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 150,
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 150,
    height: 150,
    position: 'relative',
  },
  orangeCircle: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
    backgroundColor: '#f57c00',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  editButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#00a8e8',
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ProfileAvatar;