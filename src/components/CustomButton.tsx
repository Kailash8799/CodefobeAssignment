import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {CustomButtonTypes} from '../types/button';

const CustomButton = (data: CustomButtonTypes) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.button,
          data.isdisabled && styles.buttonDisabled,
          {borderRadius: data.borderRadius ?? 5},
        ]}
        onPress={data.onClick ?? (() => {})}
        disabled={data.isdisabled ?? false}>
        <Text style={styles.buttontext}>{data.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },

  buttontext: {
    color: '#fff',
  },
});
