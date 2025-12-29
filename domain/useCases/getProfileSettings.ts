import { ProfileSettingsEntity } from "@/data/datasources/entities/profileSettingsEntity";
import { ProfileRepositoryImpl } from "@/data/repositories/profileRepositoryImpl";

export default async function getProfileSettingsUseCase({ profileRepository }: { profileRepository: ProfileRepositoryImpl }): Promise<ProfileSettingsEntity> {
    try {
        const userInfoSupabase = await profileRepository.getProfileSettings();
        return userInfoSupabase;
    } catch (error) {
        throw error;
    }
};

