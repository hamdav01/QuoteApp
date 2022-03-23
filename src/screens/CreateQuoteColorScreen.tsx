import { Slider } from '@miblanchard/react-native-slider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { addQuote } from '../api/Quote';
import Body from '../components/Body';
import Button from '../components/Button';
import Header from '../components/Header';
import { AuthContext } from '../context/auth/AuthProvider';
import { RootStackParamList } from '../navigation/QuoteOptionsStack';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateQuoteColor'>;

const CreateQuoteColorScreen: React.VFC<Props> = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [r, setR] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [g, setG] = useState<number>(0);

  const onDone = async () => {
    if (user?.uid) {
      try {
        setLoading(true);
        await addQuote(user.uid, {
          text: route.params.quoteText,
          textColor: `rgb(${r.toFixed(1)},${g.toFixed(1)},${b.toFixed(1)})`,
          backgroundColor: route.params.backgroundColor,
        });
        navigation.navigate('QuoteCreated');
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={[styles.root, { backgroundColor: route.params.backgroundColor }]}>
      <View style={styles.headerText}>
        <Header color={`rgb(${r},${g},${b})`} text={route.params.quoteText} />
      </View>
      <View style={styles.container}>
        <Body text="Red" style={styles.text} />
        <Slider
          containerStyle={styles.slider}
          value={r}
          onValueChange={value => setR(Array.isArray(value) ? value[0] : value)}
          maximumValue={360}
          minimumValue={0}
        />
        <Body text="Blue" style={styles.text} />
        <Slider
          containerStyle={styles.slider}
          value={b}
          onValueChange={value => setB(Array.isArray(value) ? value[0] : value)}
          maximumValue={360}
          minimumValue={0}
        />
        <Body text="Green" style={styles.text} />
        <Slider
          containerStyle={styles.slider}
          value={g}
          onValueChange={value => setG(Array.isArray(value) ? value[0] : value)}
          maximumValue={360}
          minimumValue={0}
        />
      </View>
      <View style={styles.fill} />
      <Button
        loading={loading}
        text="Done"
        styleButton={styles.button}
        onPress={onDone}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  fill: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    marginVertical: 24,
  },
  text: {
    fontWeight: 'bold',
  },
  slider: {
    marginBottom: 16,
  },
  headerText: {
    marginTop: 24,
    alignSelf: 'center',
  },
});

export default CreateQuoteColorScreen;
