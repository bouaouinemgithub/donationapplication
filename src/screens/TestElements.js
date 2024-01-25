import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,Dimensions, Image } from 'react-native';
const {width,height} = Dimensions.get("window")
import Variable from '../../assets/Variable';
import IconUser from '../components/IconUser';

function TestElements({navigation}) {

// la prtie de fichier Json 

  return (
   <View style={styles.container}>
  
      <Text style={{paddingBottom:100,backgroundColor:'red'}}>bouaouine Front end </Text>

      <View style={{position:'relative',justifyContent:'center',
      alignItems:'center'}}>
      <View style={styles.FristView}>
         
         </View>
         <View style={styles.secandView}>
               <Text>bouaouie</Text>
           </View>

          
      </View>

     <View style={{marginTop:100}}>
     <IconUser icon="user"/>
     </View>
      
     
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:100
  },
  FristView:{
    position:'absolute',
     zIndex:1,
     backgroundColor:'red',
     width:'80%',
     height: 100,
     opacity:0.5
  },
  secandView:{
      position:'absolute',
      zIndex:0,
      backgroundColor:'blue',
      width:'50%',
      height: 100,
      alignItems:'center',
      justifyContent:'center'
  }


});

 export default TestElements