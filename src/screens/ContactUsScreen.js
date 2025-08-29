import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Userprofile from '../components/Userprofile';
import BackButton from '../assets/BackButton';
import { s, vs } from 'react-native-size-matters';

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(50) , paddingHorizontal:s(17)}}>
      <View style={styles.header}>
        <BackButton />
        <Userprofile />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between' },
});
