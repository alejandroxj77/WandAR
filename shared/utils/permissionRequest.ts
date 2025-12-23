import { useCameraPermissions } from 'expo-camera';
import * as Location from 'expo-location';
import { useCallback, useEffect, useState } from 'react';

export const useCameraPermission = () => {
    const [permission, requestPermission] = useCameraPermissions();

    const request = useCallback(async (): Promise<boolean> => {
        if (permission?.granted) return true;

        const result = await requestPermission();
        return result.granted;
    }, [permission, requestPermission]);

    return {
        granted: permission?.granted ?? false,
        canAskAgain: permission?.canAskAgain ?? true,
        request,
    };
};

export function useLocationPermission() {
  const [granted, setGranted] = useState<boolean>(false);
  const [canAskAgain, setCanAskAgain] = useState<boolean>(true);

  useEffect(() => {
    Location.getForegroundPermissionsAsync().then(permission => {
      setGranted(permission.granted);
      setCanAskAgain(permission.canAskAgain);
    });
  }, []);

  const request = useCallback(async (): Promise<boolean> => {
    const permission = await Location.requestForegroundPermissionsAsync();
    setGranted(permission.granted);
    setCanAskAgain(permission.canAskAgain);
    return permission.granted;
  }, []);

  return {
    granted,
    canAskAgain,
    request,
  };
}
