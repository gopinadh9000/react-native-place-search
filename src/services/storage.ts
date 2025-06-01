import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'PLACE_SEARCH_HISTORY';

export const savePlaceToHistory = async (place: any) => {
  try {
    const historyRaw = await AsyncStorage.getItem(HISTORY_KEY);
    const history = historyRaw ? JSON.parse(historyRaw) : [];

    const newHistory = [place, ...history.filter((p: any) => p.place_id !== place.place_id)];

    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory.slice(0, 10)));
  } catch (err) {
    console.error('Failed to save history:', err);
  }
};

export const getSearchHistory = async () => {
  try {
    const historyRaw = await AsyncStorage.getItem(HISTORY_KEY);
    return historyRaw ? JSON.parse(historyRaw) : [];
  } catch (err) {
    console.error('Failed to load history:', err);
    return [];
  }
};