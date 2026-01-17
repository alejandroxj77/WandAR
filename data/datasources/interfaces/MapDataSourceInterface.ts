import { MarkersEntity } from "../entities/MapDataSourceEntity";
import { MapQueryParams } from "../entities/MarkerQueryParams";

export default interface MapDataSource {
    getMarkers(params: MapQueryParams): Promise<MarkersEntity>;
}