import { UserInfoSupabase } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { AuthenticationRepositoryImpl } from "@/data/repositories/authenticationRepositoryImpl";

export default async function signInUseCase({ email, password, authenticationRepository }: { email: string, password: string, authenticationRepository: AuthenticationRepositoryImpl }): Promise<UserInfoSupabase> {
    try {
        const userInfoSupabase = await authenticationRepository.signInUser(email, password);
        return userInfoSupabase;
    } catch (error) {
        throw error;
    }
};

