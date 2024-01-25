import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../assets/Variable';

const IconComponent = props => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    onPress={props.function}
    style={styles.button} >
    <Icon name={props.iconName} size={20} color="#fff" style={styles.icon} />
   
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   
    padding: 10,
    borderRadius: 50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    backgroundColor:Variable.colors.primary.default,
    opacity:0.47,
    
  },
  
  icon:{
    color:Variable.colors.dark,
  }
});

export default IconComponent;