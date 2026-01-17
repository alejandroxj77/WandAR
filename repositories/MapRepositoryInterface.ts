import { MarkersEntity } from "@/data/datasources/entities/MapDataSourceEntity";
import { MapQueryParams } from "@/data/datasources/entities/MarkerQueryParams";

export default interface MapRepository {
    getMarkers(params: MapQueryParams): Promise<MarkersEntity>;
}