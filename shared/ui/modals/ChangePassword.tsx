import PrimaryButton from '@/presentation/atoms/buttons/PrimaryButton';
import TextButton from '@/presentation/atoms/buttons/TextButton';
import Label from '@/presentation/atoms/Label';
import { InputIconMolecule } from '@/presentation/molecules/InputIcon';
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from 'react-native';

const ChangePasswordModal = ({onClose, onSubmit}: {onClose(): void, onSubmit(password: string): void}) => {
    const {control, handleSubmit, formState: { errors }, watch} = useForm({
        defaultValues: {
            password: '',
            repassword: '',
            rerepassword: '',
        }
    });

    const passwordValue = watch("password");
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', gap: 10, flex: 1, padding: 16}}>
            <Controller
                control={control}
                name="password"
                rules={{
                    required: "Password is required",
                    minLength: { value: 8, message: "Minimum 8 characters" },
                    validate: {
                        hasUpperCase: (v='') => /[A-Z]/.test(v) || "Must include an uppercase letter",
                        hasLowerCase: (v='') => /[a-z]/.test(v) || "Must include a lowercase letter",
                        hasNumber: (v='') => /[0-9]/.test(v) || "Must include a number",
                    }
                }}
                render={({ field: { onChange, onBlur, value } })=>{
                    return <View style={{ width: '100%' }}>
                        <InputIconMolecule 
                            prefixIcon="password" 
                            placeholder='Password' 
                            postfixIcon="toggle_password" 
                            onChangeText={onChange} 
                            value={value} 
                            onBlur={onBlur}
                        />
                        {errors.password && (
                            <Label style={styles.errorText}>{errors.password.message}</Label>
                        )}
                    </View>
                }}
            />
            <Controller
                control={control}
                name="repassword"
                rules={{
                    required: "Password is required",
                    minLength: { value: 8, message: "Minimum 8 characters" },
                    validate: {
                        hasUpperCase: (v='') => /[A-Z]/.test(v) || "Must include an uppercase letter",
                        hasLowerCase: (v='') => /[a-z]/.test(v) || "Must include a lowercase letter",
                        hasNumber: (v='') => /[0-9]/.test(v) || "Must include a number",
                        matchPassword: (v='') => v === passwordValue || "Passwords do not match"
                    }
                }}
                render={({ field: { onChange, onBlur, value } })=>{
                    return <View style={{ width: '100%' }}>
                        <InputIconMolecule 
                            prefixIcon="password" 
                            placeholder='Re-Password' 
                            postfixIcon="toggle_password"
                            onChangeText={onChange} 
                            value={value} 
                            onBlur={onBlur}
                        />
                        {errors.repassword && (
                            <Label style={styles.errorText}>{errors.repassword.message}</Label>
                        )}
                    </View>
                }}
            />
            <Controller
                control={control}
                name="rerepassword"
                rules={{
                    required: "Password is required",
                    minLength: { value: 8, message: "Minimum 8 characters" },
                    validate: {
                        hasUpperCase: (v='') => /[A-Z]/.test(v) || "Must include an uppercase letter",
                        hasLowerCase: (v='') => /[a-z]/.test(v) || "Must include a lowercase letter",
                        hasNumber: (v='') => /[0-9]/.test(v) || "Must include a number",
                        matchPassword: (v='') => v === passwordValue || "Passwords do not match"
                    }
                }}
                render={({ field: { onChange, onBlur, value } })=>{
                    return <View style={{ width: '100%' }}>
                        <InputIconMolecule 
                            prefixIcon="password" 
                            placeholder='Re-Password' 
                            postfixIcon="toggle_password"
                            onChangeText={onChange} 
                            value={value} 
                            onBlur={onBlur}
                        />
                        {errors.rerepassword && (
                            <Label style={styles.errorText}>{errors.rerepassword.message}</Label>
                        )}
                    </View>
                }}
            />

            <PrimaryButton label='Change' labelStyle={{fontSize: 18, paddingHorizontal: 80}} onPress={handleSubmit(({password})=>onSubmit(password))}/>

            <TextButton label='Cancel' onPress={()=>{onClose}} styles={{textDecorationLine: 'underline', fontSize: 18}}/>
        </View>
    );
};

const styles = StyleSheet.create({
  errorText: {
        color: '#FF5A5F',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
        marginLeft: 15,
    },
});

export default ChangePasswordModal;