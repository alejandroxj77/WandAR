import { ProfileEntity } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { AuthenticationRepositoryImpl } from "@/data/repositories/authenticationRepositoryImpl";

export default async function createProfileUseCase({ profile, authenticationRepository }: { profile: ProfileEntity, authenticationRepository: AuthenticationRepositoryImpl }): Promise<boolean> {
    const isRequestSuccess = await authenticationRepository.createUser(profile);
    console.log('isRequestSuccess - createProfile')
    console.log(isRequestSuccess)
    return isRequestSuccess;
};

