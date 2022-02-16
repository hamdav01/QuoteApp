import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuoteScreen from '../screens/QuoteScreen';
import LogoutButton from '../components/LogoutButton';

export type RootStackParamList = {
  QuoteScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="QuoteScreen"
      screenOptions={{ headerRight: () => <LogoutButton /> }}>
      <Stack.Screen name="QuoteScreen" component={QuoteScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
