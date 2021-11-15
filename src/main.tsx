import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import auth from '@react-native-firebase/auth';

interface Props {
  navigation: any;
}

const Main: React.VFC<Props> = ({ navigation }) => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    console.log(user);
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        userName ?? '',
        password ?? '', //  'janes.doe@example.com',
        //  'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
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

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

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
        <TouchableOpacity
          disabled={!userName || !password}
          style={styles.button}
          onPress={signIn}>
          <Text>Sign in</Text>
        </TouchableOpacity>
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
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 8,
  },
});

export default Main;
