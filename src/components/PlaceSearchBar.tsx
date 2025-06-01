import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Config from 'react-native-config';

interface Props {
  onPlaceSelected: (details: any) => void;
}

const PlaceSearchBar = ({ onPlaceSelected }: Props) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails
      onPress={(data, details = null) => {
        if (details) {
          onPlaceSelected(details);
        }
      }}
      query={{
        key: Config.GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      styles={{
        container: { flex: 0 },
        textInput: { height: 40, borderColor: '#ccc', borderWidth: 1 },
      }}
    />
  );
};

export default PlaceSearchBar;
