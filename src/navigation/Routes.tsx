import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import LoadingComponent from '../components/Loading';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import { AuthContext } from '../context/auth/AuthProvider';

export const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const onAuthStateChanged: FirebaseAuthTypes.AuthListenerCallback = user => {
    setUser(user as FirebaseAuthTypes.User);
    setLoading(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

export default Routes;
