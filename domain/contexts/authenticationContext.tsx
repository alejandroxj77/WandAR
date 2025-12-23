import { ProfileEntity } from '@/data/datasources/entities/authenticationDataSourceEntity';
import { AuthenticationDataSourceImpl } from '@/data/datasources/implementations/authenticationDataSourceImpl';
import { AuthenticationRepositoryImpl } from '@/data/repositories/authenticationRepositoryImpl';
import httpClient from '@/shared/clients/httpClient';
import { supabase } from '@/shared/clients/supabase';
import { Session } from '@supabase/supabase-js';
import { router } from 'expo-router';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import createProfileUseCase from '../useCases/createProfile';
import getProfileUseCase from '../useCases/getProfile';
import signInUseCase from '../useCases/signInUser';
import signOutUseCase from '../useCases/signOutUser';
import signUpUseCase from '../useCases/signUpUser';

type AuthenticationProviderProps = {
    children: ReactNode,
}

const AuthenticationContext = createContext({
    session: {} as Session | null,
    profile: {} as ProfileEntity | null,
    createUser: async ({ profile }: { profile: ProfileEntity }): Promise<boolean> => { return true; },
    login: async ({ email, password }: { email: string, password: string }): Promise<boolean> => { return true; },
    signOut: async (): Promise<void> => { },
});

const authenticationRepository = new AuthenticationRepositoryImpl(new AuthenticationDataSourceImpl());

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
    const [profile, setProfile] = useState<ProfileEntity | null>(null);
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        if (profile != null) {
            router.replace('/(tabs)/post-content')
        }
    }, [profile])


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
            if (_event == 'SIGNED_OUT') {
                router.replace('/authentication/Login')
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    function setHeaderToken(session?: Session) {
        if (session) {
            httpClient.defaults.headers['Authorization'] = `Bearer ${session.access_token}`;
        } else {
            httpClient.defaults.headers['Authorization'] = ``;
        }
    }

    const createUser = async ({ profile }: { profile: ProfileEntity }): Promise<boolean> => {
        const { user, session } = await signUpUseCase({
            email: profile.email!,
            password: profile.password!,
            authenticationRepository,
        });

        setSession(session);
        setHeaderToken(session)
        const profileSuccess = await createProfileUseCase({
            profile: { ...profile, supabase_user_id: user.id },
            authenticationRepository,
        });

        if (profileSuccess) {
            const profileResult = await getProfileUseCase({
                authenticationRepository,
            });

            setProfile(profileResult)
        }

        return profileSuccess;
    };

    const login = async ({ email, password }: { email: string, password: string }): Promise<boolean> => {
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

        return true;
    };

    const signOut = async (): Promise<void> => {
        await signOutUseCase({ authenticationRepository });
        setHeaderToken()
    };

    const authValue = useMemo(() => ({
        session,
        profile,
        createUser,
        login,
        signOut,
    }), [session, profile]);

    return (
        <AuthenticationContext value={authValue}>
            {children}
        </AuthenticationContext>
    );
};

export const useAuthentication = () => useContext(AuthenticationContext);

