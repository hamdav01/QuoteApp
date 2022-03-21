import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
  readonly text: string;
  readonly style?: Record<string, unknown>;
  readonly align?: TextStyle['textAlign'];
}

const Body: React.VFC<Props> = ({ text, style = {}, align = 'auto' }) => (
  <Text style={{ ...styles.body, ...style, textAlign: align }}>{text}</Text>
);
const styles = StyleSheet.create({
  body: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Body;
