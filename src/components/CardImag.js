import React from 'react';
import { TouchableOpacity, StyleSheet, Image,View } from 'react-native';
import Variable from '../../assets/Variable';
const MonImage = require('../../assets/Img/imag1.png');
// const { width, height } = Dimensions.get('window');
const CardImag = props => {
  return (
    <View>
          <View styles={styles.CardImag}>
              <Image source={props.imag} />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
    CardImag:{
          width:50,
          height:85,
          backgroundColor:'red',
          borderRadius:29
    }
});

export default CardImag;