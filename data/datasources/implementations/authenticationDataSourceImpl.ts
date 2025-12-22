import httpClient from "@/shared/clients/httpClient";
import { supabase } from "@/shared/clients/supabase";
import { mapToProfileEntity, ProfileEntity, UserInfoSupabase } from "../entities/authenticationDataSourceEntity";
import authenticationDataSource from "../interfaces/authenticationDataSourceInterface";

export class AuthenticationDataSourceImpl implements authenticationDataSource {
    async createUser(profile: ProfileEntity): Promise<boolean> {
        try {
            let response = await httpClient.post(
                `v1/profile`,
                {...profile},
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return true;
        } catch (error) {
            return false;
        }
    }
    async signUpUser(email: string, password: string): Promise<UserInfoSupabase> {
        try {
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password,
            });
            if (error) {
                throw new Error(error.message ?? "Unexpected error");
            }
            return {
                user: data.user,
                session: data.session,
            } as UserInfoSupabase;
        } catch (error) {
            throw error;
        }
    }
    async signInUser(email: string, password: string): Promise<UserInfoSupabase> {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) {
                throw new Error(error.message ?? "Unexpected error");
            }
            return {
                user: data.user,
                session: data.session,
            } as UserInfoSupabase;
        } catch (error) {
            throw error;
        }
    }

    async getProfile(): Promise<ProfileEntity> {
        try {
            let response = await httpClient.get(
                `v1/profile`,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToProfileEntity(response?.data?.profile);
        } catch (error) {
            throw error;
        }
    }

    async signOutUser(): Promise<void> {
        try {
            await supabase.auth.signOut();
        } catch (error) {
            throw error;
        }
    }
}