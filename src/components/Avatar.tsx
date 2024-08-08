import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

const Avatar = ({image}: {image: string}) => {
  return (
    <View>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    backgroundColor: 'grey',
    borderRadius: 100,
  },
});
