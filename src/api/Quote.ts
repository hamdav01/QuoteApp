import firestore, { firebase } from '@react-native-firebase/firestore';
import QuoteCreatedScreen from '../screens/QuoteCreatedScreen';
import { getRandomInt } from '../utils/Random';

interface RawQuoteType {
  backgroundColor: string;
  textColor: string;
  text: string;
}
export interface QuoteType extends RawQuoteType {
  id: string;
}

export const getQuotes = async (id: string) => {
  const quotesRawData = await firestore()
    .collection('Users')
    .doc(id)
    .collection('Quotes')
    .get();
  const quotes: QuoteType[] = [];
  quotesRawData.forEach(documentSnapshot => {
    quotes.push({
      id: documentSnapshot.id,
      ...(documentSnapshot.data() as RawQuoteType),
    });
  });
  const index = getRandomInt(quotes.length);
  return quotes[index];
};

export const setTodayQuote = async (id: string, quote: QuoteType) => {
  // return firestore()
  //   .collection('Users')
  //   .doc(id)
  //   .collection('Quotes')
  //   .add(quote);
};

export const addQuote = async (id: string, quote: RawQuoteType) => {
  return firestore()
    .collection('Users')
    .doc(id)
    .collection('Quotes')
    .add(quote);
};

export const deleteQuote = async (id: string, quoteId: string) => {
  return firestore()
    .collection('Users')
    .doc(id)
    .collection('Quotes')
    .doc(quoteId)
    .delete();
};

export const subscribeToQuoteChange = (
  id: string,
  setQuotes: (quotes: QuoteType[]) => void,
) => {
  return firestore()
    .collection('Users')
    .doc(id)
    .collection('Quotes')
    .onSnapshot(quotesRawData => {
      const quotes: QuoteType[] = [];
      quotesRawData.forEach(documentSnapshot => {
        quotes.push({
          id: documentSnapshot.id,
          ...(documentSnapshot.data() as RawQuoteType),
        });
      });
      setQuotes(quotes);
    });
};
