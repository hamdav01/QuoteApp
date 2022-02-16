import React from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const QuoteScreen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root}></View>
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
