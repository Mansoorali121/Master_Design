import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Userprofile from '../components/Userprofile';
import BackButton from '../assets/BackButton';
import { s, vs } from 'react-native-size-matters';
import SendButton from '../components/SendButton';
import SocialCircle from '../components/SocialCircle';
import SocialSection from '../components/SocialSection';

const ContactUsScreen = () => {
  return (
    <View style={{ marginTop: vs(20) , paddingHorizontal:s(17)}}>
      <View style={styles.header}>
        <BackButton />
        <Userprofile />
      </View>
  {/* Social Section Here  */}
             <SocialSection/>

    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between' },
});
