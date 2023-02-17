import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ProfileComponent from '../components/atoms/ProfileComponent';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ProfileComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#111c2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
