import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {User} from '../types/user';
import Avatar from './Avatar';
import CustomInput from './CustomInput';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('screen');

const UserProfile = ({profile}: {profile: User}) => {
  return (
    <View style={styles.scrren}>
      <View style={styles.avatarview}>
        <Avatar image={profile?.avatar} />
      </View>
      <View style={styles.space} />

      <Text style={styles.text}>ID</Text>
      <CustomInput value={profile?.id} />
      <View style={styles.space} />

      <Text style={styles.text}>Username</Text>
      <CustomInput value={profile?.username} />
      <View style={styles.space} />

      <Text style={styles.text}>UID</Text>
      <CustomInput value={profile?.uid} />
      <View style={styles.space} />

      <Text style={styles.text}>First Name</Text>
      <CustomInput value={profile?.first_name} />
      <View style={styles.space} />

      <Text style={styles.text}>Last Name</Text>
      <CustomInput value={profile?.last_name} />
      <View style={styles.space} />

      <Text style={styles.text}>Email</Text>
      <CustomInput value={profile?.email} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  scrren: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
  },
  avatarview: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    color: '#000',
    marginHorizontal: 16,
    fontWeight: '500',
  },
  space: {
    height: 8,
  },
});
