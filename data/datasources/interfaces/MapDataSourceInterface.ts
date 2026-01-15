import { MarkersEntity } from "../entities/MapDataSourceEntity";

export default interface MapDataSource {
    getMarkers(): Promise<MarkersEntity>;
}