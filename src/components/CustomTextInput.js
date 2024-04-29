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
const {width,height}= Dimensions.get("window")

  
  const CustomTextInput = props => {
    const [eye, setEye] = useState(true);
    const styleinput = [styles.input, props.styleinput]; 

    return (
      <View style={styles.searchSection}>
        <TextInput
          style={styleinput}
          placeholder={props.textInputplaceholder}
          underlineColorAndroid="transparent"
        
          value={props.textInputValue}
          onChangeText={props.textInputSetValue}
        />
        
       
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
  