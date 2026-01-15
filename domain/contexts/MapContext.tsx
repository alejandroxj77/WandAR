import { MarkersEntity } from "@/data/datasources/entities/MapDataSourceEntity";
import { MapDataSourceImpl } from "@/data/datasources/implementations/MapDataSourceImpl";
import { MapRepositoryImpl } from "@/data/repositories/MapRepositoryImpl";
import { createContext, useContext, useState } from "react";
import getMarkersUseCase from "../useCases/getMarkersUseCase";

const MapContext = createContext({
    getMarkers: () => { },
    markers: null as MarkersEntity | null,
});

const mapRepository = new MapRepositoryImpl(new MapDataSourceImpl());

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
    const [markers, setMarkers] = useState(null as MarkersEntity | null);
    
    async function getMarkers() {
        try {
            const response = await getMarkersUseCase({mapRepository});
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