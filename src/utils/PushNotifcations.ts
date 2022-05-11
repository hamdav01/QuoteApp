import { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }

export const useHandleNotifications = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    const ccc = async () => {
      const c = await messaging().getToken();
      console.log(c);
    };
    ccc();
    return unsubscribe;
  }, []);
};
