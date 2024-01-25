import {
  Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  import Variable from '../../assets/Variable';
import { validate } from 'react-native-web/dist/cjs/exports/StyleSheet/validate';
const {width,height}= Dimensions.get("window")

  
  const CustomTextInput = props => {
    const [eye, setEye] = useState(true);
    const styleinput = [styles.input, props.styleinput]; // Fusionner les styles du conteneur

    return (
      <View style={styles.searchSection}>
        <TextInput
          style={styleinput}
          placeholder={props.textInputplaceholder}
          underlineColorAndroid="transparent"
          // c est pour afficier le text
          // secureTextEntry={eye}
          // value={old_password}
          value={props.textInputValue}
          onChangeText={props.textInputSetValue}
        />
        
        {
            // c est js pour affichier le text
        /* eye-outline */}
        {/* <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            setEye(!eye);
          }}> */}
          {/* <Icon
            size={24}
            color={Variable.colors.danger}
            type="ionicon"
            name={eye ? 'ios-eye' : 'ios-eye-off'}
          // /> */}
        {/* </TouchableOpacity> */}
      </View>
    );
  };
  
  export default CustomTextInput;
  
  const styles = StyleSheet.create({
    input: {
      flex: 1,
      backgroundColor: Variable.colors.white,
      color: Variable.colors.dark,
      fontSize: 13,
      borderRadius:100,
      paddingLeft:20
    },
    searchSection: {
      
      width: width*0.69,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Variable.colors.white,
      borderRadius: 100,
      marginBottom: 18,
      paddingHorizontal: 20,
      paddingVertical:10,
    },
  });
  