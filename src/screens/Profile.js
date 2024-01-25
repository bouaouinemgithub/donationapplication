import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions, Image } from 'react-native';
import CardImag from '../components/CardImag';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconComponent from '../components/IconComponent';
import CradChoix from '../components/CradChoix';
const MonImage = require('../../assets/Img/imag7.png');
import Icon from 'react-native-vector-icons/FontAwesome';

function Profile({navigation}) {

// la prtie de fichier Json 
const SplashScreenOne = {
    
  "imagepath":MonImage,
  "title": "You have two hands one to help yourself,the second to help others.",
  "icon_title": "chevron-right",
}

  return (
   <View style={styles.container}>
    <View style={{paddingTop:height*0.0875}}>
        <Text style={styles.Profile}>Profile</Text>
        <View style={styles.CardImag}>
           <Image source={MonImage} />
        </View>
       
        <Text style={styles.Title}>YOUTH RED CROSS VEC</Text>
        <Text style={styles.Subtitle}>Non Governmental Organization</Text>
 
        <CradChoix  text="Edit Profile"/>
        <CradChoix  text="About"/>
        <CradChoix  text="Settings"/>
        <CradChoix  text="Terms & Privacy Policy"/>
        <CradChoix  text="Log Out"/>
     
         <View style={styles.ShareApp}>
              <Icon name="share-square" size={20} color={Variable.colors.dark} style={styles.icon} />

              <Text style={styles.ShareAppTitle}>Share App</Text>

         </View>

    </View>
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  Text:{
     width:width*0.58,
     fontSize:Variable.fontSizes.small,
     color:Variable.colors.dark,
     textAlign:'center',
    marginVertical:height*0.053,
    fontWeight:'bold',
  },
  Profile:{
     textAlign:'center',
     fontSize:Variable.fontSizes.medium,
     fontWeight:'bold',
     marginBottom:35

     
  },
  CardImag:{
     height:height*0.17,
     alignItems:'center',
     justifyContent:'center',
     marginBottom:22
     },
 Title:{

         fontSize:20,
         marginBottom:12,
         color:Variable.colors.dark,
         textAlign:'center'

     },

     Subtitle:{
         fontSize:14,
         color:Variable.colors.secondary.default,
         textAlign:'center',
         marginBottom:42

     },
     ShareApp:{
           flexDirection:'row',
           justifyContent:'flex-end',
           marginTop:20,
           alignItems:'center'

        },
        ShareAppIcon:{

              fontWeight:'bold'
        },

     ShareAppTitle:{
            
        fontSize:Variable.fontSizes.small,
        fontWeight:'bold',
        marginLeft:6
        }
});

 export default Profile