import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Eye from '../atoms/icons/eye';
import EyeClose from '../atoms/icons/eye_close';
import Lock from '../atoms/icons/lock';
import Mail from '../atoms/icons/mail';
import Search from '../atoms/icons/search';
import User from '../atoms/icons/user';
import InputAtom, { InputAtomProps } from '../atoms/InputField';

type PrefixIconKey = "mail" | "user" | "password";
type PostfixIconKey = "toggle_password" | "search";

interface InputIconProps {
  prefixIcon?: PrefixIconKey;
  postfixIcon?: PostfixIconKey;
}

const PrefixIcons: Record<PrefixIconKey, React.ElementType> = {
  mail: Mail,
  user: User,
  password: Lock,
};

export const InputIconMolecule = ({ 
  prefixIcon = undefined, 
  postfixIcon = undefined,
  ...props
}: InputIconProps & InputAtomProps) => {

  const isPasswordToggle = postfixIcon === "toggle_password";
  const [secureTextEntry, setSecureTextEntry] = React.useState(isPasswordToggle);

  const PrefixComponent = prefixIcon ? PrefixIcons[prefixIcon] : null;

  let PostfixComponent: React.ElementType | null = null;
  let onPressPostfix: (() => void) | undefined = undefined;

  if (isPasswordToggle) {
    PostfixComponent = secureTextEntry ? EyeClose : Eye;
    onPressPostfix = () => setSecureTextEntry(prev => !prev);
  } else if (postfixIcon === "search") {
    PostfixComponent = Search;
  }
  
  const PostfixElement = PostfixComponent ? (
    <Pressable 
      onPress={onPressPostfix} 
    >
      <PostfixComponent />
    </Pressable>
  ) : null;


  return (
    <View style={styles.container}>
      {PrefixComponent && (
        <View style={styles.iconContainer}> 
           <PrefixComponent /> 
        </View>
      )}
      
      <InputAtom
        {...props}
        style={styles.input}
        secureTextEntry={isPasswordToggle ? secureTextEntry : false}
      />
      
      {PostfixElement}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  iconContainer: {
    marginRight: 10, // Espaciado entre icono e input
  },
  input: {
    flex: 1, // Esto hace que el input ocupe todo el ancho restante
    height: '100%',
    color: 'white',
    // Quitamos bordes y fondos que ya tiene el contenedor
    backgroundColor: 'transparent', 
    borderWidth: 0,
    paddingHorizontal: 5, // Un pequeño respiro interno
  },
});