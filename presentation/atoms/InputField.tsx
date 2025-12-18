import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

// Definimos la interfaz extendiendo las propiedades nativas de TextInput
// Esto permite que el componente reciba 'placeholder', 'onChangeText', 'secureTextEntry', etc.
export interface InputAtomProps extends TextInputProps {
  
}

const InputAtom: React.FC<InputAtomProps> = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#AAAAAA"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'white',
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
  },
});

export default InputAtom;