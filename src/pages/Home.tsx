import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationType} from '../types/user';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Home = ({navigation}: NavigationType) => {
  const pushToProfile = useCallback(() => {
    navigation.navigate('profile');
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={pushToProfile}>
          <Text style={styles.buttontext}>Get Profiles</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttontext: {
    color: '#fff',
  },
});
