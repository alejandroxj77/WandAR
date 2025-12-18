import PrimaryButton from "@/presentation/atoms/buttons/PrimaryButton";
import Label from "@/presentation/atoms/Label";
import LinearGradientBackground from "@/presentation/atoms/shared/LinearGradientBackground";
import { FormCheckboxRow } from "@/presentation/molecules/FormCheckboxRow";
import { InputIconMolecule } from "@/presentation/molecules/InputIcon";
import LabelTextButtom from "@/presentation/molecules/LabelTextButtom";
import WandARIcon from "@/presentation/molecules/WandARIcon";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SignUp() {
    const insets = useSafeAreaInsets();
    return (
        <LinearGradientBackground>
            <View style={{
                ...styles.container,
                paddingBottom: insets.bottom,
            }}>
                <View style={styles.bodyContainer}>
                    <WandARIcon appIconStyle={{ height: 80, width: 80 }} appNameStyle={{ height: 35, width: 200 }} />
                    <Label style={styles.title}>Sign Up</Label>
                    <View style={{height: 30}}/>
                    <InputIconMolecule prefixIcon="user" placeholder='Username'/>
                    <InputIconMolecule prefixIcon="mail" placeholder='Email'/>
                    <InputIconMolecule prefixIcon="password" placeholder='Password' postfixIcon="toggle_password"/>
                    <InputIconMolecule prefixIcon="password" placeholder='Re-Password' postfixIcon="toggle_password"/>
                </View>
                <View>
                    <FormCheckboxRow checked label="I agree to the " linkText="terms and conditions" onToggle={() => {}}/>
                    <FormCheckboxRow checked={false} label="I accept camera and location services" onToggle={() => {}}/>
                    <PrimaryButton label="Enter" onPress={()=>{}}/>
                </View>
                <View style={{height: 10}}/>
                <LabelTextButtom 
                    label="Already have an account?" 
                    postfixText=" Click Here" 
                    postfixOnPress={()=>{
                        router.push('/authentication/Login');
                    }}/>
            </View>
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
});