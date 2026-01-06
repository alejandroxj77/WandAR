import httpClient from "@/shared/clients/httpClient";
import RNBlobUtil from 'react-native-blob-util';
import { mapToProfileEntity, ProfileEntity } from "../entities/authenticationDataSourceEntity";
import { mapToPresignedUrlEntity, PresignedUrlEntity } from "../entities/presignedUrlEntity";
import { mapToProfileSettingsEntity, ProfileSettingsEntity } from "../entities/profileSettingsEntity";
import ProfileDataSource from "../interfaces/profileDataSourceInterface";

export class ProfileDataSourceImpl implements ProfileDataSource {
    async getProfileSettings(): Promise<ProfileSettingsEntity> {
         try {
            let response = await httpClient.get(
                `v1/settings`,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToProfileSettingsEntity(response?.data?.settings);
        } catch (error) {
            throw error;
        }
    }

    async patchProfileSettings(profileSettings: Partial<ProfileSettingsEntity>): Promise<ProfileSettingsEntity> {
        try {
            const payload = {
                ...profileSettings.updates,
                ...profileSettings.notifications,
                ...profileSettings.homeScreenTools,
                ...profileSettings.mode,
            };
            let response = await httpClient.patch(
                `v1/settings`,
                payload,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToProfileSettingsEntity(response?.data?.settings);
        } catch (error) {
            throw error;
        }
    }

    async postPresignedUrl(): Promise<PresignedUrlEntity> {
        try {
            let response = await httpClient.post(
                `v1/profile/avatar/presigned-url`,
                {
                    fileName: 'avatar.jpg',
                    contentType: 'image/jpeg'
                }
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToPresignedUrlEntity(response?.data);
        } catch (error) {
            throw error;
        }
    }

    async ejecPresignedUrl(url: string, fileWrap: string): Promise<any> {
        try {
            const response = await RNBlobUtil.fetch('PUT', url, {
                'Content-Type': 'image/jpeg',
            }, fileWrap);
            if(response.respInfo.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToPresignedUrlEntity(response?.data);
        } catch (error) {
            throw error;
        }
    }

    async patchProfile(profile: Partial<ProfileEntity>): Promise<ProfileEntity> {
        try {
            let response = await httpClient.patch(
                `v1/profile`,
                profile,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToProfileEntity(response?.data?.profile);
        } catch (error) {
            throw error;
        }
    }

    async patchCredentials(newPassword: string): Promise<any> {
        try {
            let response = await httpClient.patch(
                `v1/profile/credentials`,
                {
                    password: newPassword,
                },
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return true;
        } catch (error) {
            throw error;
        }
    }
}