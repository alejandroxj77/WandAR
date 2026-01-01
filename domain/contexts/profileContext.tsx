import { DEFAULT_PROFILE_SETTINGS, ProfileSettingsEntity } from '@/data/datasources/entities/profileSettingsEntity';
import { ProfileDataSourceImpl } from '@/data/datasources/implementations/profileDataSourceImpl';
import { ProfileRepositoryImpl } from '@/data/repositories/profileRepositoryImpl';
import { useLoader } from '@/shared/context/loaderContext';
import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import getProfileSettingsUseCase from '../useCases/getProfileSettings';
import postProfileSettingsUseCase from '../useCases/postProfileSettings';
import updateAvatarUseCase from '../useCases/updateAvatar';
import UpdateCredentialsUseCase from '../useCases/updateCredentials';

type ProfileProviderProps = {
    children: ReactNode,
}

const ProfileContext = createContext({
    profileSettings: {} as ProfileSettingsEntity,
    updateSetting: async <K extends keyof ProfileSettingsEntity, S extends keyof ProfileSettingsEntity[K]>(
        section: K,
        setting: S,
        value: ProfileSettingsEntity[K][S]
    ): Promise<void> => { },
    refreshProfileSettings: async () => { },
    updateAvatarProfile: async ({ filepath }: {
        filepath: string;
    }): Promise<void> => {},
    updateCredentials: async ({ newPassword }: {
        newPassword: string;
    }): Promise<void> => {}
});

const profileRepository = new ProfileRepositoryImpl(new ProfileDataSourceImpl());

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [profileSettings, setProfileSettings] = useState<ProfileSettingsEntity>(DEFAULT_PROFILE_SETTINGS);
    const { showLoader, hideLoader } = useLoader();

    const refreshProfileSettings = async () => {
        try {
            showLoader({ text: 'Loading Profile...' });
            const result = await getProfileSettingsUseCase({ profileRepository });
            setProfileSettings(result);
        } catch (error) {
            console.error(error);
        } finally {
            hideLoader();
        }
    };

    const updateSetting = async <K extends keyof ProfileSettingsEntity, S extends keyof ProfileSettingsEntity[K]>(
        section: K,
        setting: S,
        value: ProfileSettingsEntity[K][S]
    ): Promise<void> => {
        try {
            const newSettings = {
                ...profileSettings,
                [section]: {
                    ...profileSettings[section],
                    [setting]: value
                }
            }
            await postProfileSettingsUseCase({profileSettings: newSettings, profileRepository})
            setProfileSettings(newSettings);
        } catch (error) {
            console.error(error);
        }
    };

    const updateAvatarProfile = async ({filepath}: {filepath:string}): Promise<void> => {
        try {
            await updateAvatarUseCase({
                filePath: filepath,
                profileRepository,
            });
        } catch (error) {
            throw error;
        }
    }

    const updateCredentials = async ({newPassword}: {newPassword:string}): Promise<void> => {
        try {
            await UpdateCredentialsUseCase({
                newPassword,
                profileRepository,
            });
        } catch (error) {
            throw error;
        }
    }

    const profileValue = useMemo(() => ({
        profileSettings,
        updateSetting,
        refreshProfileSettings,
        updateAvatarProfile,
        updateCredentials,
    }), [profileSettings]);

    return (
        <ProfileContext.Provider value={profileValue}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);