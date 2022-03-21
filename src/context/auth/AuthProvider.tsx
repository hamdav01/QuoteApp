import React, { createContext, ReactNode, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { login } from './utils/login';
import { register } from './utils/register';
import { logout } from './utils/logout';
import { googleLogin } from './utils/googleLogin';

type FirebaseUser = FirebaseAuthTypes.User;

interface AuthProvider {
  user: FirebaseUser;
  setUser: (user: FirebaseUser) => void;
  login: typeof login;
  register: typeof register;
  logout: typeof logout;
  googleLogin: typeof googleLogin;
}

export const AuthContext = createContext<AuthProvider>({} as AuthProvider);

interface Props {
  children: ReactNode;
}

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [user, setUser] = useState<FirebaseUser>({} as FirebaseUser);
  return (
    <AuthContext.Provider
      value={{
        user,
        googleLogin,
        setUser,
        login,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
