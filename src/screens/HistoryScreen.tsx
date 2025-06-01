import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { getSearchHistory } from '../services/storage';

// Define the type for a place item in history
interface Place {
  place_id: string;
  name: string;
  formatted_address: string;
  // add other fields if you have them
}

interface HistoryScreenProps {
  navigation: any; // You can improve by typing this properly with React Navigation types
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({ navigation }) => {
  // Explicitly type the state with Place[]
  const [history, setHistory] = useState<Place[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const data = await getSearchHistory();
      setHistory(data);
    };
    loadHistory();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={history}
        keyExtractor={(item) => item.place_id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MapScreen', { place: item })}
          >
            <Text>{item.name}</Text>
            <Text>{item.formatted_address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HistoryScreen;