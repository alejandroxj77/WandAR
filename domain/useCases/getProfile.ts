import { ProfileEntity } from "@/data/datasources/entities/authenticationDataSourceEntity";
import { AuthenticationRepositoryImpl } from "@/data/repositories/authenticationRepositoryImpl";

export default async function getProfileUseCase({ authenticationRepository }: { authenticationRepository: AuthenticationRepositoryImpl }): Promise<ProfileEntity> {
    try {
        const response = await authenticationRepository.getProfile();
        return response;
    } catch (error) {
        throw error;
    }
};

