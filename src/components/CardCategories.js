import React from 'react';
import { TouchableOpacity, StyleSheet, Image,View,Dimensions, Text } from 'react-native';
import Variable from '../../assets/Variable';
const User = require('../../assets/Img/user.png')
// const { width, height } = Dimensions.get('window');
const {width,height}= Dimensions.get("window")



const CardCategories = props => {
  return (
    <View >
          <View  style={styles.CardCategorie}> 
           <View style={{zIndex:5}}> 
           <Image  source={User} />
           </View>
           <View style={styles.Right}>
            <Text style={styles.RightTitle}>Item Name</Text>
            <View>
            <Text  style={styles.RightInfo}>Quantity : 200 Packets {} </Text>
            </View>
            </View>
             
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
    CardCategorie:{
        
         width:width*0.91,
         height:130,
         shadowColor: '#000',
         backgroundColor:Variable.colors.success,
         opacity:0.5,
         flexDirection:'row',
         justifyContent:"flex-start",
         padding:21,
         borderRadius:10,
         zIndex:0

    },
    text:{
         color:'red',
         backgroundColor:'red'
    },

    Right:{
        
          marginLeft:25,

    },

    RightTitle:{
         fontSize:Variable.fontSizes.small,
         color:Variable.colors.dark,
         fontWeight:'bold',
         marginLeft:40,
         marginBottom:5
        },
     RightInfo:{
             fontSize:8
        }
});

export default CardCategories;