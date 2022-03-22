import firestore from '@react-native-firebase/firestore';
import { getRandomInt } from '../utils/Random';
import { getTodaysDate } from '../utils/Date';

interface RawQuoteType {
  backgroundColor: string;
  textColor: string;
  text: string;
}
export interface QuoteType extends RawQuoteType {
  id: string;
}

export const getRandomQuote = async (id: string) => {
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

export const getTodayQuote = async (id: string): Promise<QuoteType> => {
  const todaysDate = getTodaysDate();
  const rawTodaysQuotes = await firestore()
    .collection('Users')
    .doc(id)
    .collection('Quotes')
    .where('date', '==', todaysDate)
    .get();
  const todaysQuote = rawTodaysQuotes.docs[0];
  if (todaysQuote !== undefined) {
    return {
      id: todaysQuote.id,
      ...(todaysQuote.data() as RawQuoteType),
    };
  }
  const quote = await getRandomQuote(id);
  await firestore()
    .collection('Users')
    .doc(id)
    .collection('Quotes')
    .doc(quote.id)
    .update({ date: todaysDate });
  return quote;
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
