import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { VideoIcon } from '../assets/Icons';

const phoneWidth = Dimensions.get("window").width

const cardWidth =( phoneWidth - s (12) *3 ) /2
const MeditationCard = ({imageURL,title,date}) => {
  return (
    <ImageBackground
      style={styles.imagecontainer}
      source={{
        uri: imageURL,
      }}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.livebedge}>
        <Text style={styles.livetext}>Live</Text>

      </View>
      <View style={styles.cardcontent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <VideoIcon/>
            <Text style={styles.datetext}>{date}  </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imagecontainer: {
    height: vs(140),
    width: cardWidth,
    borderRadius: s(16),
    overflow: 'hidden',
  },
  image: 
  { width: '100%', 
    height: '100%', 
    resizeMode: 'cover',
     opacity: 0.7 }
  ,
  cardcontent: 
  { position: 'absolute', 
    left: s(10), 
    bottom: s(10) 

  },
  title: 
  { color: '#fff',
     fontSize: s(12), 
     fontWeight: '600' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.40)',
  },
  datetext:{color:"#fff",
    marginStart:s(7)},
  livebedge:{backgroundColor:"#E41111",
    height:s(22),
    width:s(39),
    borderRadius:s(90),
    position:"absolute",
    top:vs(7),
    right:s(10),
    justifyContent:"center",
    alignItems:"center"
  },
  livetext:
  {fontSize:s(11),
     fontWeight:"semibold",
       color:"#fff"},
});
