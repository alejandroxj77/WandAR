import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

interface LinearGradientBackgroundProps {
    children?: React.ReactNode;
    style?: ViewStyle;
}

export default function LinearGradientBackground({
    children,
    style,
}: LinearGradientBackgroundProps) {
    return (
        <LinearGradient
            colors={['#0E1B27', '#284F73']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={[styles.gradient, style]}
        >
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        width: '100%',
    },
});

