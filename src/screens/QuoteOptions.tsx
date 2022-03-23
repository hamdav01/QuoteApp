import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { RootStackParamList } from '../navigation/QuoteOptionsStack';

type Props = NativeStackScreenProps<RootStackParamList, 'QuoteOptionsSelect'>;
const QuoteOptionsScreen: React.VFC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView edges={['left', 'right']} style={styles.root}>
      <Button
        text="Create Quote"
        styleButton={styles.button}
        onPress={() => navigation.navigate('CreateQuote')}
      />
      <Button
        text="Quote library"
        styleButton={styles.button}
        onPress={() => navigation.navigate('QuoteLibrary')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 50,
    marginVertical: 12,
  },
});

export default QuoteOptionsScreen;
