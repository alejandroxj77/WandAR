import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const LoaderAtom = ({ size = 'large', color = '#00AEEF' }: {size: number | "large" | "small" | undefined, color: string}) => {
  return (
    <ActivityIndicator 
      size={size} 
      color={color} 
      style={styles.loader} 
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    margin: 20,
  },
});

export default LoaderAtom;