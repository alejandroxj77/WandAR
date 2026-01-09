import { SocialRepositoryImpl } from "@/data/repositories/socialRepositoryImpl";

export default async function postRequestFriendUseCase({ socialRepository, addresseeId }: { socialRepository: SocialRepositoryImpl, addresseeId: string }): Promise<boolean> {
    try {
        const response = await socialRepository.postRequestFriend(addresseeId);
        return response;
    } catch (error) {
        throw error;
    }
};