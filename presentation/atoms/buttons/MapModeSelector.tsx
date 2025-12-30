import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Label from '../Label';

const MapModeSelector = () => {
  return (
    <View style={styles.container}>
      <Label>Map Mode</Label>
      <View style={styles.optionsContainer}>
        <Pressable style={styles.option}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ewp_r0C5UWHhC-T4suCP_Ae5WGzfmZNUgg&s' }}
            style={styles.mapImage}
          />
          <View style={styles.selectedIndicator}>
            <Ionicons name="checkmark" size={18} color="white" />
          </View>
        </Pressable>

        <Pressable style={styles.option}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ewp_r0C5UWHhC-T4suCP_Ae5WGzfmZNUgg&s' }}
            style={styles.mapImage}
          />
          <View style={styles.lockedIndicator}>
            <Label style={styles.lockedText}>Unlock/100 🟡</Label>
          </View>
        </Pressable>

        <Pressable style={styles.option}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ewp_r0C5UWHhC-T4suCP_Ae5WGzfmZNUgg&s' }}
            style={styles.mapImage}
          />
          <View style={styles.lockedIndicator}>
            <Label style={styles.lockedText}>Unlock/100 🟡</Label>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  option: {
    position: 'relative',
    overflow: 'hidden',
  },
  mapImage: {
    width: 75,
    height: 75,
    borderRadius: 12,
  },
  selectedIndicator: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#00AEEF',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockedIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#008CBA',
    paddingVertical: 5,
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  lockedText: {
    fontSize: 10,
  },
});

export default MapModeSelector;