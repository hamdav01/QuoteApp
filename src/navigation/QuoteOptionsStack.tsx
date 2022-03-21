import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateQuoteScreen from '../screens/CreateQuoteScreen';
import CreateQuoteColorScreen from '../screens/CreateQuoteColorScreen';
import CreateQuoteBackgroundScreen from '../screens/CreateQuaoteColorBackgroundScreen';
import QuoteCreatedScreen from '../screens/QuoteCreatedScreen';
import QuoteOptionsScreen from '../screens/QuoteOptions';
import QuoteLibraryScreen from '../screens/QuoteLibraryScreen';

export type RootStackParamList = {
  CreateQuote: undefined;
  CreateQuoteColor: { quoteText: string; backgroundColor: string };
  CreateQuoteColorBackground: { quoteText: string };
  QuoteCreated: undefined;
  QuoteOptionsSelect: undefined;
  QuoteLibrary: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const QuoteOptionsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="QuoteOptionsSelect">
      <Stack.Screen name="QuoteOptionsSelect" component={QuoteOptionsScreen} />
      <Stack.Screen name="CreateQuote" component={CreateQuoteScreen} />
      <Stack.Screen
        name="CreateQuoteColorBackground"
        component={CreateQuoteBackgroundScreen}
      />
      <Stack.Screen
        name="CreateQuoteColor"
        component={CreateQuoteColorScreen}
      />
      <Stack.Screen name="QuoteCreated" component={QuoteCreatedScreen} />
      <Stack.Screen name="QuoteLibrary" component={QuoteLibraryScreen} />
    </Stack.Navigator>
  );
};

export default QuoteOptionsNavigator;
