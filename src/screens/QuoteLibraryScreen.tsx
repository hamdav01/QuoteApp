import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { deleteQuote, QuoteType, subscribeToQuoteChange } from '../api/Quote';

import { AuthContext } from '../context/auth/AuthProvider';

const QuaoteLibraryScreen: React.VFC = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const subscriber = subscribeToQuoteChange(user.uid, newQuotes =>
      setQuotes(newQuotes),
    );
    return () => subscriber();
  }, [user.uid]);

  const renderItem = ({ item }: { item: QuoteType }) => (
    <Text onPress={() => deleteQuote(user.uid, item.id)}>{item.text}</Text>
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
  contentContainer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
});
export default QuaoteLibraryScreen;
