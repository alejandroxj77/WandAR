import { MarkersEntity } from "@/data/datasources/entities/MapDataSourceEntity";
import { MapQueryParams } from "@/data/datasources/entities/MarkerQueryParams";
import { MapDataSourceImpl } from "@/data/datasources/implementations/MapDataSourceImpl";
import { MapRepositoryImpl } from "@/data/repositories/MapRepositoryImpl";
import { createContext, useContext, useState } from "react";
import getMarkersUseCase from "../useCases/getMarkersUseCase";

const MapContext = createContext({
    getMarkers: (params: MapQueryParams) => { },
    markers: null as MarkersEntity | null,
});

const mapRepository = new MapRepositoryImpl(new MapDataSourceImpl());

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
    const [markers, setMarkers] = useState(null as MarkersEntity | null);
    
    async function getMarkers(params: MapQueryParams) {
        try {
            const response = await getMarkersUseCase({params, mapRepository});
            setMarkers(response);
        } catch (error) {
            throw error;
        }
    }

    return (
        <MapContext.Provider value={{ getMarkers, markers }}>
            {children}
        </MapContext.Provider>
    )
}

export const useMap = () => {
    return useContext(MapContext);
}