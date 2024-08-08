import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import UserProfile from '../components/UserProfile';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserService} from '../services/UserService';
import {User} from '../types/user';
import {Toaster} from '../utils/toast';
import CustomButton from '../components/CustomButton';

const {width} = Dimensions.get('screen');

const Profile = () => {
  const [profiles, setProfiles] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const ref = useRef<FlatList>(null);

  const handlePrevious = useCallback(() => {
    if (currentIndex === 0) {
      return;
    }
    ref.current?.scrollToOffset({
      offset: (currentIndex - 1) * width,
      animated: true,
    });
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < profiles.length - 1) {
      ref.current?.scrollToOffset({
        offset: (currentIndex + 1) * width,
        animated: true,
      });
    }
  }, [currentIndex, profiles.length]);

  const handleOnScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const ind = Math.floor(e.nativeEvent.contentOffset.x / width);
      setCurrentIndex(ind);
    },
    [],
  );

  const fetchProfile = useCallback(async () => {
    setIsFetching(true);
    const userProfiles: User[] | undefined = await UserService.getUserProfiles(
      80,
    );
    if (userProfiles === undefined || userProfiles === null) {
      Toaster.toast('Failed to fetch user profiles try again later');
      return;
    }
    setProfiles(userProfiles);
    setIsFetching(false);
  }, []);

  const refreshProfile = () => {
    fetchProfile();
  };

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return isFetching ? (
    <SafeAreaView>
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading...</Text>
      </View>
    </SafeAreaView>
  ) : profiles.length === 0 ? (
    <SafeAreaView>
      <View style={styles.loading}>
        <Text style={styles.text}>No profiles found</Text>
        <CustomButton
          title="Refresh"
          borderRadius={30}
          onClick={refreshProfile}
        />
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <FlatList
        ref={ref}
        onScroll={handleOnScroll}
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        data={profiles}
        keyExtractor={(item: User) => item.uid}
        renderItem={({item}: {item: User}) => {
          return <UserProfile key={item.uid} profile={item} />;
        }}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Previous"
          borderRadius={30}
          isdisabled={currentIndex === 0}
          onClick={handlePrevious}
        />
        <CustomButton
          title="Next"
          borderRadius={30}
          isdisabled={currentIndex === profiles.length - 1}
          onClick={handleNext}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
  },
  loading: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
    color: '#000',
  },
});
