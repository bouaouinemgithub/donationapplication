import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions,TouchableOpacity, Image } from 'react-native';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import { validate } from 'react-native-web/dist/cjs/exports/StyleSheet/validate';
import ButtonClick from '../components/ButtonClick';
const MonImage = require('../../assets/Img/user.png');
function ConfirmRequests({navigation}) {

const SignUp = {
    
  "title": "Food Details:",
  "placeholderusername": "Item Name",
  "placeholdernumber":"Time Of preparation",
  "placeholderquantity":"Quantity",
  "placeholderaddress":"Address",
  "placeholderemail":"Email Id",
  "placeholderpassword":"Password",
  "button" :"Submit",
  "instead" :"Sign in instead"
}
  return (
   <View style={styles.container}>
    <View style={styles.Page}>
        <Text style={styles.Title}>Confirm Requestsss</Text>
        <View style={styles.Card}>
            <View style={{position:'absolute',backgroundColor:Variable.colors.success,
            width:width*0.93,zIndex:0,left:15,opacity:0.15}}>
            </View>
            <View style={{position:'absolute',backgroundColor:Variable.colors.success,
            zIndex:2,alignItems:'center',width:width*0.93,left:12}}>
            <Image style={styles.CardImag} source={MonImage} />

            <Text style={styles.CardTitle}>Youth red Cross VEC</Text>
            <View style={{width:'100%',paddingLeft:37,marginBottom:31}}>
            <Text>Quantity : 15</Text>
             <Text>Location - Thirumulaivoyil</Text>
             <Text>Need before - 2:30 pm</Text>
            </View>
            <View style={{backgroundColor:'white',width:'84.7%',marginBottom:40
            ,height:100,borderRadius:5}}>
           
            </View>
           
             </View>
            
        </View>
    </View>
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:height*0.113
    
  },
  Title:{
     textAlign:'center',
     color:Variable.colors.dark,
     fontSize:Variable.fontSizes.medium,
     fontWeight:'bold',
     marginBottom:27,
  },
  Card:{
    width:width*0.93,
    backgroundColor:'Variable.colors.success',
    position:'relative',
    alignItems:'center',
  },
 
  CardImag:{
     
    width:width*0.238,
    height:height*0.12,
    borderRadius:100,
    marginTop:24,
    marginBottom:22
  },
  CardTitle:{
    color:Variable.colors.dark,
    fontSize:Variable.fontSizes.large,
    marginBottom:56,
    fontWeight:'bold',
    

}

 
 
});

 export default ConfirmRequests