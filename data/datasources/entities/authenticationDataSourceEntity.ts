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