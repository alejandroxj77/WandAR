import { defaultProfile, ProfileEntity } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { useAuthentication } from "@/domain/contexts/authenticationContext";
import PrimaryButton from "@/presentation/atoms/buttons/PrimaryButton";
import Label from "@/presentation/atoms/Label";
import LinearGradientBackground from "@/presentation/atoms/shared/LinearGradientBackground";
import { FormCheckboxRow } from "@/presentation/molecules/FormCheckboxRow";
import { InputIconMolecule } from "@/presentation/molecules/InputIcon";
import LabelTextButtom from "@/presentation/molecules/LabelTextButtom";
import WandARIcon from "@/presentation/molecules/WandARIcon";
import { useLoader } from "@/shared/context/loaderContext";
import { Coordinates, getCurrentCoordinates } from "@/shared/utils/locationUtils";
import { useCameraPermission, useLocationPermission } from "@/shared/utils/permissionRequest";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SignUp() {
    const insets = useSafeAreaInsets();
    const {createUser} = useAuthentication();
    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {...defaultProfile, repassword: ''},
    });
    const camera = useCameraPermission();
    const location = useLocationPermission();
    const passwordValue = watch("password");
    const { showLoader, hideLoader } = useLoader();
    const [checkOptions, setCheckOptions] = useState({terms: false, permissions: false})
    const onSubmit = async (data: ProfileEntity) => {
        try {
            let coor: Coordinates = { latitude: 0, longitude: 0 };
            showLoader({text: ''});
            if(location.granted) {
                coor = await getCurrentCoordinates();
            }
            await createUser({ profile: {
                ...data, 
                locationLatitude: coor.latitude,
                locationLongitude: coor.longitude,
                locationAccessGranted: location.granted,
                cameraAccessGranted: camera.granted,
            } });
        } finally {
            hideLoader();
        }
    };
    return (
        <LinearGradientBackground>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }} 
              keyboardShouldPersistTaps="handled"
            >
                 <View style={{
                    ...styles.container,
                    paddingBottom: insets.bottom,
                }}>
                    <View style={styles.bodyContainer}>
                        <WandARIcon appIconStyle={{ height: 80, width: 80 }} appNameStyle={{ height: 35, width: 200 }} />
                        <Label style={styles.title}>Sign Up</Label>
                        <View style={{height: 30}}/>
                        <Controller
                            control={control}
                            name="username"
                            rules={{
                                required: "Username is required",
                            }}
                            render={({ field: { onChange, onBlur, value } })=>{
                                return <View style={{ width: '100%' }}>
                                    <InputIconMolecule 
                                        prefixIcon="user"
                                        placeholder='Username'
                                        onChangeText={onChange} 
                                        value={value} 
                                        onBlur={onBlur}
                                    />
                                    {errors.username && (
                                        <Label style={styles.errorText}>{errors.username.message}</Label>
                                    )}
                                </View>
                            }}
                        />
                        <Controller
                            control={control}
                            name="email"
                            rules={{
                                required: "Email is required",
                                validate: (value) => {
                                    if (!value) return true;

                                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                    
                                    if (!emailRegex.test(value)) {
                                        return "Please enter a valid email address";
                                    }

                                    return true;
                                }
                            }}
                            render={({ field: { onChange, onBlur, value } })=>{
                                return <View style={{ width: '100%' }}>
                                    <InputIconMolecule prefixIcon="mail" placeholder='Email' onChangeText={onChange} value={value} onBlur={onBlur}/>
                                    {errors.email && (
                                        <Label style={styles.errorText}>{errors.email.message}</Label>
                                    )}
                                </View>
                            }}
                        />
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
                    </View>
                    <View>
                        <FormCheckboxRow checked={checkOptions.terms} label="I agree to the " linkText="terms and conditions" onToggle={() => {
                            setCheckOptions({...checkOptions, terms: !checkOptions.terms});
                        }}/>
                        <FormCheckboxRow checked={checkOptions.permissions} label="I accept camera and location services" onToggle={async () => {
                            if(!checkOptions.permissions) {
                                const cameraOk = await camera.request();
                                const locationOk = await location.request();

                                if (!cameraOk || !locationOk) {
                                    return;
                                }
                            }
                            setCheckOptions({...checkOptions, permissions: !checkOptions.permissions});
                        }}/>
                        <PrimaryButton label="Enter" onPress={handleSubmit(onSubmit)}/>
                    </View>
                    <View style={{height: 10}}/>
                    <LabelTextButtom 
                        label="Already have an account?" 
                        postfixText=" Click Here" 
                        postfixOnPress={()=>{
                            router.replace('/authentication/Login');
                        }}/>
                </View>
            </ScrollView>
        </LinearGradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        gap: 10,
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    title: {
        marginTop: 88,
        fontSize: 30,
        fontWeight: 'bold',
    },
    errorText: {
        color: '#FF5A5F',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
        marginLeft: 15,
    },
});