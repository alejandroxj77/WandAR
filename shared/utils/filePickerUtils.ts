import * as DocumentPicker from 'expo-document-picker';

export const pickFile = async (type: string | string[] = '*/*') => {
    try {
        const result = await DocumentPicker.getDocumentAsync({
            type: type,
            copyToCacheDirectory: true,
        });

        if (!result.canceled) {
            return {
                uri: result.assets[0].uri,
                name: result.assets[0].name,
                mimeType: result.assets[0].mimeType,
                size: result.assets[0].size,
            };
        }

        return null;
    } catch (err) {
        console.error("Error picking document:", err);
        throw err;
    }
};