import AuthenticationRepository from "@/repositories/authenticationRepositoryInterface";
import { ProfileEntity, UserInfoSupabase } from "../datasources/entities/authenticationDataSourceEntity";
import AuthenticationDataSource from "../datasources/interfaces/authenticationDataSourceInterface";

export class AuthenticationRepositoryImpl implements AuthenticationRepository {
    dataSource: AuthenticationDataSource;
    constructor(_datasource: AuthenticationDataSource) {
        this.dataSource = _datasource;
    }
    async createUser(user: ProfileEntity): Promise<boolean> {
        try {
            return await this.dataSource.createUser(user);
        } catch (error) {
            throw error;
        }
    }
    async signUpUser(email: string, password: string): Promise<UserInfoSupabase> {
        try {
            return await this.dataSource.signUpUser(email, password);
        } catch (error) {
            throw error;
        }
    }
    async signInUser(email: string, password: string): Promise<UserInfoSupabase> {
         try {
            return await this.dataSource.signInUser(email, password);
        } catch (error) {
            throw error;
        }
    }
}