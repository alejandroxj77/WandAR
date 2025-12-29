import { Ionicons } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/elements';
import { router } from 'expo-router';
import React from 'react';

const BackButton = () => {
  return (
    <HeaderBackButton
        onPress={() => router.back()}
        backImage={() => (
            <Ionicons 
                name="arrow-back" 
                size={35}
                color="#FFFFFF" 
            />
        )}
    />
  );
};

export default BackButton;