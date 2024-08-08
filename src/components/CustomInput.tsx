import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = ({value}: {value: string}) => {
  return (
    <View style={styles.inputview}>
      <TextInput
        value={value.toString()}
        style={styles.input}
        editable={false}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 17,
    color: 'grey',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputview: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
});
