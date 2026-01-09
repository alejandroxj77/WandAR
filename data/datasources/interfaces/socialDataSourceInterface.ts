import { FriendEntity } from "../entities/socialDataSourceEntity";

export default interface SocialDataSource {
    getFriends(): Promise<Array<FriendEntity>>;
    postRequestFriend(addressee_id: string): Promise<boolean>;
    postRequestFriendAccept(id: string): Promise<boolean>;
    postRequestFriendDecline(id: string): Promise<boolean>;
    deleteRequestFriend(id: string): Promise<boolean>;
}