import { MarkersEntity } from "@/data/datasources/entities/MapDataSourceEntity";

export default interface MapRepository {
    getMarkers(): Promise<MarkersEntity>;
}