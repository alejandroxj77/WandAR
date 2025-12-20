import { UserInfoSupabase } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { AuthenticationRepositoryImpl } from "@/data/repositories/authenticationRepositoryImpl";

export default async function signUpUseCase({ email, password, authenticationRepository }: { email: string, password: string, authenticationRepository: AuthenticationRepositoryImpl }): Promise<UserInfoSupabase> {
    const userInfoSupabase = await authenticationRepository.signUpUser(email, password);
    return userInfoSupabase;
};

