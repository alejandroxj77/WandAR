import React from 'react';
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle } from 'react-native';

interface CustomInputProps extends TextInputProps {
  containerStyle?: StyleProp<TextStyle>;
}

const CustomInput: React.FC<CustomInputProps> = ({style, placeholder, ...rest}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder || "Optional Text"}
      placeholderTextColor="#A9BCC3"
      multiline={true}
      textAlignVertical="top"
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    minHeight: 110,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default CustomInput;