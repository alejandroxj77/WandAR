import { useMap } from "@/domain/contexts/MapContext";
import DropdownCustom from "@/presentation/atoms/buttons/DropdownCustom";
import CenterUbication from "@/presentation/atoms/icons/CenterUbication";
import * as Location from "expo-location";
import { AppleMaps, GoogleMaps } from "expo-maps";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Map() {
  const {getMarkers, markers} = useMap();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const mapRef = useRef<any>(null);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCenterUser = async () => {
    if (!hasPermission) return Alert.alert("Error", "No hay permisos");
    
    const location = await Location.getCurrentPositionAsync({});
    
    mapRef.current?.setCameraPosition({
      coordinates: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      zoom: 15,
    });

    getMarkers({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      limit: 100,
      page: 1, 
      zoom: 1,
      radius: 1000
    });
  };

  const commonProps = {
    ref: mapRef,
    style: StyleSheet.absoluteFill,
    properties: {
      isMyLocationEnabled: true,
      selectionEnabled: true,
      isMyLocationButtonEnabled: false,
      isZoomControlsEnabled: false,
    }
  };

  if (hasPermission === null) return <Text>Cargando...</Text>;

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ? (
        <AppleMaps.View 
          {...commonProps}
          uiSettings={{
            myLocationButtonEnabled: false,
          }}
          markers={[
            ...(markers?.clusters?.map((e) => ({
              coordinates: { 
                latitude: e.centroid.lat, 
                longitude: e.centroid.lng 
              },
              title: e.points[0]?.title || "Cluster",
              snippet: e.points[0]?.body || "",
              draggable: true,
              tintColor: "brown",
              systemImage: "cup.and.saucer.fill"
            })) ?? []),

            ...(markers?.individualMarkers?.map((e) => ({
              coordinates: { 
                latitude: Number(e.latitude),
                longitude: Number(e.longitude)
              },
              title: e.title,
              snippet: e.body,
              draggable: true,
              tintColor: "brown",
              systemImage: "cup.and.saucer.fill"
            })) ?? []),
          ]}
        />
      ) : (
        <GoogleMaps.View 
          {...commonProps}
          uiSettings={{
            zoomControlsEnabled: false,
            myLocationButtonEnabled: false,
          }}
          markers={[
            ...(markers?.clusters?.map((e) => ({
              coordinates: { 
                latitude: e.centroid.lat, 
                longitude: e.centroid.lng 
              },
              title: e.points[0]?.title || "Cluster",
              snippet: e.points[0]?.body || "",
              draggable: true,
            })) ?? []),

            ...(markers?.individualMarkers?.map((e) => ({
              coordinates: { 
                latitude: Number(e.latitude),
                longitude: Number(e.longitude)
              },
              title: e.title,
              snippet: e.body,
              draggable: true,
            })) ?? []),
          ]}
        />
      )}

      <SafeAreaView style={styles.overlay} pointerEvents="box-none">
        <View style={styles.controlsContainer}>
          <DropdownCustom
            label="All Posts"
            onSelect={()=>{}}
            options={[
              "All Posts",
              "Public Only",
              "Private Only",
            ]}
            style={{flex: 4}}
            styleDropdown={{flex: 4,  backgroundColor: 'white', height: 45}}
            value="All Post"
          />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Pressable style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 10
              }}
              onPress={async ()=>{
                await handleCenterUser();
              }}
            >
              <CenterUbication width={30} height={30}/>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  overlay: {
    flex: 1,
  },
  controlsContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
});
