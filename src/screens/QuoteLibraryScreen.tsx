import React, { useContext, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { deleteQuote, QuoteType, subscribeToQuoteChange } from '../api/Quote';
import Body from '../components/Body';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../context/auth/AuthProvider';
import { RootStackParamList } from '../navigation/QuoteOptionsStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'QuoteLibrary'>;

const QuaoteLibraryScreen: React.VFC<Props> = ({ navigation }) => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const subscriber = subscribeToQuoteChange(user.uid, newQuotes =>
      setQuotes(newQuotes),
    );
    return () => subscriber();
  }, [user.uid]);

  const renderItem = ({ item }: { item: QuoteType }) => (
    <View style={styles.item}>
      <Text
        style={styles.itemText}
        onPress={() => {
          navigation.navigate('EditQuoteText', {
            quoteId: item.id,
            quoteText: item.text,
          });
        }}>
        {item.text}
      </Text>
      <View style={styles.itemButton}>
        <TouchableWithoutFeedback
          onPress={() => deleteQuote(user.uid, item.id)}>
          <MaterialCommunityIcons name="delete" color="black" size={26} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );

  return (
    <SafeAreaView edges={['left', 'right']} style={styles.root}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={quotes}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },
  item: {
    marginVertical: 24,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  itemText: {
    marginRight: 32,
    flexBasis: 260,
  },
  itemButton: {
    flexBasis: 32,
  },
  contentContainer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
});
export default QuaoteLibraryScreen;
