import { UserInfoSupabase } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { AuthenticationRepositoryImpl } from "@/data/repositories/authenticationRepositoryImpl";

export default async function signInUseCase({ email, password, authenticationRepository }: { email: string, password: string, authenticationRepository: AuthenticationRepositoryImpl }): Promise<UserInfoSupabase> {
    const userInfoSupabase = await authenticationRepository.signInUser(email, password);
    console.log('userInfoSupabase - signin')
    console.log(userInfoSupabase)
    return userInfoSupabase;
};

