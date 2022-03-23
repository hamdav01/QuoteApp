import { Slider } from '@miblanchard/react-native-slider';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Body from '../components/Body';
import Button from '../components/Button';
import { RootStackParamList } from '../navigation/QuoteOptionsStack';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateQuoteColor'>;

const CreateQuoteBackgroundScreen: React.VFC<Props> = ({
  route,
  navigation,
}) => {
  const [r, setR] = useState<number>(360);
  const [b, setB] = useState<number>(360);
  const [g, setG] = useState<number>(360);
  const [a, setA] = useState<number>(1);

  const onDone = async () => {
    navigation.navigate('CreateQuoteColor', {
      quoteText: route.params.quoteText,
      backgroundColor: `rgba(${r.toFixed(1)},${g.toFixed(1)},${b.toFixed(
        1,
      )},${a.toFixed(1)})`,
    });
  };
  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={[
        styles.root,
        {
          backgroundColor: `rgba(${r.toFixed(1)},${g.toFixed(1)},${b.toFixed(
            1,
          )},${a.toFixed(1)})`,
        },
      ]}>
      <View style={styles.container}>
        <Body style={styles.text} text="Red" />
        <Slider
          containerStyle={styles.slider}
          value={r}
          onValueChange={value => setR(Array.isArray(value) ? value[0] : value)}
          maximumValue={360}
          minimumValue={0}
        />
        <Body style={styles.text} text="Blue" />
        <Slider
          containerStyle={styles.slider}
          value={b}
          onValueChange={value => setB(Array.isArray(value) ? value[0] : value)}
          maximumValue={360}
          minimumValue={0}
        />
        <Body style={styles.text} text="Green" />
        <Slider
          containerStyle={styles.slider}
          value={g}
          onValueChange={value => setG(Array.isArray(value) ? value[0] : value)}
          maximumValue={360}
          minimumValue={0}
        />
        <Body style={styles.text} text="Alpha" />
        <Slider
          containerStyle={styles.slider}
          value={a}
          onValueChange={value => setA(Array.isArray(value) ? value[0] : value)}
          maximumValue={1}
          minimumValue={0}
        />
      </View>
      <View style={styles.fill} />
      <Button text="Next" styleButton={styles.button} onPress={onDone} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  container: {
    flexGrow: 1,
    marginHorizontal: 12,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 200,
    height: 50,
    marginVertical: 24,
  },
  slider: {
    marginBottom: 16,
  },
  fill: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
  },
  headerText: {
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default CreateQuoteBackgroundScreen;
