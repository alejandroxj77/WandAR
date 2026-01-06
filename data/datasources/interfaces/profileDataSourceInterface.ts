import { ProfileSettingsEntity } from "@/data/datasources/entities/profileSettingsEntity";
import { ProfileEntity } from "../entities/authenticationDataSourceEntity";
import { PresignedUrlEntity } from "../entities/presignedUrlEntity";

export default interface ProfileDataSource {
    getProfileSettings(): Promise<ProfileSettingsEntity>;
    patchProfileSettings(profileSettings: Partial<ProfileSettingsEntity>): Promise<ProfileSettingsEntity>;
    postPresignedUrl(): Promise<PresignedUrlEntity>;
    ejecPresignedUrl(url: string, fileWrap: string): Promise<any>;
    patchProfile(profile: Partial<ProfileEntity>): Promise<ProfileEntity>;
    patchCredentials(newPassword: string): Promise<any>;
}