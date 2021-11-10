import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import MainComponent from './src/main';

const App: React.VFC = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MainComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
