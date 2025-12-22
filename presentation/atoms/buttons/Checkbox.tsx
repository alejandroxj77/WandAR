// src/components/atoms/Checkbox.tsx
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  activeColor?: string;
}

export const Checkbox = ({ checked, onPress, activeColor = '#0088cc' }: CheckboxProps) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[
        styles.container, 
        checked && { borderColor: activeColor, backgroundColor: 'transparent' }
      ]}
    >
      {checked && <View style={[styles.inner, { backgroundColor: activeColor }]} />}
      {/* Alternativa con Icono: 
          {checked && <Check size={16} color="white" strokeWidth={3} />} 
      */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
});