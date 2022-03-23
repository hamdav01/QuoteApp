import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { updateQuote } from '../api/Quote';
import Body from '../components/Body';
import Button from '../components/Button';
import { AuthContext } from '../context/auth/AuthProvider';
import { RootStackParamList } from '../navigation/QuoteOptionsStack';

type Props = NativeStackScreenProps<RootStackParamList, 'EditQuoteText'>;

const EditQuoteTextScreen: React.VFC<Props> = ({ navigation, route }) => {
  const { user } = useContext(AuthContext);
  const [quoteText, setQuoteText] = useState(route.params.quoteText);

  const onNext = async () => {
    if (user?.uid) {
      try {
        await updateQuote(user.uid, route.params.quoteId, quoteText);
        navigation.pop();
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <SafeAreaView edges={['left', 'right']} style={styles.root}>
      <Body text={quoteText} />
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        onChangeText={setQuoteText}
        value={quoteText}
        placeholder={route.params.quoteText}
      />
      <Button
        text="Done"
        disabled={quoteText === ''}
        styleButton={styles.button}
        onPress={onNext}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  input: {
    marginVertical: 6,
    paddingLeft: 6,
    borderWidth: 1,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: 200,
    height: 50,
    marginVertical: 24,
  },
});

export default EditQuoteTextScreen;
