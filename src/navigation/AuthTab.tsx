import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from './AuthStack';
import SetttingsScreen from '../screens/SettingsScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import QuoteScreen from '../screens/QuoteScreen';
import QuoteOptionsNavigator from './QuoteOptionsStack';

export type AuthTabNavigationProp<T extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, T>,
    StackScreenProps<RootStackParamList>
  >;

export type RootTabParamList = {
  Quote: undefined;
  Settings: undefined;
  QuoteOptions: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const AuthTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Quote"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Quote"
        component={QuoteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="QuoteOptions"
        component={QuoteOptionsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="folder-multiple-plus"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SetttingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthTab;
