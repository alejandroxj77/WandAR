import { ViroARScene, ViroARSceneNavigator } from '@reactvision/react-viro';

export default function PostContent() {
    return (
        <ViroARSceneNavigator
            initialScene={{ scene: () => <ViroARScene /> }}
            style={{ flex: 1 }}
        >
        </ViroARSceneNavigator>
    );
}