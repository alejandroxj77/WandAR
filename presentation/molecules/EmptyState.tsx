import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';
import Label from '../atoms/Label';
import PrimaryButton from '../atoms/buttons/PrimaryButton';

const EmptyState = ({ 
  title, 
  description, 
  buttonLabel, 
  onPress, 
  height = '100%',
  iconName = 'map-marker-radius-outline'
}: {
    title: string, 
    description: string, 
    buttonLabel: string, 
    onPress: () => void, 
    height?: DimensionValue | undefined, 
    iconName?: string | any
}) => {
  return (
    <View style={[styles.container, { height }]}>
      <MaterialCommunityIcons name={iconName} size={80} color="#fff" />
      
      <Label style={styles.title}>{title}</Label>
      
      <Label style={styles.description}>{description}</Label>

      {buttonLabel && onPress && (
        <PrimaryButton styles={{paddingVertical: 10}} label={buttonLabel} onPress={onPress}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'transparent',
    gap: 15
  },
  title: {
    fontSize: 18
  },
  description: {
    textAlign: 'center'
  },
  button: {
    marginTop: 25,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    
  },
});

export default EmptyState;