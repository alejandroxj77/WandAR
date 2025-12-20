import { AuthenticationRepositoryImpl } from "@/data/repositories/authenticationRepositoryImpl";

export default async function signOutUseCase({ authenticationRepository }: { authenticationRepository: AuthenticationRepositoryImpl }): Promise<void> {
    await authenticationRepository.signOutUser();
};
