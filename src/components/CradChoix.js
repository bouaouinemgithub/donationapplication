import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions,View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../assets/Variable';
import IconUser from './IconUser';
const {width,height} =Dimensions.get('window');
const CradChoix = props => {
  return (
     <View>
          <View style={styles.CardChoix}>
              <View style={styles.Left} >
                <IconUser icon="user"/>
               <Text style={styles.LeftText}>{props.text}</Text>
              </View>
              
              <TouchableOpacity 
                activeOpacity={0.7}
                onPress={ props.function}
                style={styles.button} >
                <Icon name="chevron-right" size={20} color={Variable.colors.secondary[100]} style={styles.icon} />
             </TouchableOpacity>
 
         
          </View>
     </View>
   
  );
};

const styles = StyleSheet.create({
    CardChoix: {
       
          flexDirection:'row',
           justifyContent:'space-between',
           paddingVertical:10,
           width:width*0.84,
           alignItems:'center'
  },
  
  Left:{
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center'
  },
  LeftText:{
     paddingLeft:26,
     color:Variable.colors.light,
     fontSize:17
  }
});

export default CradChoix;