import ProfileRepository from "@/repositories/profileRepositoryInterface";
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
}