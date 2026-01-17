import MapRepository from "@/repositories/MapRepositoryInterface";
import { MarkersEntity } from "../datasources/entities/MapDataSourceEntity";
import { MapQueryParams } from "../datasources/entities/MarkerQueryParams";
import MapDataSource from "../datasources/interfaces/MapDataSourceInterface";

export class MapRepositoryImpl implements MapRepository {
    dataSource: MapDataSource;
    constructor(_datasource: MapDataSource) {
        this.dataSource = _datasource;
    }
    async getMarkers(params: MapQueryParams): Promise<MarkersEntity> {
        try {
            return await this.dataSource.getMarkers(params);
        } catch (error) {
            throw error;
        }
    }
}