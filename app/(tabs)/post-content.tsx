import { usePostContent } from '@/domain/contexts/postContentContext';
import { Viro3DObject, ViroARScene, ViroNode, ViroVideo } from '@reactvision/react-viro';
import { useEffect } from 'react';
import { View } from 'react-native';

const ARScene = () => {
    const { videos, shapes } = usePostContent();

    return (
        <ViroARScene>
            {videos.map((video, index) => (
                <ViroVideo
                    key={`${video}-${index}`} // Add a key to force re-render if URI changes
                    source={{ uri: video }}
                    loop={true}
                    position={[0, 0, -3]}
                    scale={[1, 1, 0]}
                />
            ))}
            {shapes.map((shape, index) => (
                <ViroNode position={[0, 0, -3]} key={`${shape}-${index}`}>
                    <Viro3DObject
                        source={{ uri: shape }}
                        position={[0, 0, -1]}
                        type='GLB'
                        onError={(event) => console.error('Viro3DObject Error:', event.nativeEvent.error)}
                    />
                </ViroNode>
            ))}
        </ViroARScene>
    );
};

export default function PostContent() {
    const { videos } = usePostContent();

    useEffect(() => {
        console.log(videos);
    }, [videos]);
    return (
        <View style={{ flex: 1 }}>
            {/* <ViroARSceneNavigator
                initialScene={{
                    scene: ARScene
                }}
                style={{ flex: 1 }}
            >
            </ViroARSceneNavigator>
            <ObjectPickerMenu /> */}
        </View>
    );
}