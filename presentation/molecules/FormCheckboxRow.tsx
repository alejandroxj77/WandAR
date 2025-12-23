// src/components/molecules/FormCheckboxRow.tsx
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Checkbox } from '../atoms/buttons/Checkbox';
import Label from '../atoms/Label';

interface Props {
  label: string;
  linkText?: string;
  onLinkPress?: () => void;
  checked: boolean;
  onToggle: () => void;
}

export const FormCheckboxRow = ({ label, linkText, onLinkPress, checked, onToggle }: Props) => {
  return (
    <View style={styles.row}>
      <Checkbox checked={checked} onPress={onToggle} />
      <View style={styles.textContainer}>
        <Label style={styles.text}>
          {label}
        </Label>
        {linkText && (
            <Pressable onPress={onLinkPress}>
              <Label style={styles.link}>
                {" "}{linkText}
              </Label>
            </Pressable>
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  link: {
    color: '#00a6fb',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});