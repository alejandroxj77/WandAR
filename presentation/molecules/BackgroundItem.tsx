import React from 'react';
import { ImageBackground, ImageSourcePropType, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Label from '../atoms/Label';

export default function BackgroundItem({source, style}: {source?: ImageSourcePropType, style?: StyleProp<ViewStyle>}) {
  return <ImageBackground
        style={[styles.mapImage, style]}
        source={source}
        imageStyle={{ borderRadius: 12 }}
        resizeMode="cover"
    >
        <View style={styles.lockedIndicator}>
            <Label style={styles.lockedText}>Unlock/100 🟡</Label>
        </View>
    </ImageBackground>
}

const styles = StyleSheet.create({
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