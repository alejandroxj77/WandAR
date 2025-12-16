import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and anon key from environment variables
// For Expo, these can be set in app.json's extra field or via .env files
const supabaseUrl =
    process.env.EXPO_PUBLIC_SUPABASE_URL;

const supabaseAnonKey =
    process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        'Missing Supabase environment variables. Please set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY in your environment or app.json extra field.',
    );
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

