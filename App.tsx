import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainComponent from './src/main';
import InfoModal from './src/infoModal';

const Stack = createNativeStackNavigator();

const App: React.VFC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={MainComponent} />
        <Stack.Screen
          name="InfoModal"
          component={InfoModal}
          options={{ presentation: 'transparentModal', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
