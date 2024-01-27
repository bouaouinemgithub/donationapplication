import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Variable from './assets/Variable';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreenTow from './src/screens/SplashScreenTow';
import SplashScreenOne from './src/screens/SplashScreenOne';
import SplashScreenThree from './src/screens/SplashScreenThree';
import SplashScreenFoor from './src/screens/SplashScreenFoor';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import RestaurantLogin from './src/screens/RestaurantLogin';
import NewDonation from './src/screens/NewDonation';
import ConfirmRequests from './src/screens/ConfirmRequests';
import Profile from './src/screens/Profile';
import TestElements from './src/screens/TestElements';



const Stack = createNativeStackNavigator();

const RootApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile"
       screenOptions={{ headerShown: false }} >
        <Stack.Screen name="SplashScreenOne" component={SplashScreenOne} />
        <Stack.Screen name="SplashScreenTow" component={SplashScreenTow} />
        <Stack.Screen name="SplashScreenThree" component={SplashScreenThree} />
        <Stack.Screen name="SplashScreenFoor" component={SplashScreenFoor} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="RestaurantLogin" component={RestaurantLogin} />
        <Stack.Screen name="NewDonation" component={NewDonation} />
        <Stack.Screen name="ConfirmRequests" component={ConfirmRequests} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="TestElements" component={TestElements} />
        
        
       </Stack.Navigator>
    </NavigationContainer>
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
});

export default RootApp;
