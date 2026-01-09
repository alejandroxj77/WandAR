import httpClient from "@/shared/clients/httpClient";
import { FriendEntity, mapToFriendEntityList } from "../entities/socialDataSourceEntity";
import SocialDataSource from "../interfaces/socialDataSourceInterface";

export class SocialDataSourceImpl implements SocialDataSource {
    async getFriends(): Promise<Array<FriendEntity>> {
        try {
            let response = await httpClient.get(
                `v1/friends`,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToFriendEntityList(response.data);
        } catch (error) {
            throw error;
        }
    }
    async postRequestFriend(addressee_id: string): Promise<boolean> {
        try {
            let response = await httpClient.post(
                `v1/friends/requests`,
                {
                    addressee_id,
                },
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return true;
        } catch (error) {
            return false;
        }
    }
    async postRequestFriendAccept(id: string): Promise<boolean> {
        try {
            let response = await httpClient.post(
                `v1/friends/requests/${id}/accept`,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return true;
        } catch (error) {
            return false;
        }
    }
    async postRequestFriendDecline(id: string): Promise<boolean> {
        try {
            let response = await httpClient.post(
                `v1/friends/requests/${id}/decline`,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return true;
        } catch (error) {
            return false;
        }
    }
    async deleteRequestFriend(id: string): Promise<boolean> {
        try {
            let response = await httpClient.delete(
                `v1/friends/requests/${id}`
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return true;
        } catch (error) {
            return false;
        }
    }
}