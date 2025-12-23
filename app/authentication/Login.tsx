import { useAuthentication } from "@/domain/contexts/authenticationContext";
import PrimaryButton from "@/presentation/atoms/buttons/PrimaryButton";
import TextButton from "@/presentation/atoms/buttons/TextButton";
import Label from "@/presentation/atoms/Label";
import LinearGradientBackground from "@/presentation/atoms/shared/LinearGradientBackground";
import { InputIconMolecule } from "@/presentation/molecules/InputIcon";
import LabelTextButtom from "@/presentation/molecules/LabelTextButtom";
import WandARIcon from "@/presentation/molecules/WandARIcon";
import { useLoader } from "@/shared/context/loaderContext";
import { useCameraPermission, useLocationPermission } from "@/shared/utils/permissionRequest";
import { router } from "expo-router";
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Login() {
    const insets = useSafeAreaInsets();
    const { login } = useAuthentication();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { email: '', password: '' }
    });
    const { showLoader, hideLoader } = useLoader();
    const camera = useCameraPermission();
    const location = useLocationPermission();
    const onSubmit = async (data: {
        email: string;
        password: string;
    }) => {
        try {
            showLoader({text: ''});
            await camera.request();
            await location.request();
            await login({ email: data.email, password: data.password });
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
                        <Label style={styles.title}>Welcome!</Label>
                        <View style={{height: 30}}/>
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
                        <View style={{flexDirection: 'column',  alignItems: 'flex-end', width: '100%'}}>
                            <TextButton label="Forgot password?" onPress={()=>{}}/>
                        </View>
                    </View>
                    <PrimaryButton label="Enter" onPress={handleSubmit(onSubmit)}/>
                    <View style={{height: 10}}/>
                    <LabelTextButtom 
                        label="Don’t have an account?" 
                        postfixText=" Click Here" 
                        postfixOnPress={()=>{
                            router.replace('/authentication/SignUp');
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
    },
    errorText: {
        color: '#FF5A5F',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
        marginLeft: 15,
    },
});