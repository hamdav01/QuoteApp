import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { getTodayQuote, QuoteType } from '../api/Quote';
import Header from '../components/Header';
import LoadingComponent from '../components/Loading';
import { AuthContext } from '../context/auth/AuthProvider';

const QuoteScreen: React.VFC = () => {
  const [quote, setQuote] = useState<QuoteType>();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      const newQuote = await getTodayQuote(user.uid);
      setQuote(newQuote);
    })();
  }, []);
  if (quote === undefined) {
    return <LoadingComponent />;
  } else if (quote === null) {
  }
  return (
    <SafeAreaView
      style={{ ...styles.root, backgroundColor: quote.backgroundColor }}>
      <Header
        style={styles.header}
        color={quote.textColor}
        text={quote.text}
        align="center"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginHorizontal: 12,
  },
});

export default QuoteScreen;
