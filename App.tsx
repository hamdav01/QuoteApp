import React from 'react';
import { AuthProvider } from './src/context/auth/AuthProvider';
import Routes from './src/navigation/Routes';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '443892608547-r7f5j7oauqagqu60r61lg9rpuijq27uh.apps.googleusercontent.com',
});

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
