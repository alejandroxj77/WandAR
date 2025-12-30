import { Session, User } from "@supabase/supabase-js";

export type ProfileEntity = {
  supabaseUserId?: string;
  username: string;
  email?: string;
  password?: string;
  avatarImageUrl: string;
  locationLatitude: number;
  locationLongitude: number;
  onboardingCompleted: boolean;
  cameraAccessGranted: boolean;
  locationAccessGranted: boolean;
  deletedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export const mapToProfileEntity = (data: any): ProfileEntity => {
  return {
    supabaseUserId: data.supabaseUserId,
    username: data.username,
    email: data.email,
    avatarImageUrl: data.avatarImageUrl,
    locationLatitude: Number(data.locationLatitude) || 0,
    locationLongitude: Number(data.locationLongitude) || 0,
    onboardingCompleted: Boolean(data.onboardingCompleted),
    cameraAccessGranted: Boolean(data.cameraAccessGranted),
    locationAccessGranted: Boolean(data.locationAccessGranted),
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    deletedAt: data.deletedAt,
  };
};

export const defaultProfile: ProfileEntity = {
  username: "",
  avatarImageUrl: "",
  locationLatitude: 0,
  locationLongitude: 0,
  onboardingCompleted: false,
  cameraAccessGranted: false,
  locationAccessGranted: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  email: "",
  password: ""
};

export type UserInfoSupabase = {
    user: User;
    session: Session;
}