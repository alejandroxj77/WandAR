import * as ImagePicker from 'expo-image-picker';

///This method returns the uri of the selected media picked from the gallery
const pickImage = async ({ mediaTypes = ['images'] }: { mediaTypes?: ImagePicker.MediaType[] }): Promise<{ imageUri: string, type: string }> => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: mediaTypes,
    allowsEditing: true,
    selectionLimit: 1,
    quality: 0.7,
  });

  if (!result.canceled) {
    const imageUri = result.assets[0].uri;
    return { imageUri, type: result.assets[0].type!.toString() };
  }

  throw new Error("No media picked");
};

export default pickImage;