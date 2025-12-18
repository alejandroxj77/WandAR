import { Session } from "@supabase/supabase-js";

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

export type UserInfoSupabase = {
    supabase_user_id: string;
    session: Session;
}