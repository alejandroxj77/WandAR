import SocialRepository from "@/repositories/socialRepositoryInterface";
import { FriendEntity } from "../datasources/entities/socialDataSourceEntity";
import SocialDataSource from "../datasources/interfaces/socialDataSourceInterface";

export class SocialRepositoryImpl implements SocialRepository {
    dataSource: SocialDataSource;
    constructor(_datasource: SocialDataSource) {
        this.dataSource = _datasource;
    }
    async getFriends(): Promise<Array<FriendEntity>> {
        try {
            return await this.dataSource.getFriends();
        } catch (error) {
            throw error;
        }
    }
    async postRequestFriend(addressee_id: string): Promise<boolean> {
        try {
            return await this.dataSource.postRequestFriend(addressee_id);
        } catch (error) {
            throw error;
        }
    }
    async postRequestFriendAccept(id: string): Promise<boolean> {
        try {
            return await this.dataSource.postRequestFriendAccept(id);
        } catch (error) {
            throw error;
        }
    }
    async postRequestFriendDecline(id: string): Promise<boolean> {
        try {
            return await this.dataSource.postRequestFriendDecline(id);
        } catch (error) {
            throw error;
        }
    }
    async deleteRequestFriend(id: string): Promise<boolean> {
        try {
            return await this.dataSource.deleteRequestFriend(id);
        } catch (error) {
            throw error;
        }
    }    
}