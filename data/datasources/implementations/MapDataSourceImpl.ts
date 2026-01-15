import httpClient from "@/shared/clients/httpClient";
import { mapToMarkersEntity, MarkersEntity } from "../entities/MapDataSourceEntity";
import MapDataSource from "../interfaces/MapDataSourceInterface";

export class MapDataSourceImpl implements MapDataSource {
    async getMarkers(): Promise<MarkersEntity> {
         try {
            let response = await httpClient.get(
                `v1/posts/markers`,
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            return mapToMarkersEntity(response?.data?.settings);
        } catch (error) {
            throw error;
        }
    }
}