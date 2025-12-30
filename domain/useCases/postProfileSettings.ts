import { ProfileSettingsEntity } from "@/data/datasources/entities/profileSettingsEntity";
import { ProfileRepositoryImpl } from "@/data/repositories/profileRepositoryImpl";

export default async function postProfileSettingsUseCase({ profileSettings, profileRepository }: { profileSettings: ProfileSettingsEntity, profileRepository: ProfileRepositoryImpl }): Promise<ProfileSettingsEntity> {
    try {
        const userInfoSupabase = await profileRepository.postProfileSettings(profileSettings);
        return userInfoSupabase;
    } catch (error) {
        throw error;
    }
};

