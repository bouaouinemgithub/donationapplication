import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import RootAppComponents from './RootAppComponents';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen2 from './src/screens/SplashScreenThree';
import RootApp from './RootApp';
// import SplashScreen2 from './src/SplashScreen2';
// import SplashScreena from './src/screens/SplashScreena';



export default function App() {
  return (
    
        <RootApp />
        // <RootAppComponents/>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
