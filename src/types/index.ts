// Define a type for a place result from Google Places API
export interface Place {
  place_id: string;
  description: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}