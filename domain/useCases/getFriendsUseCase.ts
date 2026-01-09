import { FriendEntity } from "@/data/datasources/entities/socialDataSourceEntity";
import { SocialRepositoryImpl } from "@/data/repositories/socialRepositoryImpl";

export default async function getFriendsUseCase({ socialRepository }: { socialRepository: SocialRepositoryImpl }): Promise<Array<FriendEntity>> {
    try {
        const response = await socialRepository.getFriends();
        return response;
    } catch (error) {
        throw error;
    }
};