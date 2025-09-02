import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { VideoIcon } from '../assets/Icons';

const MeditationCard = () => {
  return (
    <ImageBackground
      style={styles.imagecontainer}
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaW54B8_rlZItRtAeT_RoZIAiuxH42hYd5Q&s',
      }}
      imageStyle={styles.image}
    >
      <View style={styles.overlay} />
      <View style={styles.livebedge}>
        <Text style={styles.livetext}>Live</Text>

      </View>
      <View style={styles.cardcontent}>
        <Text style={styles.title}>Meditations</Text>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <VideoIcon/>
            <Text style={styles.datetext}>31st Jan - 09:00 am  </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  imagecontainer: {
    height: vs(161),
    width: s(166),
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
