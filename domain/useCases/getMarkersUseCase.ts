import { MarkersEntity } from "@/data/datasources/entities/MapDataSourceEntity";
import { MapRepositoryImpl } from "@/data/repositories/MapRepositoryImpl";

export default async function getMarkersUseCase({ mapRepository }: { mapRepository: MapRepositoryImpl }): Promise<MarkersEntity> {
    try {
        const response = await mapRepository.getMarkers();
        return response;
    } catch (error) {
        throw error;
    }
};

