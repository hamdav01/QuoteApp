import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  disabled?: boolean;
  text: string;
  onPress: () => void;
}

const Button: React.VFC<Props> = ({ disabled = false, text, onPress }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        disabled ? styles.disabledButton : styles.enabledButton,
      ]}
      onPress={onPress}>
      <Text style={disabled ? {} : styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#DDDDDD',
  },
  enabledButton: {
    backgroundColor: '#1a73e8',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Button;
