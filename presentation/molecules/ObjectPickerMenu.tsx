import { usePostContent } from "@/domain/contexts/postContentContext";
import { useLoader } from "@/shared/context/loaderContext";
import { pickFile } from "@/shared/utils/filePickerUtils";
import pickImage from "@/shared/utils/imagePickerUtils";
import { BlurView } from "expo-blur";
import { Pressable, StyleSheet } from "react-native";
import { Video } from 'react-native-compressor';
import GalleryIcon from "../atoms/icons/GalleryIcon";
import ShapesIcon from "../atoms/icons/ShapesIcon";


export default function ObjectPickerMenu() {
    const { showLoader, hideLoader } = useLoader();
    const { addVideo, addImage, addShape } = usePostContent();

    async function handleFilePress() {
        // Example: Only pick GLB files (common for 3D AR)
        // Use '*/*' for any file type
        const file = await pickFile(['model/gltf-binary', 'application/octet-stream']);

        if (file) {
            console.log("File picked:", file.uri);
            // If you have a context for shapes/3D models:
            addShape({ shapeUri: file.uri });
        }
    }

    async function handleGalleryPress() {
        try {
            const mediaPicked = await pickImage({ mediaTypes: ['images', 'videos'] });
            //Check if the media is a video or an image
            if (mediaPicked.type == "video") {
                showLoader({ text: "Identifying Video Format" });
                // Transcode the .mov to .mp4
                // By default, 'auto' compression method outputs an optimized mp4
                const mp4Uri = await Video.compress(
                    mediaPicked.imageUri,
                    {
                        compressionMethod: 'auto',
                    }
                );
                console.log("MP4 URI:", mp4Uri);
                addVideo({ videoUri: mp4Uri });
            } else {
                addImage({ imageUri: mediaPicked.imageUri });
            }
        } catch (error) {
            console.error("Error picking/converting media:", error);
        } finally {
            hideLoader();
        }
    }

    return (
        <Pressable style={styles.container}>
            <BlurView intensity={20} style={styles.blur} />
            <Pressable onPress={handleFilePress}>
                <ShapesIcon />
            </Pressable>
            <Pressable onPress={handleGalleryPress}>
                <GalleryIcon />
            </Pressable>
        </Pressable>)
}

const styles = StyleSheet.create({
    container: {
        width: 45,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22.5,
        overflow: 'hidden',
        position: 'absolute',
        right: 16,
        marginVertical: 20,
        bottom: 20,
        top: 50,
        gap: 18,
    },
    blur: {
        ...StyleSheet.absoluteFillObject,
    },
});