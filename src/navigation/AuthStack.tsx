import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthTab from './AuthTab';
import { useHandleNotifications } from '../utils/PushNotifcations';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = () => {
  useHandleNotifications();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={AuthTab} />
    </Stack.Navigator>
  );
};

export default AuthStack;
