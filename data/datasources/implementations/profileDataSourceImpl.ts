import { mapToProfileSettingsEntity, ProfileSettingsEntity } from "../entities/profileSettingsEntity";
import ProfileDataSource from "../interfaces/profileDataSourceInterface";

export class ProfileDataSourceImpl implements ProfileDataSource {
    async getProfileSettings(): Promise<ProfileSettingsEntity> {
        try {

            return mapToProfileSettingsEntity(`
                {
                    "settings": {
                        "updates": {
                        "automatic_updates": false
                        },
                        "notifications": {
                            "object_in_proximity": "100 m",
                            "previously_viewed_object_in_proximity": "off",
                            "friends_request": false,
                            "followed_by_new_user": false,
                            "friend_followed_user_posts": false,
                            "post_about_to_expire": "1 day remaining",
                            "post_timed_out": false,
                            "friend_post_about_to_expire": "1 day remaining",
                            "post_has_been_reported": false,
                            "message_from_friend": false,
                            "new_features_available": false,
                            "object_viewed": "10 times",
                            "object_sold": false
                        },
                        "home_screen_tools": {
                            "hide_buttons": false,
                            "public_private_mode": false,
                            "text_enabled": false,
                            "pencil_enabled": false,
                            "shapes_enabled": false,
                            "camera_roll_enabled": false,
                            "audio_enabled": false,
                            "upload_enabled": false,
                            "camera_off": false,
                            "switch_camera": false,
                            "camera_flash": false
                        },
                        "mode": {
                            "color_mode": false,
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
}