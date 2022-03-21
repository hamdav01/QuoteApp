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
  const [r, setR] = useState<number | number[]>(360);
  const [b, setB] = useState<number | number[]>(360);
  const [g, setG] = useState<number | number[]>(360);
  const [a, setA] = useState<number | number[]>(1);

  const onDone = async () => {
    navigation.navigate('CreateQuoteColor', {
      quoteText: route.params.quoteText,
      backgroundColor: `rgba(${r},${g},${b},${a})`,
    });
  };
  return (
    <SafeAreaView
      edges={['left', 'right']}
      style={[styles.root, { backgroundColor: `rgba(${r},${g},${b},${a})` }]}>
      <View style={styles.container}>
        <Body style={styles.text} text="Red" />
        <Slider
          containerStyle={styles.slider}
          value={r}
          onValueChange={value => setR(value)}
          maximumValue={360}
          minimumValue={0}
        />
        <Body style={styles.text} text="Blue" />
        <Slider
          containerStyle={styles.slider}
          value={b}
          onValueChange={setB}
          maximumValue={360}
          minimumValue={0}
        />
        <Body style={styles.text} text="Green" />
        <Slider
          containerStyle={styles.slider}
          value={g}
          onValueChange={setG}
          maximumValue={360}
          minimumValue={0}
        />
        <Body style={styles.text} text="Alpha" />
        <Slider
          containerStyle={styles.slider}
          value={a}
          onValueChange={setA}
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