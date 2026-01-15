export type MarkersEntity = {
    clusters: Array<any>,
    individualMarkers: Array<any>
};

export const mapToMarkersEntity = (data: any): MarkersEntity => {
  return {
    clusters: data.clusters,
    individualMarkers: data.individualMarkers,
  };
};