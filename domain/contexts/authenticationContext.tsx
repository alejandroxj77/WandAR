import { ProfileEntity } from '@/data/datasources/entities/authenticationDataSourceEntity';
import { AuthenticationDataSourceImpl } from '@/data/datasources/implementations/authenticationDataSourceImpl';
import { AuthenticationRepositoryImpl } from '@/data/repositories/authenticationRepositoryImpl';
import { Session } from '@supabase/supabase-js';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import signUpUseCase from '../useCases/signUpUser';

type AuthenticationProviderProps = {
    children: ReactNode,
}

const AuthenticationContext = createContext({
    session: {} as Session | null,
    profile: {} as ProfileEntity | null,
    createUser: async ({ profile }: {profile: ProfileEntity}): Promise<boolean> => { return true; },
});

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
    const [profile, setProfile] = useState<ProfileEntity | null>(null);
    const [session, setSession] = useState<Session | null>(null);

    const createUser = async ({ profile }: {profile: ProfileEntity}): Promise<boolean> => {
        const {supabase_user_id, session} = await signUpUseCase({
            email: profile.email!, 
            password: profile.password!, 
            authenticationRepository: new AuthenticationRepositoryImpl(new AuthenticationDataSourceImpl()),
        });

        setSession(session);

        const profileSuccess = await createUser({
           profile: {...profile, supabase_user_id},
        });

        if(profileSuccess){
            setProfile(profile)
        }
        return profileSuccess;
    };

    return (
        <AuthenticationContext value={{session, profile, createUser}}>
            {children}
        </AuthenticationContext>
    );
};

export const useAuthentication = () => useContext(AuthenticationContext);

