import { ProfileEntity, UserInfoSupabase } from "@/data/datasources/entities/authenticationDataSourceEntity";

export default interface AuthenticationRepository {
    createUser(user: ProfileEntity): Promise<boolean>;
    signUpUser(email: string, password: string): Promise<UserInfoSupabase>;
    signInUser(email: string, password: string): Promise<UserInfoSupabase>;
    getProfile(): Promise<ProfileEntity>;
    signOutUser(): Promise<void>;
}