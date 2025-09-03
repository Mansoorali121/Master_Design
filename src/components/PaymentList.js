import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import {
  CashICon,
  MasterCardIcon,
  PaypalIcon,
  VisaIcon,
} from '../assets/Icons';
import PaymentMethodCard from './PaymentMethodCard';
import { s, vs } from 'react-native-size-matters';

const Paymentmethods = [
  { label: 'Cash', icon: <CashICon /> },
  { label: 'Visa', icon: <VisaIcon /> },
  { label: 'Master Card', icon: <MasterCardIcon /> },
  { label: 'Paypal', icon: <PaypalIcon /> },
];
const PaymentList = () => {
    const [selected,setSelected] = useState("Cash")
  return (
    <View>
      <FlatList
        data={Paymentmethods}
        keyExtractor={item => item.label}
        renderItem={({ item }) => (
          <PaymentMethodCard title={item.label} icon={item.icon}
          onPress={()=>setSelected(item.label)}
          isselected={selected==item.label}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(16) , paddingHorizontal:s(24), paddingTop:vs(15)}}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
