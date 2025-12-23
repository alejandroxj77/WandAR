import { ProfileEntity } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { AuthenticationRepositoryImpl } from "@/data/repositories/authenticationRepositoryImpl";

export default async function createProfileUseCase({ profile, authenticationRepository }: { profile: ProfileEntity, authenticationRepository: AuthenticationRepositoryImpl }): Promise<boolean> {
    try {
        const isRequestSuccess = await authenticationRepository.createUser(profile);
        return isRequestSuccess;
    } catch (error) {
        throw error;
    }
};

