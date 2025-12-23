import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

const SettingsDropdown = ({ label, value, style }: {label: string, value: string, style?: ViewStyle}) => {
  return (
    <View style={[styles.rowContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.dropdownButton} activeOpacity={0.8}>
        <Text style={styles.dropdownText}>{value}</Text>
        <Ionicons name="chevron-down" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b2a',
    padding: 20,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  dropdownButton: {
    flexDirection: 'row',
    backgroundColor: '#37474f',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 80,
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  spacer: {
    height: 15,
  },
});