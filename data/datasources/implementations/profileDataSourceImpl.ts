import httpClient from "@/shared/clients/httpClient";
import RNBlobUtil from 'react-native-blob-util';
import { mapToProfileEntity, ProfileEntity } from "../entities/authenticationDataSourceEntity";
import { mapToPresignedUrlEntity, PresignedUrlEntity } from "../entities/presignedUrlEntity";
import { mapToProfileSettingsEntity, ProfileSettingsEntity } from "../entities/profileSettingsEntity";
import ProfileDataSource from "../interfaces/profileDataSourceInterface";

export class ProfileDataSourceImpl implements ProfileDataSource {
    async getProfileSettings(): Promise<ProfileSettingsEntity> {
        try {

            return mapToProfileSettingsEntity(`
                {
                    "settings": {
                        "updates": {
                            "automaticUpdates": false
                        },
                        "notifications": {
                            "objectInProximity": "100 m",
                            "previouslyViewedObjectInProximity": "off",
                            "friendsRequest": false,
                            "followedByNewUser": false,
                            "friendFollowedUserPosts": false,
                            "postAboutToExpire": "1 day remaining",
                            "postTimedOut": false,
                            "friendPostAboutToExpire": "1 day remaining",
                            "postHasBeenReported": false,
                            "messageFromFriend": false,
                            "newFeaturesAvailable": false,
                            "objectViewed": "10 times",
                            "objectSold": false
                        },
                        "home_screen_tools": {
                            "hideButtons": false,
                            "publicPrivateMode": false,
                            "textEnabled": false,
                            "pencilEnabled": false,
                            "shapesEnabled": false,
                            "cameraRollEnabled": false,
                            "audioEnabled": false,
                            "uploadEnabled": false,
                            "cameraOff": false,
                            "switchCamera": false,
                            "cameraFlash": false
                        },
                        "mode": {
                            "colorMode": false,
                            "map": "day"
                        }
                    }
                }
            `);
        } catch (error) {
            throw error;
        }
    }

    async postProfileSettings(profileSettings: ProfileSettingsEntity): Promise<ProfileSettingsEntity> {
        return profileSettings;
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
            console.log('newPassword')
            console.log(newPassword)
            let response = await httpClient.patch(
                `v1/profile/credentials`,
                {
                    password: newPassword,
                },
            );
            console.log(response)
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToProfileEntity(response?.data?.profile);
        } catch (error) {
            console.log(error)
            throw error;
        }
    }
}