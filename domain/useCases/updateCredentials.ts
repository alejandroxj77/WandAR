import { ProfileRepositoryImpl } from "@/data/repositories/profileRepositoryImpl";

export default async function UpdateCredentialsUseCase({ newPassword, profileRepository }: { newPassword: string, profileRepository: ProfileRepositoryImpl }): Promise<any> {
    try {
        const response = await profileRepository.patchCredentials(newPassword);
        return response;
    } catch (error) {
        throw error;
    }
};
