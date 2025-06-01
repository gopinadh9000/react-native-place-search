import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import PlaceSearchBar from '../components/PlaceSearchBar';
import { savePlaceToHistory } from '../services/storage';

// Define type for place.geometry.location
interface Location {
  lat: number;
  lng: number;
}

interface Place {
  geometry: {
    location: Location;
  };
  name: string;
  formatted_address: string;
  place_id: string;  // assuming place_id is part of place
}

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  address: string;
}

const MapScreen = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  const [marker, setMarker] = useState<MarkerData | null>(null);

  const handlePlaceSelected = async (place: Place) => {
    const location = place.geometry.location;
    const newRegion: Region = {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    };

    setRegion(newRegion);
    setMarker({
      lat: location.lat,
      lng: location.lng,
      name: place.name,
      address: place.formatted_address,
    });

    await savePlaceToHistory(place);
  };

  return (
    <View style={styles.container}>
      <PlaceSearchBar onPlaceSelected={handlePlaceSelected} />
      <MapView style={styles.map} region={region}>
        {marker && (
          <Marker
            coordinate={{ latitude: marker.lat, longitude: marker.lng }}
            title={marker.name}
            description={marker.address}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default MapScreen;