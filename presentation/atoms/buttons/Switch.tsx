import React from 'react';
import { StyleSheet, Switch, View, ViewStyle } from 'react-native';
import Label from '../Label';

const SettingsSwitch = ({ label, value, onValueChange, style }: {label: string, value: boolean, onValueChange(): void, style?: ViewStyle}) => {
  return (
    <View style={[styles.rowContainer, style]}>
      <Label>{label}</Label>
      <Switch
        trackColor={{ false: '#455a64', true: '#00b0ff' }}
        thumbColor={value ? '#00b0ff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default SettingsSwitch;

const styles = StyleSheet.create({
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  spacer: {
    height: 15,
  },
});