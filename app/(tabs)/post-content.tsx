import { ViroARScene, ViroARSceneNavigator } from '@reactvision/react-viro';
import ObjectPickerMenu from '../../presentation/molecules/ObjectPickerMenu';

export default function PostContent() {
    return (
        <>
            <ViroARSceneNavigator
                initialScene={{ scene: () => <ViroARScene></ViroARScene> }}
                style={{ flex: 1 }}
            >
            </ViroARSceneNavigator>
            <ObjectPickerMenu />
        </>
    );
}