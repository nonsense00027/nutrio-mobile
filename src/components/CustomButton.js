import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Colors from '../shared/theme/Colors';
import tw from 'tailwind-react-native-classnames';

const CustomButton = ({title, disabled, loading, action}) => {
  return (
    <Button
      title={title}
      buttonStyle={[tw`rounded-full w-full py-4`, {...styles.button}]}
      titleStyle={styles.buttonLabel}
      disabled={disabled}
      loading={loading}
      onPress={action}
    />
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 17,
    borderRadius: 38,
  },
  buttonDisabled: {
    backgroundColor: Colors.input,
  },
  buttonLabel: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: '600',
    // fontSize: 16,
  },
});
