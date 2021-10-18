import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button
} from 'react-native';


const  Home = ({navigation}) =>{

    return (
        <View style={styles.container}>
          <Text> Home</Text>
          <Button  title="Hi" onPress={() => navigation.navigate('TripForm')}  color="#841584" />
          <StatusBar style="auto" />
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
  });

export default Home;
