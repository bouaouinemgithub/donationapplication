import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions } from 'react-native';
import CardImag from '../components/CardImag';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconComponent from '../components/IconComponent';
const MonImage = require('../../assets/Img/imag4.png');
import ButtonClic from '../components/ButtonClick'

function SplashScreenFoor({navigation}) {

// la prtie de fichier Json 
const SplashScreenFoor = {
    
  "imagepath":MonImage,
  "title": "Be the change you want to see in this world",
  "icon_title": "chevron-right",
  "button":"Started"
}

  return (
   <View style={styles.container}>
    <View style={{paddingTop:width*0.23}}>
    <CardImag imag={SplashScreenFoor.imagepath} />
    </View>
     <Text style={styles.Text}>{SplashScreenFoor.title}</Text>
      <ButtonClic title={SplashScreenFoor.button}
        function={() => {
          navigation.navigate('Login')
        }} 
     
       />
      
       {/* <IconComponent iconName={SplashScreenFoor.icon_title}
      
        // function={() => {
        //   navigation.navigate('SplashScreenTow')
        // }} 
       /> */}
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text:{
     width:width*0.58,
     fontSize:Variable.fontSizes.small,
     color:Variable.colors.dark,
     textAlign:'center',
    marginVertical:height*0.053,
    fontWeight:'bold'
  }
});

 export default SplashScreenFoor