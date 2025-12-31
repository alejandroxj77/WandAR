import { ViroARScene, ViroARSceneNavigator, ViroNode, ViroVideo } from '@reactvision/react-viro';
import { View } from 'react-native';
import ObjectPickerMenu from '../../presentation/molecules/ObjectPickerMenu';

export default function PostContent() {
    return (
        <View style={{ flex: 1 }}>
            <ViroARSceneNavigator
                initialScene={{
                    scene: () => <ViroARScene>
                        <ViroNode position={[0, 0, -3]}>
                            {/* <Viro3DObject
                                type="GLTF"
                                source={require('../../assets/example_3d_models/shiba/scene.gltf')}
                                position={[0, 0, -1]}
                                materials={[
                                    require('../../assets/example_3d_models/shiba/textures/default_baseColor.png')
                                ]}
                                resources={[
                                    require('../../assets/example_3d_models/shiba/scene.bin')
                                ]}
                            /> */}
                            <ViroVideo
                                source={require('../../assets/example_videos/eyes_without_a_face.mp4')}
                                loop={true}
                                position={[0, 2, -5]}
                                scale={[2, 2, 0]}
                            />
                        </ViroNode>
                    </ViroARScene>
                }}
                style={{ flex: 1 }}
            >
            </ViroARSceneNavigator>
            <ObjectPickerMenu />
        </View>
    );
}