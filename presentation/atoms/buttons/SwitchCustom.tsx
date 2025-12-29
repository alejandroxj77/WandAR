import { Colors } from '@/shared/constants/theme';
import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';

const SettingsCustom = ({value, onValueChange}: { value: boolean, onValueChange: (value: boolean) => void}) => {
  const moveAnim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(moveAnim, {
      toValue: value ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const toggleSwitch = () => {
    onValueChange(!value);
  };

  const translateX = moveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 24],
  });

  return (
    <Pressable onPress={toggleSwitch}>
        <View style={[
            styles.track, 
            { backgroundColor: value ? '#445e75' : '#3d4d5c' }
        ]}>
            <Animated.View 
            style={[
                styles.thumb, 
                { backgroundColor: value ? Colors.light.primaryColor : Colors.light.primaryColor + '60' },
                { transform: [{ translateX }] }
            ]} 
            />
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  track: {
    width: 55,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 13,
    elevation: 2,
  },
});

export default SettingsCustom;