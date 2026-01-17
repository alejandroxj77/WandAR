import { MarkersEntity } from "@/data/datasources/entities/MapDataSourceEntity";
import { MapQueryParams } from "@/data/datasources/entities/MarkerQueryParams";
import { MapRepositoryImpl } from "@/data/repositories/MapRepositoryImpl";

export default async function getMarkersUseCase({ params, mapRepository }: { params: MapQueryParams, mapRepository: MapRepositoryImpl }): Promise<MarkersEntity> {
    try {
        const response = await mapRepository.getMarkers(params);
        return response;
    } catch (error) {
        throw error;
    }
};

