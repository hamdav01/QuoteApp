import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface Props {
  readonly text: string;
  readonly align?: TextStyle['textAlign'];
  readonly color?: string;
  readonly style?: Record<string, unknown>;
}

const Header: React.VFC<Props> = ({
  text,
  color = 'black',
  align = 'auto',
  style = {},
}) => (
  <Text style={{ ...styles.header, ...style, textAlign: align, color }}>
    {text}
  </Text>
);
const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 26,
  },
});

export default Header;
