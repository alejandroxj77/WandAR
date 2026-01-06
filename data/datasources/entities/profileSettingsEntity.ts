export type ProfileSettingsEntity = {
  updates: {
    automaticUpdates: boolean;
  };
  notifications: {
    objectInProximity: string;
    previouslyViewedObjectInProximity: string;
    friendsRequest: boolean;
    followedByNewUser: boolean;
    friendFollowedUserPosts: boolean;
    postAboutToExpire: string;
    postTimedOut: boolean;
    friendPostAboutToExpire: string;
    postHasBeenReported: boolean;
    messageFromFriend: boolean;
    newFeaturesAvailable: boolean;
    objectViewed: string;
    objectSold: boolean;
  };
  homeScreenTools: {
    hideButtons: boolean;
    publicPrivateMode: boolean;
    textEnabled: boolean;
    pencilEnabled: boolean;
    shapesEnabled: boolean;
    cameraRollEnabled: boolean;
    audioEnabled: boolean;
    uploadEnabled: boolean;
    cameraOff: boolean;
    switchCamera: boolean;
    cameraFlash: boolean;
  };
  mode: {
    colorMode: boolean;
    map: string;
  };
}

export const mapToProfileSettingsEntity = (data: any): ProfileSettingsEntity => {
  return {
    updates: {
      automaticUpdates: Boolean(data.updates?.automaticUpdates ?? data.updates?.automaticUpdates),
    },
    notifications: {
      objectInProximity: String(data.notifications?.objectInProximity ?? data.notifications?.objectInProximity ?? ''),
      previouslyViewedObjectInProximity: String(data.notifications?.previouslyViewedObjectInProximity ?? data.notifications?.previously_viewed_objectInProximity ?? ''),
      friendsRequest: Boolean(data.notifications?.friendsRequest ?? data.notifications?.friends_request),
      followedByNewUser: Boolean(data.notifications?.followedByNewUser ?? data.notifications?.followed_by_new_user),
      friendFollowedUserPosts: Boolean(data.notifications?.friendFollowedUserPosts ?? data.notifications?.friend_followed_user_posts),
      postAboutToExpire: String(data.notifications?.postAboutToExpire ?? data.notifications?.post_about_to_expire ?? ''),
      postTimedOut: Boolean(data.notifications?.postTimedOut ?? data.notifications?.post_timed_out),
      friendPostAboutToExpire: String(data.notifications?.friendPostAboutToExpire ?? data.notifications?.friend_post_about_to_expire ?? ''),
      postHasBeenReported: Boolean(data.notifications?.postHasBeenReported ?? data.notifications?.post_has_been_reported),
      messageFromFriend: Boolean(data.notifications?.messageFromFriend ?? data.notifications?.message_from_friend),
      newFeaturesAvailable: Boolean(data.notifications?.newFeaturesAvailable ?? data.notifications?.new_features_available),
      objectViewed: String(data.notifications?.objectViewed ?? data.notifications?.object_viewed ?? ''),
      objectSold: Boolean(data.notifications?.objectSold ?? data.notifications?.object_sold),
    },
    homeScreenTools: {
      hideButtons: Boolean(data.homeScreenTools?.hideButtons ?? data.home_screen_tools?.hide_buttons),
      publicPrivateMode: Boolean(data.homeScreenTools?.publicPrivateMode ?? data.home_screen_tools?.public_private_mode),
      textEnabled: Boolean(data.homeScreenTools?.textEnabled ?? data.home_screen_tools?.text_enabled),
      pencilEnabled: Boolean(data.homeScreenTools?.pencilEnabled ?? data.home_screen_tools?.pencil_enabled),
      shapesEnabled: Boolean(data.homeScreenTools?.shapesEnabled ?? data.home_screen_tools?.shapes_enabled),
      cameraRollEnabled: Boolean(data.homeScreenTools?.cameraRollEnabled ?? data.home_screen_tools?.camera_roll_enabled),
      audioEnabled: Boolean(data.homeScreenTools?.audioEnabled ?? data.home_screen_tools?.audio_enabled),
      uploadEnabled: Boolean(data.homeScreenTools?.uploadEnabled ?? data.home_screen_tools?.upload_enabled),
      cameraOff: Boolean(data.homeScreenTools?.cameraOff ?? data.home_screen_tools?.camera_off),
      switchCamera: Boolean(data.homeScreenTools?.switchCamera ?? data.home_screen_tools?.switch_camera),
      cameraFlash: Boolean(data.homeScreenTools?.cameraFlash ?? data.home_screen_tools?.camera_flash),
    },
    mode: {
      colorMode: Boolean(data.mode?.colorMode ?? data.mode?.color_mode),
      map: String(data.mode?.map ?? ''),
    },
  };
};

export const DEFAULT_PROFILE_SETTINGS: ProfileSettingsEntity = {
  updates: {
    automaticUpdates: false,
  },
  notifications: {
    objectInProximity: '',
    previouslyViewedObjectInProximity: '',
    friendsRequest: false,
    followedByNewUser: false,
    friendFollowedUserPosts: false,
    postAboutToExpire: '',
    postTimedOut: false,
    friendPostAboutToExpire: '',
    postHasBeenReported: false,
    messageFromFriend: false,
    newFeaturesAvailable: false,
    objectViewed: '',
    objectSold: false,
  },
  homeScreenTools: {
    hideButtons: false,
    publicPrivateMode: false,
    textEnabled: false,
    pencilEnabled: false,
    shapesEnabled: false,
    cameraRollEnabled: false,
    audioEnabled: false,
    uploadEnabled: false,
    cameraOff: false,
    switchCamera: false,
    cameraFlash: false,
  },
  mode: {
    colorMode: false,
    map: '',
  },
};
