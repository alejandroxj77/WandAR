import httpClient from "@/shared/clients/httpClient";
import { mapToMarkersEntity, MarkersEntity } from "../entities/MapDataSourceEntity";
import { MapQueryParams } from "../entities/MarkerQueryParams";
import MapDataSource from "../interfaces/MapDataSourceInterface";

export class MapDataSourceImpl implements MapDataSource {
    async getMarkers(params: MapQueryParams): Promise<MarkersEntity> {
         try {
            let response = await httpClient.get(
                `v1/posts/markers`,
                {
                    params,
                }
            );
            if(response.status >= 400) {
                throw new Error(response?.data?.message ?? "Unexpected error");
            }
            console.log(response?.data)
            return mapToMarkersEntity(response?.data);
        } catch (error) {
            throw error;
        }
    }
}