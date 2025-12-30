import { ProfileRepositoryImpl } from "@/data/repositories/profileRepositoryImpl";
import RNBlobUtil from 'react-native-blob-util';

export default async function updateAvatarUseCase({ filePath, profileRepository }: { filePath: string, profileRepository: ProfileRepositoryImpl }): Promise<any> {
    try {
        const presignedUrlData = await profileRepository.postPresignedUrl();

        await profileRepository.ejecPresignedUrl(presignedUrlData.presignedUrl, RNBlobUtil.wrap(filePath))

        console.log(process.env.EXPO_PUBLIC_AWS_S3_BUCKET_BASE_URL + presignedUrlData.key)

        const perfil = await profileRepository.patchProfile({
            avatarImageUrl: process.env.EXPO_PUBLIC_AWS_S3_BUCKET_BASE_URL + presignedUrlData.key,
        });

        console.log(perfil)

        return;
    } catch (error) {
        console.log('error')
        console.log(error)
        throw error
    }
};
