import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconComponent from '../components/IconComponent';
import ButtonClic from '../components/ButtonClick'
import CustomTextInput from '../components/CustomTextInput';
import ButtonClick from '../components/ButtonClick';
import { validate } from 'react-native-web/dist/cjs/exports/StyleSheet/validate';
import RadioButtom from '../components/RadioButtom';

function SignUp({navigation}) {

// la prtie de fichier Json 
const SignUp = {
    
  "title": "Register:",
  "placeholderusername": "Name",
  "placeholdernumber":"Phone Number",
  "placeholderemail":"Email Id",
  "placeholderpassword":"Password",
  "button" :"Submit",
  "instead" :"Sign in instead"
}
  return (
   <View style={styles.container}>
    <View style={styles.Page}>
       <Text style={styles.Text}>{SignUp.title}</Text>
       <View style={styles.Top}>
          <CustomTextInput textInputplaceholder={SignUp.placeholderusername} />
          <CustomTextInput textInputplaceholder={SignUp.placeholdernumber} />
          <View style={{marginVertical:height*0.05}}>
           <RadioButtom title="NGO" />
            <RadioButtom title="Restaurant" />
          </View>
           <CustomTextInput textInputplaceholder={SignUp.placeholderemail} />
          <CustomTextInput textInputplaceholder={SignUp.placeholderpassword} />
            <View style={{marginVertical:height*0.05}}>
              <ButtonClick 
               title={SignUp.button}
               function={() => {
                  navigation.navigate('RestaurantLogin')
                }} 
               />
            </View>
          </View>
            <TouchableOpacity >
          <Text style={styles.SingInsted}>{SignUp.instead}</Text>
          </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:height*0.18
    
  },
 
  Text:{
    
     fontSize:Variable.fontSizes.medium,
     color:Variable.colors.dark,
    fontWeight:'bold',
    paddingLeft:45,
    marginBottom:24
  },
  Top:{
     alignItems:'center'
  },
  Forgot:{
     marginTop:10,
     fontSize:Variable.fontSizes.minsmall,
     color:Variable.colors.primary.default,
     marginBottom:21
  },

  Center:{
     
       marginTop:35,
       position:'relative',
       alignItems:'center',
       justifyContent:'center',
       width:'100%',
       marginBottom:120

  },
  Ligne:{
     
     width:width*0.84,
     backgroundColor:Variable.colors.dark,
     height:2,
     position:'absolute',
     top:35
  },
  Cercle:{
     width:width*0.138,
     height:height*0.0625,
     position:'absolute',
     borderRadius:50,
     top:10,
     backgroundColor:Variable.colors.primary.default,
     alignItems:'center',
     justifyContent:'center'
      },
 
      SingInsted:{
          marginLeft:56,
          color:Variable.colors.blue,
          fontSize:13
      }
});

 export default SignUp