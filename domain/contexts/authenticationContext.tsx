import { ProfileEntity } from '@/data/datasources/entities/authenticationDataSourceEntity';
import { AuthenticationDataSourceImpl } from '@/data/datasources/implementations/authenticationDataSourceImpl';
import { AuthenticationRepositoryImpl } from '@/data/repositories/authenticationRepositoryImpl';
import httpClient from '@/shared/clients/httpClient';
import { supabase } from '@/shared/clients/supabase';
import { useLoader } from '@/shared/context/loaderContext';
import { useModal } from '@/shared/context/modalContext';
import { Session } from '@supabase/supabase-js';
import { router } from 'expo-router';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import Toast from 'react-native-toast-message';
import createProfileUseCase from '../useCases/createProfile';
import getProfileUseCase from '../useCases/getProfile';
import signInUseCase from '../useCases/signInUser';
import signOutUseCase from '../useCases/signOutUser';
import signUpUseCase from '../useCases/signUpUser';
import { useProfile } from './profileContext';

type AuthenticationProviderProps = {
    children: ReactNode,
}

const AuthenticationContext = createContext({
    session: {} as Session | null,
    profile: {} as ProfileEntity | null,
    createUser: async ({ profile }: { profile: ProfileEntity }): Promise<boolean> => { return true; },
    login: async ({ email, password }: { email: string, password: string }): Promise<boolean> => { return true; },
    signOut: async (): Promise<void> => { },
    updateLocalProfile: (newProfile: ProfileEntity) => { },
});

const authenticationRepository = new AuthenticationRepositoryImpl(new AuthenticationDataSourceImpl());

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
    const [profile, setProfile] = useState<ProfileEntity | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const { showLoader, hideLoader } = useLoader();
    const { refreshProfileSettings } = useProfile();
    const { hideModal } = useModal();
    
    const loadSettings = async () => {
        try {
            showLoader({text:''});
            await refreshProfileSettings()
        } catch (error) {
             Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error?.toString(),
            });
            return false;
        } finally {
            hideLoader();
        }
    }

    const goToHome = () => {
        router.replace('/(tabs)/post-content')
    }

    function updateLocalProfile(newProfile: ProfileEntity) {
        setProfile({...profile!, ...newProfile})
    }

    useEffect(() => {
        supabase.auth.getSession().then(async ({ data: { session } }) => {

            setSession(session);

            if (session) {
                try {
                    showLoader({ text: '' });
                    setHeaderToken(session)
                    const profileResult = await getProfileUseCase({
                        authenticationRepository,
                    });

                    setProfile(profileResult)
                    await loadSettings();
                    goToHome();
                } finally {
                    hideLoader();
                }
            } else {
                router.dismissTo('/authentication/Login')
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            if (_event != 'SIGNED_IN' && _event != 'INITIAL_SESSION') {
                hideLoader();
                hideModal();
                setHeaderToken();
                router.dismissTo('/authentication/Login')
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    function setHeaderToken(session?: Session) {
        if (session) {
            console.log('session.access_token');
            console.log(`Bearer ${session.access_token}`);
            httpClient.defaults.headers['Authorization'] = `Bearer ${session.access_token}`;
        } else {
            httpClient.defaults.headers['Authorization'] = ``;
        }
    }

    const createUser = async ({ profile }: { profile: ProfileEntity }): Promise<boolean> => {
        try {
            const { user, session } = await signUpUseCase({
                email: profile.email!,
                password: profile.password!,
                authenticationRepository,
            });

            setSession(session);
            setHeaderToken(session)
            const profileSuccess = await createProfileUseCase({
                profile: { ...profile, supabaseUserId: user.id },
                authenticationRepository,
            });

            if (profileSuccess) {
                const profileResult = await getProfileUseCase({
                    authenticationRepository,
                });

                setProfile(profileResult)
                await loadSettings();
                goToHome();
            }

            return profileSuccess;
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error?.toString(),
            });
            return false;
        }
    };

    const login = async ({ email, password }: { email: string, password: string }): Promise<boolean> => {
        try {
            const { session } = await signInUseCase({
                email: email,
                password: password,
                authenticationRepository,
            });

            setSession(session);
            setHeaderToken(session)

            const profileResult = await getProfileUseCase({
                authenticationRepository,
            });

            setProfile(profileResult)
            await loadSettings();
            goToHome();

            return true;
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error?.toString(),
            });
            return false;
        }
    };

    const signOut = async (): Promise<void> => {
        try {
            showLoader({text: ''});
            await signOutUseCase({ authenticationRepository });
            setHeaderToken();
        } finally {
            hideLoader();
        }
    };

    const authValue = useMemo(() => ({
        session,
        profile,
        createUser,
        login,
        signOut,
        updateLocalProfile,
    }), [session, profile]);

    return (
        <AuthenticationContext value={authValue}>
            {children}
        </AuthenticationContext>
    );
};

export const useAuthentication = () => useContext(AuthenticationContext);

