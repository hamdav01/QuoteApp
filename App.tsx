import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import InfoModal from './src/ErrorModal';
import QuoteScreen from './src/QuoteScreen';

const Stack = createNativeStackNavigator();

const App: React.VFC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
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
