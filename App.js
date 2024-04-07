
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';

import Router from './src/routes'

function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Hind': require('./assets/fonts/Hind-Regular.ttf'),
    'Hind-bold': require('./assets/fonts/Hind-SemiBold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        {Router()}
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;