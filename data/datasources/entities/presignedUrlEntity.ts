export type PresignedUrlEntity = {
    message: string;
    presignedUrl: string;
    key: string;
    expiresIn: number;
};

export const mapToPresignedUrlEntity = (data: any): PresignedUrlEntity => {
  return {
    message: data.message,
    presignedUrl: data.presignedUrl,
    key: data.key,
    expiresIn: data.expiresIn,
  };
};