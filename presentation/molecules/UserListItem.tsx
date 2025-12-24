import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import PrimaryButton from '../atoms/buttons/PrimaryButton';
import Label from '../atoms/Label';

const UserListItem = ({user, type}:{user:any, type: 'followed' | 'blocked'}) => {
  const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/147/147144.png';

  return (
    <View style={styles.container}>
        <View style={styles.leftSection}>
            <Image 
            source={{ uri: user?.avatarUrl || defaultAvatar }} 
            style={styles.avatar} 
            />
            <View style={styles.textContainer}>
            <Label style={styles.usernameText}>{user?.username ?? 'Username'}</Label>
            <Label style={styles.postsText}>Posts: {user?.posts ?? 0}</Label>
            </View>
        </View>

        {
            type == 'followed' && <View style={styles.actionsContainer}>
                <Pressable onPress={user?.onAddPress} style={styles.iconButton}>
                    <MaterialIcons name="person-add-alt-1" size={28} color="#0099FF" />
                </Pressable>
                <Pressable onPress={user?.onRemovePress} style={[styles.iconButton, styles.removeButtonMargin]}>
                    <MaterialIcons name="person-remove" size={28} color="#E50000" />
                </Pressable>
            </View>
        }
        {
            type == 'blocked' && <View style={styles.actionsContainer}>
                <PrimaryButton label='Unblock' styles={{paddingVertical:10, paddingHorizontal: 30}} onPress={()=>{}}/>
            </View>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    width: '100%'
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E1E1FF',
  },
  textContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  usernameText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  postsText: {
    color: '#B0B8C4',
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 4,
  },
  removeButtonMargin: {
    marginLeft: 15,
  }
});

export default UserListItem;