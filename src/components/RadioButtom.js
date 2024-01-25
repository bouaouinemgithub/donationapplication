import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Dimensions,View } from 'react-native';
const {width,height} = Dimensions.get("window")
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../assets/Variable';


const RadioButtom = props => {
  return (
    <View>
      <View style={styles.Card}>
           <View style={styles.CardCercle}></View>
           <Text style={styles.CardText}>{props.title}</Text>
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  
    Card:{
         flexDirection:'row',
         justifyContent:'flex-start',
         alignItems:'center',
         marginBottom:12
    },
    CardCercle:{
         width:15,
         height:15,
         backgroundColor:Variable.colors.success,
         borderRadius:50
    },
    CardText:{
         fontSize:12,
         marginLeft:9,
         color:Variable.colors.dark
    }
});

export default RadioButtom;