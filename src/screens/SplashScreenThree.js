import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions } from 'react-native';
import CardImag from '../components/CardImag';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconComponent from '../components/IconComponent';
const MonImage = require('../../assets/Img/imag2.png');

function SplashScreenThree({navigation}) {

const SplashScreenThree = {
  "imagepath":MonImage,
  "title": "If you cant feed a hundred people,then just feed one.",
  "icon_title": "chevron-right",
}

  return (
   <View style={styles.container}>
    <View style={{paddingTop:width*0.23}}>
    <CardImag imag={SplashScreenThree.imagepath} />
    </View>
     <Text style={styles.Text}>{SplashScreenThree.title}</Text>
       <IconComponent iconName={SplashScreenThree.icon_title}
        function={() => {
          navigation.navigate('SplashScreenFoor')
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
    fontWeight:'bold'
  }
});

 export default SplashScreenThree