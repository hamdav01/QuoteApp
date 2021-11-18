import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from './button';

interface Props {
  navigation: any;
}

const LoginScreen: React.VFC<Props> = ({ navigation }) => {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(userName ?? '', password ?? '')
      .then(() => {
        navigation.replace('Quote');
      })
      .catch(error => {
        setLoading(false);
        let errorMessage = 'Not set';
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'That email address is already in use!';
        }
        if (error.code === 'auth/invalid-email') {
          errorMessage = 'That email address is invalid!';
        }
        navigation.navigate('InfoModal', {
          headerText: 'Error ',
          bodyText: errorMessage,
        });
      });
  };
  const disabledButton = !userName || !password || loading;
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.root}>
        <TextInput
          textContentType="username"
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="username"
        />
        <TextInput
          textContentType="password"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="password"
        />
        <Button disabled={disabledButton} text="Sign in" onPress={signIn} />
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
  input: {
    margin: 12,
    borderWidth: 1,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
});

export default LoginScreen;
