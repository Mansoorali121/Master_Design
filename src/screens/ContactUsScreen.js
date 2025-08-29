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
    <View style={{ marginTop: vs(20), paddingHorizontal: s(17) }}>
      <View style={styles.header}>
        <BackButton />
        <Userprofile />
      </View>
      <Text style={styles.screenTitle}>Contact Us </Text>
      {/* Social Section Here  */}
      <View style={styles.socialContainer}>
        <Text style={styles.socialtitle}>Social Media Platforms</Text>
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
        <SocialSection />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  socialContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: vs(15),
    marginTop: vs(22),
  },
  socialtitle: {
    fontSize: s(16),
    fontWeight: 'semibold',
  },
  screenTitle: {
    fontSize: s(30),
    fontWeight: 'semibold',
    marginTop: vs(20),
    marginStart: s(19),
  },
});
