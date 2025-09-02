import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const tabArray = ['Live', 'Recorded'];
const ACTIVE_BG = '#75563B';
const ACTIVE_TEXT = '#FFFFFF';
const INACTIVE_TEXT = '#2C2016';

const Toptabs = () => {
  const [activetab, setActiveTab] = useState('Live');
  return (
    <View style={styles.container}>
      {tabArray.map(tabName => {
        return (
          <TouchableOpacity onPress={()=>setActiveTab(tabName)}
            key={tabName} // ✅ added unique key
            style={[
              styles.tabButton,
              activetab === tabName && { backgroundColor: ACTIVE_BG },
            ]}
          >
            <Text
              style={
                activetab === tabName ? styles.activeText : styles.inactiveText
              }
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Toptabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F4',
    borderRadius: s(12),
    height: vs(48),
    flexDirection: 'row',
    alignItems: 'center',
    padding: s(4),
  },
  tabButton: {
    flex: 1,
    borderRadius: s(8),
    justifyContent: 'center',
    height: s(34),
  },
  activeText: {
    color: ACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: 'semibold',
    textAlign: 'center',
  }, // ✅ semibold → 600
  inactiveText: {
    color: INACTIVE_TEXT,
    fontSize: s(14),
    fontWeight: 'semibold',
    textAlign: 'center',
  }, // ✅ semibold → 600
});
