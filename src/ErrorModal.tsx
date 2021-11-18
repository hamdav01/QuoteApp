import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Button from './button';

const InfoModal: React.VFC<any> = ({ route, navigation }) => {
  const { bodyText, headerText } = route.params;
  return (
    <View style={styles.root}>
      <View style={styles.box}>
        <Text style={styles.header}>{headerText}</Text>
        <Text style={styles.body}>{bodyText}</Text>
        <Button text="Ok" onPress={() => navigation.pop()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    width: '90%',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    marginBottom: 24,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
  },
});

export default InfoModal;
