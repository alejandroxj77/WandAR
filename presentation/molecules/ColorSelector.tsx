import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const COLORS = [
  '#FFFFFF', '#000000', '#C0C0C0', '#FF3B30', 
  '#AF0000', '#FF9500', '#FF7A00', '#FFF3B0', 
  '#FFD700', '#34C759'
];

export default function ColorSelector({ onColorSelect }: { onColorSelect(color: string): void }) {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  const handlePress = (color: string) => {
    setSelectedColor(color);
    if (onColorSelect) onColorSelect(color);
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {COLORS.map((color, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(color)}
            style={[
              styles.colorCircle,
              { backgroundColor: color },
              selectedColor === color && styles.selectedCircle
            ]}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    height: 65,
    backgroundColor: '#1C2533',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    alignSelf: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    gap: 12,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  selectedCircle: {
    borderWidth: 3,
    borderColor: '#007AFF',
    transform: [{ scale: 1.1 }],
  },
});