export interface Point {
  id: string;
  userId: string;
  type: string;
  title: string;
  body: string;
  mediaUrl: string | null;
  thumbnailUrl: string | null;
  arObjectUrl: string | null;
  latitude: string;
  longitude: string;
  altitude: string;
  isLocationPinned: boolean;
  arAnchorType: string;
  arRotation: [number, number, number];
  arScale: [number, number, number];
  visibility: 'public' | 'private';
  allowComments: boolean;
  allowRemix: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  expiresAt: string | null;
  isHidden: boolean;
  isBanned: boolean;
  bannedAt: string | null;
  bannedUntil: string | null;
  banReason: string | null;
  bannedBy: string | null;
}

export interface Cluster {
  centroid: {
    lat: number;
    lng: number;
  };
  count: number;
  points: Point[];
}

export interface MarkersEntity {
  message: string;
  clusters: Cluster[];
  individualMarkers: Point[];
}

export const mapToMarkersEntity = (data: any): MarkersEntity => {
  return {
    message: data.message || "",
    clusters: data.clusters || [],
    individualMarkers: data.individualMarkers || [],
  };
};