import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions } from 'react-native';
import CardImag from '../components/CardImag';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconComponent from '../components/IconComponent';
const MonImage = require('../../assets/Img/imag1.png');


function SplashScreenOne({navigation}) {

// la prtie de fichier Json 
const SplashScreenOne = {
    
  "imagepath":MonImage,
  "title": "You have two hands one to help yourself,the second to help others.",
  "icon_title": "chevron-right",
}

  return (
   <View style={styles.container}>
    <View style={{paddingTop:width*0.23}}>
    <CardImag imag={SplashScreenOne.imagepath} />
    </View>
     <Text style={styles.Text}>{SplashScreenOne.title}</Text>
       <IconComponent iconName={SplashScreenOne.icon_title}
      
        function={() => {
          navigation.navigate('SplashScreenTow')
        }} 
       />
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
    fontWeight:'bold',
  }
});

 export default SplashScreenOne