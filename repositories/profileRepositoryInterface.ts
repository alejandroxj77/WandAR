import { ProfileEntity } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { PresignedUrlEntity } from "@/data/datasources/entities/presignedUrlEntity";
import { ProfileSettingsEntity } from "@/data/datasources/entities/profileSettingsEntity";

export default interface ProfileRepository {
    getProfileSettings(): Promise<ProfileSettingsEntity>;
    postProfileSettings(profileSettings: ProfileSettingsEntity): Promise<ProfileSettingsEntity>;
    postPresignedUrl(): Promise<PresignedUrlEntity>;
    ejecPresignedUrl(url: string, fileWrap: string): Promise<any>;
    patchProfile(profile: Partial<ProfileEntity>): Promise<ProfileEntity>;
    patchCredentials(newPassword: string): Promise<any>;
}