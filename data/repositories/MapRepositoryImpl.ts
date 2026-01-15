import MapRepository from "@/repositories/MapRepositoryInterface";
import { MarkersEntity } from "../datasources/entities/MapDataSourceEntity";
import MapDataSource from "../datasources/interfaces/MapDataSourceInterface";

export class MapRepositoryImpl implements MapRepository {
    dataSource: MapDataSource;
    constructor(_datasource: MapDataSource) {
        this.dataSource = _datasource;
    }
    async getMarkers(): Promise<MarkersEntity> {
        try {
            return await this.dataSource.getMarkers();
        } catch (error) {
            throw error;
        }
    }
}