import { SocialRepositoryImpl } from "@/data/repositories/socialRepositoryImpl";

export default async function declineFriendRequestUseCase({ socialRepository, requestId }: { socialRepository: SocialRepositoryImpl, requestId: string }): Promise<boolean> {
    try {
        const response = await socialRepository.postRequestFriendDecline(requestId);
        return response;
    } catch (error) {
        throw error;
    }
};