import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CashICon, Markicon } from '../assets/Icons';
import { s, vs } from 'react-native-size-matters';

const PaymentMethodCard = ({isselected = false, title,icon , onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: s(85) }}>
        {isselected && <View style={styles.checkmarkcontainewr}>
            <Markicon/>
            </View>}
      <View style={[styles.card, isselected && styles.selectedcardstyle]}>
        {icon}
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PaymentMethodCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F5FA',
    borderRadius: s(10),
    height: vs(72),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: 
  { fontSize: s(14),
     color: '#464E57',
      textAlign: 'center'
     },
     selectedcardstyle:{
        backgroundColor:"#fff",
        borderWidth:s(2),
        borderColor:"#FF7622"
     },
     checkmarkcontainewr:{
        height:s(24),
        width:s(24),
        borderRadius:s(12),
        borderWidth:s(2),
        borderColor:"#fff",
        backgroundColor:"#FF7622",
        position:"absolute",
        zIndex:1,
        top:s(-6),
        right: s(-6),
        justifyContent:"center",
        alignItems:"center"
     },
});
