import ProfileRepository from "@/repositories/profileRepositoryInterface";
import { ProfileEntity } from "../datasources/entities/authenticationDataSourceEntity";
import { PresignedUrlEntity } from "../datasources/entities/presignedUrlEntity";
import { ProfileSettingsEntity } from "../datasources/entities/profileSettingsEntity";
import ProfileDataSource from "../datasources/interfaces/profileDataSourceInterface";

export class ProfileRepositoryImpl implements ProfileRepository {
    dataSource: ProfileDataSource;
    constructor(_datasource: ProfileDataSource) {
        this.dataSource = _datasource;
    }
  
    async getProfileSettings(): Promise<ProfileSettingsEntity> {
        try {
            return await this.dataSource.getProfileSettings();
        } catch (error) {
            throw error;
        }
    }

    async postProfileSettings(profileSettings: ProfileSettingsEntity): Promise<ProfileSettingsEntity> {
        try {
            return await this.dataSource.postProfileSettings(profileSettings);
        } catch (error) {
            throw error;
        }
    }

    async postPresignedUrl(): Promise<PresignedUrlEntity> {
        try {
            return await this.dataSource.postPresignedUrl();
        } catch (error) {
            throw error;
        }
    }

    async ejecPresignedUrl(url: string, fileWrap: string): Promise<any> {
        try {
            return await this.dataSource.ejecPresignedUrl(url, fileWrap);
        } catch (error) {
            throw error;
        }
    }

    async patchProfile(profile: Partial<ProfileEntity>): Promise<ProfileEntity> {
        try {
            return await this.dataSource.patchProfile(profile);
        } catch (error) {
            throw error;
        }
    }

    async patchCredentials(newPassword: string): Promise<any> {
        try {
            return await this.dataSource.patchCredentials(newPassword);
        } catch (error) {
            throw error;
        }
    }
}