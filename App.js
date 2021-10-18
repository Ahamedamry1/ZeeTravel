//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { StyleSheet, Text, View ,Button} from 'react-native';

import Login from './src/Auth/Login';
import TripForm from './src/ui/TripForm';
import TripDetail from './src/screens/TripDetailScreen'; 


//import { createSwitchNavigator, createAppContainer} from 'react-navigation';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';

enableScreens();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HostForm from './src/ui/HostForm';
import TripList from './src/screens/TripList';
//import { createNativeStackNavigator } from '@react-native-screens/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      <Stack.Screen name="TripList" component={TripList}/>
      <Stack.Screen name="TripForm" component={TripForm}/> 
      <Stack.Screen name="HostForm" component={HostForm}/>
      
      
        
        <Stack.Screen name="TripDetail" component={TripDetail}/>
        
       
        <Stack.Screen name="Login" component={Login}/>

      </Stack.Navigator>
    
    </NavigationContainer>
  );
}
 //<Stack.Screen name="Home" component={Home}/>




/*const AppStack = NavigationContainer(
  {
    TripFormRoute:TripForm,
    HomeRoute:Home

  }

)

const AuthStack = NavigationContainer(
  {
    LoginRoute:Login
  }

)*/

/*export default NavigationContainer(
  {
    AuthStack:Login,
    AppStack:TripForm,Home
  }
); */