import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Label from '../Label';
import SettingsCustom from './SwitchCustom';

const SettingsSwitch = ({ label, value, onValueChange, style }: {label: string, value: boolean, onValueChange(value: boolean): Promise<void>, style?: ViewStyle}) => {
  return (
    <View style={[styles.rowContainer, style]}>
      <Label>{label}</Label>
      <SettingsCustom
        value={value}
        onValueChange={onValueChange}
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