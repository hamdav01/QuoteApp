import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';

const InfoModal: React.VFC<any> = ({ route, navigation }) => {
  console.log('route: ', route);
  const { bodyText, headerText } = route.params;

  return (
    <View style={styles.root}>
      <View style={styles.box}>
        <Text style={styles.header}>{headerText}</Text>
        <Text style={styles.body}>{bodyText}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop()}>
          <Text>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
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
  button: {
    alignItems: 'center',
    backgroundColor: '#FF00FF',
    padding: 10,
    borderRadius: 8,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height,
  },
});

export default InfoModal;
