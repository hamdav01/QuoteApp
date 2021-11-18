import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from './button';
import firestore from '@react-native-firebase/firestore';

// const usersCollection = firestore().collection('Quotes');
// const userDocument = firestore().collection('Quotes').doc('AllQuotes');

interface Props {
  navigation: any;
}

const QuoteScreen: React.VFC<Props> = ({ navigation }) => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => navigation.replace('Login'));
  };
  useEffect(() => {
    console.log(firestore().collection('Quotes').doc('General'));

    // Stop listening for updates when no longer required
    // return () => subscriber();
  }, []);
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root}>
        <Button text="Sign out" onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
  },
});

export default QuoteScreen;
