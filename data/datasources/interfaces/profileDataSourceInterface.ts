import { ProfileSettingsEntity } from "@/data/datasources/entities/profileSettingsEntity";

export default interface ProfileDataSource {
    getProfileSettings(): Promise<ProfileSettingsEntity>;
    postProfileSettings(profileSettings: ProfileSettingsEntity): Promise<ProfileSettingsEntity>;
}