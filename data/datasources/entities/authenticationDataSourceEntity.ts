import { Session, User } from "@supabase/supabase-js";

export type ProfileEntity = {
  supabase_user_id?: string;
  username: string;
  email?: string;
  password?: string;
  avatar_image_url: string;
  location_latitude: number;
  location_longitude: number;
  onboarding_completed: boolean;
  camera_access_granted: boolean;
  location_access_granted: boolean;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
};

export const mapToProfileEntity = (data: any): ProfileEntity => {
  return {
    supabase_user_id: data.supabaseUserId,
    username: data.username,
    email: data.email,
    avatar_image_url: data.avatarImageUrl,
    location_latitude: Number(data.locationLatitude) || 0,
    location_longitude: Number(data.locationLongitude) || 0,
    onboarding_completed: Boolean(data.onboardingCompleted),
    camera_access_granted: Boolean(data.cameraAccessGranted),
    location_access_granted: Boolean(data.locationAccessGranted),
    created_at: data.createdAt,
    updated_at: data.updatedAt,
    deleted_at: data.deletedAt,
  };
};

export const defaultProfile: ProfileEntity = {
  username: "",
  avatar_image_url: "",
  location_latitude: 0,
  location_longitude: 0,
  onboarding_completed: false,
  camera_access_granted: false,
  location_access_granted: false,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  email: "",
  password: ""
};

export type UserInfoSupabase = {
    user: User;
    session: Session;
}