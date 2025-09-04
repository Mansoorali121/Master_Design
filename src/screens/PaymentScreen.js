import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../assets/BackButton';
import { s, vs } from 'react-native-size-matters';
import PaymentMethodCard from '../components/PaymentMethodCard';
import { CashICon, VisaIcon } from '../assets/Icons';
import PaymentList from '../components/PaymentList';
import BankCardbox from '../components/BankCardbox';
import AddButton from '../components/AddButton';

const PaymentScreen = () => {
  return (
    <View style={{ flex: 1, marginTop: vs(50), paddingHorizontal: s(24) }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: vs(37),
        }}
      >
        <BackButton />
        <Text
          style={{
            fontSize: s(17),
            color: '#181C2E',
            marginStart: s(18),
          }}
        >
          Payment
        </Text>
      </View>
      {/* Payment Method Component */}
      {/* <PaymentMethodCard  title="Cash" icon={<CashICon/>}/>
      <PaymentMethodCard isselected={true}  title="Visa" icon={<VisaIcon/>}/> */}
      <PaymentList/>
      {/* Bank Card Box  */}
      <View style={{paddingHorizontal:s(16)}}>
        <BankCardbox/>
        <AddButton/>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
