import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconComponent from '../components/IconComponent';
import ButtonClic from '../components/ButtonClick'
import CustomTextInput from '../components/CustomTextInput';
import ButtonClick from '../components/ButtonClick';

function Login({navigation}) {

// la prtie de fichier Json 
const Login = {
    
  "title": "Sign In:",
  "placeholderusername": "Username",
  "placeholderpassword":"Password",
  "forget" :"Forgot password?",
  "buttonlogin" :"LOGIN",
  "tag": "OR",
  "buttonsign" :"Sign Up"
}

  return (
   <View style={styles.container}>
    <View style={styles.Page}>
       <Text style={styles.Text}>{Login.title}</Text>
       <View style={styles.Top}>
          <CustomTextInput textInputplaceholder={Login.placeholderusername} />
          <CustomTextInput textInputplaceholder={Login.placeholderpassword} />
          <TouchableOpacity>
          <Text style={styles.Forgot}>{Login.forget}</Text>
          </TouchableOpacity>
          <ButtonClick title={Login.buttonlogin}/>
          <View style={styles.Center}>
                  <View style={styles.Ligne}></View>
                  <View style={styles.Cercle}><Text style={{fontWeight:'bold'}}>OR</Text></View>
            </View>
          <ButtonClick 
          title={Login.buttonsign}
          function={() => {
            navigation.navigate('SignUp')
          }} 
           />
         </View>
    </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:height*0.204
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
      }
});

 export default Login