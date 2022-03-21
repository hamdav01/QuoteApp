import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Button from '../components/Button';
import { AuthContext } from '../context/auth/AuthProvider';

const QuoteScreen: React.VFC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.root}>
      <Button text="Logout" onPress={logout} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginHorizontal: 12,
  },
});

export default QuoteScreen;
