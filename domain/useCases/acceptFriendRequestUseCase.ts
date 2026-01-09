import { SocialRepositoryImpl } from "@/data/repositories/socialRepositoryImpl";

export default async function acceptFriendRequestUseCase({ socialRepository, requestId }: { socialRepository: SocialRepositoryImpl, requestId: string }): Promise<boolean> {
    try {
        const response = await socialRepository.postRequestFriendAccept(requestId);
        return response;
    } catch (error) {
        throw error;
    }
};