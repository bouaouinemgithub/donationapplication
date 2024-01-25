import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions,Image } from 'react-native';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconComponent from '../components/IconComponent';
const MonImage = require('../../assets/Img/imag5.png');
import ButtonClic from '../components/ButtonClick'
import ButtonClick from '../components/ButtonClick';
import IconUser from '../components/IconUser';

function RestaurantLogin({navigation}) {

// la prtie de fichier Json 
const RestaurantLogin = {
    
  
  "title": "Welcome Back Saravana bavan!",
  "imagepath":MonImage,
   "button1" :"Make a Donation",
   "button2" :"Your Donations",
   "button3" :"Donation Requests",

}

  return (
   <View style={styles.container}>
    
      <Text style={styles.Title}>Welcome Back Saravana bavan!</Text>
      <View  style={styles.Page}>
           <Image style={styles.PageImag} source={MonImage} />
           <ButtonClick title="Make a Donation"
             containerStyle={styles.customButton1} 
            />
             <ButtonClick title="Your Donations"
             containerStyle={styles.customButton1} 
            />
             <ButtonClick title="Donation Requests"
             containerStyle={styles.customButton1} 
            />
      </View>
      <View style={{position:'absolute',right:20,bottom:25}}>
      <IconUser icon="user"/>
      </View>
     
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:height*0.09,
    position:'relative'
  },
  Title:{
     fontSize:20,
     color:Variable.colors.dark,
     width:width*0.60,
     textAlign:'center',
     fontWeight:'bold',
     marginBottom:20
  },

  Page:{
      width:width*0.66,
      alignItems:'center'

  },
  PageImag:{
     width:'100%',
     marginBottom:30,
     borderRadius:15
     
  },
  customButton1:{
     backgroundColor:Variable.colors.white,
     borderWidth:2,
     paddingVertical:8,
     marginBottom:25,
     width:'86%'
  }

  
});

 export default RestaurantLogin