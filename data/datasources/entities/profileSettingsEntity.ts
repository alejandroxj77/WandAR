export type ProfileSettingsEntity = {
  updates: {
    automatic_updates: boolean;
  };
  notifications: {
    object_in_proximity: string;
    previously_viewed_object_in_proximity: string;
    friends_request: boolean;
    followed_by_new_user: boolean;
    friend_followed_user_posts: boolean;
    post_about_to_expire: string;
    post_timed_out: boolean;
    friend_post_about_to_expire: string;
    post_has_been_reported: boolean;
    message_from_friend: boolean;
    new_features_available: boolean;
    object_viewed: string;
    object_sold: boolean;
  };
  home_screen_tools: {
    hide_buttons: boolean;
    public_private_mode: boolean;
    text_enabled: boolean;
    pencil_enabled: boolean;
    shapes_enabled: boolean;
    camera_roll_enabled: boolean;
    audio_enabled: boolean;
    upload_enabled: boolean;
    camera_off: boolean;
    switch_camera: boolean;
    camera_flash: boolean;
  };
  mode: {
    color_mode: boolean;
    map: string;
  };
}

export const mapToProfileSettingsEntity = (data: any): ProfileSettingsEntity => {
  return {
    updates: {
      automatic_updates: Boolean(data.updates?.automaticUpdates ?? data.updates?.automatic_updates),
    },
    notifications: {
      object_in_proximity: String(data.notifications?.objectInProximity ?? data.notifications?.object_in_proximity ?? ''),
      previously_viewed_object_in_proximity: String(data.notifications?.previouslyViewedObjectInProximity ?? data.notifications?.previously_viewed_object_in_proximity ?? ''),
      friends_request: Boolean(data.notifications?.friendsRequest ?? data.notifications?.friends_request),
      followed_by_new_user: Boolean(data.notifications?.followedByNewUser ?? data.notifications?.followed_by_new_user),
      friend_followed_user_posts: Boolean(data.notifications?.friendFollowedUserPosts ?? data.notifications?.friend_followed_user_posts),
      post_about_to_expire: String(data.notifications?.postAboutToExpire ?? data.notifications?.post_about_to_expire ?? ''),
      post_timed_out: Boolean(data.notifications?.postTimedOut ?? data.notifications?.post_timed_out),
      friend_post_about_to_expire: String(data.notifications?.friendPostAboutToExpire ?? data.notifications?.friend_post_about_to_expire ?? ''),
      post_has_been_reported: Boolean(data.notifications?.postHasBeenReported ?? data.notifications?.post_has_been_reported),
      message_from_friend: Boolean(data.notifications?.messageFromFriend ?? data.notifications?.message_from_friend),
      new_features_available: Boolean(data.notifications?.newFeaturesAvailable ?? data.notifications?.new_features_available),
      object_viewed: String(data.notifications?.objectViewed ?? data.notifications?.object_viewed ?? ''),
      object_sold: Boolean(data.notifications?.objectSold ?? data.notifications?.object_sold),
    },
    home_screen_tools: {
      hide_buttons: Boolean(data.homeScreenTools?.hideButtons ?? data.home_screen_tools?.hide_buttons),
      public_private_mode: Boolean(data.homeScreenTools?.publicPrivateMode ?? data.home_screen_tools?.public_private_mode),
      text_enabled: Boolean(data.homeScreenTools?.textEnabled ?? data.home_screen_tools?.text_enabled),
      pencil_enabled: Boolean(data.homeScreenTools?.pencilEnabled ?? data.home_screen_tools?.pencil_enabled),
      shapes_enabled: Boolean(data.homeScreenTools?.shapesEnabled ?? data.home_screen_tools?.shapes_enabled),
      camera_roll_enabled: Boolean(data.homeScreenTools?.cameraRollEnabled ?? data.home_screen_tools?.camera_roll_enabled),
      audio_enabled: Boolean(data.homeScreenTools?.audioEnabled ?? data.home_screen_tools?.audio_enabled),
      upload_enabled: Boolean(data.homeScreenTools?.uploadEnabled ?? data.home_screen_tools?.upload_enabled),
      camera_off: Boolean(data.homeScreenTools?.cameraOff ?? data.home_screen_tools?.camera_off),
      switch_camera: Boolean(data.homeScreenTools?.switchCamera ?? data.home_screen_tools?.switch_camera),
      camera_flash: Boolean(data.homeScreenTools?.cameraFlash ?? data.home_screen_tools?.camera_flash),
    },
    mode: {
      color_mode: Boolean(data.mode?.colorMode ?? data.mode?.color_mode),
      map: String(data.mode?.map ?? ''),
    },
  };
};

export const DEFAULT_PROFILE_SETTINGS: ProfileSettingsEntity = {
  updates: {
    automatic_updates: false,
  },
  notifications: {
    object_in_proximity: '',
    previously_viewed_object_in_proximity: '',
    friends_request: false,
    followed_by_new_user: false,
    friend_followed_user_posts: false,
    post_about_to_expire: '',
    post_timed_out: false,
    friend_post_about_to_expire: '',
    post_has_been_reported: false,
    message_from_friend: false,
    new_features_available: false,
    object_viewed: '',
    object_sold: false,
  },
  home_screen_tools: {
    hide_buttons: false,
    public_private_mode: false,
    text_enabled: false,
    pencil_enabled: false,
    shapes_enabled: false,
    camera_roll_enabled: false,
    audio_enabled: false,
    upload_enabled: false,
    camera_off: false,
    switch_camera: false,
    camera_flash: false,
  },
  mode: {
    color_mode: false,
    map: '',
  },
};
