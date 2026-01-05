import { DEFAULT_PROFILE_SETTINGS, ProfileSettingsEntity } from '@/data/datasources/entities/profileSettingsEntity';
import { ProfileDataSourceImpl } from '@/data/datasources/implementations/profileDataSourceImpl';
import { ProfileRepositoryImpl } from '@/data/repositories/profileRepositoryImpl';
import { useLoader } from '@/shared/context/loaderContext';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import getProfileSettingsUseCase from '../useCases/getProfileSettings';
import postProfileSettingsUseCase from '../useCases/postProfileSettings';

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
});

const profileRepository = new ProfileRepositoryImpl(new ProfileDataSourceImpl());

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [profileSettings, setProfileSettings] = useState<ProfileSettingsEntity>(DEFAULT_PROFILE_SETTINGS);
    const { showLoader, hideLoader } = useLoader();

    useEffect(() => {
        refreshProfileSettings();
    }, []);

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

    const profileValue = useMemo(() => ({
        profileSettings,
        updateSetting,
        refreshProfileSettings,
    }), [profileSettings]);

    return (
        <ProfileContext.Provider value={profileValue}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);