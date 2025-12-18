import { ProfileEntity, UserInfoSupabase } from "../entities/authenticationDataSourceEntity";

export default interface authenticationDataSource {
    createUser(user: ProfileEntity): Promise<boolean>;
    signUpUser(email: string, password: string): Promise<UserInfoSupabase>;
    signInUser(): Promise<boolean>;
}