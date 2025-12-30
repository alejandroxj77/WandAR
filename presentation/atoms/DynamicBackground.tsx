import React from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';

interface DynamicBackgroundProps {
  children: React.ReactNode;
  backgroundColor?: string;
  imageSource?: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  useSafeArea?: boolean;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({
  children,
  backgroundColor = '#f57c00',
  imageSource,
  style,
}) => {
  if (imageSource) {
    return (
      <ImageBackground 
        source={imageSource} 
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    );
  }

  return (
    <View style={[styles.full, style, { backgroundColor }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
  },
});

export default DynamicBackground;