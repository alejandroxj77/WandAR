export type FriendEntity = {
    username: string;
    postNumber: string;
    id: string;
};

export const mapToFriendEntity = (data: any): FriendEntity => {
  return {
    username: data.username,
    postNumber: data.postNumber,
    id: data.id,
  };
};

export const mapToFriendEntityList = (data: any[]): FriendEntity[] => {
  if (!Array.isArray(data)) {
    return [];
  }
  return data.map(mapToFriendEntity);
};