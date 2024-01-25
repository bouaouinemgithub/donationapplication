import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../assets/Variable';
const {width,height} =Dimensions.get('window');
const IconUser = props => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={props.function}
    style={styles.button} >
    <Icon name={props.icon} size={20} color="#fff" style={styles.icon} />
   </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   
    padding: 10,
    borderRadius: 8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:width*0.13,
    height:height*0.06,
    backgroundColor:Variable.colors.primary[300],
    opacity:0.40,
    zIndex:1,
    position:'relative'
    
  },
  
  icon:{
    color:Variable.colors.primary.default,
    zIndex:2,
  }
});

export default IconUser;