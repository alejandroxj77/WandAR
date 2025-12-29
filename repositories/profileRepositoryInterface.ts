import { ProfileSettingsEntity } from "@/data/datasources/entities/profileSettingsEntity";

export default interface ProfileRepository {
    getProfileSettings(): Promise<ProfileSettingsEntity>;
    postProfileSettings(profileSettings: ProfileSettingsEntity): Promise<ProfileSettingsEntity>;
}