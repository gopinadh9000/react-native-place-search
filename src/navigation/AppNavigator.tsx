import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen';
import HistoryScreen from '../screens/HistoryScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapScreen">
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: 'Place Search' }}
        />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;