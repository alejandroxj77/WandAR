import { BlurView } from 'expo-blur';
import LottieView from 'lottie-react-native';
import { StyleSheet, Text, useWindowDimensions } from "react-native";

export default function Loader({ message }: { message: string, }) {

    const layout = useWindowDimensions();

    return (
        <BlurView style={[styles.scaffold, { width: layout.width, height: layout.height }]}
            intensity={10}
        >
            <LottieView
                loop={true}
                autoPlay={true}
                source={require('@/assets/lotties/loading_spinner.json')}
                duration={9000}
                style={styles.lottie}
            />
            {message.length > 0 && <Text style={styles.messageStyle}>
                {message}
            </Text>}
        </BlurView>
    );
}

const styles = StyleSheet.create({
    scaffold: {
        flex: 1,
        display: 'flex',
        paddingBottom: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000008f',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99999
    },
    lottie: {
        width: 300,
        height: 300,
    },
    messageStyle: {
        fontSize: 22,
        fontWeight: '300',
        color: '#fff',
        textAlign: 'center',
    },
});