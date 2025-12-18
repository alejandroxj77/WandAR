import httpClient from "@/shared/clients/httpClient";
import { supabase } from "@/shared/clients/supabase";
import { ProfileEntity, UserInfoSupabase } from "../entities/authenticationDataSourceEntity";
import authenticationDataSource from "../interfaces/authenticationDataSourceInterface";

export class AuthenticationDataSourceImpl implements authenticationDataSource {
    async createUser(profile: ProfileEntity): Promise<boolean> {
        try {
            let response = await httpClient.post(
                `profile`,
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
                supabase_user_id: data.user!.id,
                session: data.session,
            } as UserInfoSupabase;
        } catch (error) {
            throw error;
        }
    }
    async signInUser(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}