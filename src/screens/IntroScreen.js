import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FoodLogo from "../assets/Foodlogo"

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo />

      <Image
        style={styles.image}
        source={require('../assets/mainlogo.png')}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { height: 200, width: 200, bottom: 0, position: 'absolute', right: 0 },
});
