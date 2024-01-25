import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Variable from './assets/Variable';
import ButtonClick from './src/components/ButtonClick';
import IconComponent from './src/components/IconComponent';
import CustomTextInput from './src/components/CustomTextInput';
import CardImag from './src/components/CardImag';
import IconUser from './src/components/IconUser';
import CradChoix from './src/components/CradChoix';
import CardCategories from './src/components/CardCategories';
const MonImage = require('./assets/Img/imag1.png');
const RootAppComponents = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:Variable.colors.primary.default}}>Devloppeur Front end</Text>
      <Text style={{ color: Variable.colors.secondary[100] }}>Devloppeur Mobile</Text>
      <ButtonClick title="Buttom"/>
      <IconComponent iconName="chevron-right" />
      <CustomTextInput textInputplaceholder="name" />
      {/* <CardImag imag={MonImage} /> */}
      {/* <IconUser icon="user"/>
       <CradChoix  text="Edit Profile"/>
       <CardCategories /> */}
       <ButtonClick title="style one"/>
       <ButtonClick
        title="style too"
        function={() => {
          // Action à exécuter lors du clic sur le premier bouton
        }}
        containerStyle={styles.customButton1} // Utilisation du premier style personnalisé pour le conteneur
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:'100%',
    paddingTop:100,
    backgroundColor: Variable.colors.baground,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  customButton1:{
      backgroundColor:'white',
      borderWidth:2,
      paddingVertical:8,
      marginTop:10
  }
});

export default RootAppComponents;
