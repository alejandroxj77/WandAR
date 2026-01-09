import { createContext, useContext, useState } from "react";

const PostContentContext = createContext({
    videos: [] as string[],
    images: [] as string[],
    shapes: [] as string[],
    addVideo: ({ videoUri }: { videoUri: string }) => { },
    addImage: ({ imageUri }: { imageUri: string }) => { },
    addShape: ({ shapeUri }: { shapeUri: string }) => { },
});

export const PostContentProvider = ({ children }: { children: React.ReactNode }) => {
    const [videos, setVideos] = useState<string[]>([]);
    const [images, setImages] = useState<string[]>([]);
    const [shapes, setShapes] = useState<string[]>([]);

    function addVideo({ videoUri }: { videoUri: string }) {
        setVideos([...videos, videoUri]);
    }
    function addImage({ imageUri }: { imageUri: string }) {
        setImages([...images, imageUri]);
    }
    function addShape({ shapeUri }: { shapeUri: string }) {
        setShapes([...shapes, shapeUri]);
    }

    return (
        <PostContentContext.Provider value={{ videos, images, shapes, addVideo, addImage, addShape }}>
            {children}
        </PostContentContext.Provider>
    )
}

export const usePostContent = () => {
    return useContext(PostContentContext);
}