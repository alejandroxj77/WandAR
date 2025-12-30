import * as ImagePicker from 'expo-image-picker';

const pickImage = async (): Promise<string | null> => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    selectionLimit: 1,
    quality: 0.7,
  });

  if (!result.canceled) {
    const imageUri = result.assets[0].uri;
    return imageUri;
  }

  return null;
};

export default pickImage;