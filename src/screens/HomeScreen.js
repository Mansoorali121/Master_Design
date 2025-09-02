import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import Toptabs from '../components/Toptabs';
import MeditationCard from '../components/MeditationCard';
import { dummyData } from '../data/data';

const HomeScreen = () => {
  return (
    <View
      style={{
        marginTop: vs(40),
        paddingHorizontal: s(16),
      }}
    >
      <Text
        style={{
          fontWeight: '600',
          fontSize: s(20),
          marginBottom: vs(6),
          color: '#1D150F',
        }}
      >
        Meditations
      </Text>

      <Text
        style={{
          color: '#2C2016',
          fontSize: s(14),
          marginBottom: vs(16),
        }}
      >
        Lorem Ispum is simply dummy text{' '}
      </Text>
      <Toptabs />

      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MeditationCard
            imageURL={item.image}
            title={item.title}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom:vs(150),
          paddingTop:vs(14)
        }}
      />
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
