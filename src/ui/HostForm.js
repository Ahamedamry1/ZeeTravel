import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {addHost} from '../api/ZeeApi';
import { Formik } from 'formik';
/*
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';*/
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  titleText,
  ScrollView
} from 'react-native';


const  HostForm = (props) =>{

    
    return (
      <Formik
      initialValues={{name:'',place:'',detailsHost:'',location:'',charge:'',contactdet:'',details:''}}
      onSubmit={values => addHost(values)}
      
      >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
        <SafeAreaView>
        <ScrollView>  
            <View style={styles.title}>
            <Text style={styles.title}> Host an Experience</Text>
            </View>
        <View style={styles.container}>
        <TextInput
         
          style={styles.longFormInput}
          placeholder='Experience Name'
          onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name} 

        />
         <TextInput
          
          style={styles.longFormInput}
          placeholder='Place'
          onChangeText={handleChange('place')}
        onBlur={handleBlur('place')}
        value={values.place}

        />
         <TextInput
         
         style={styles.longText}
         placeholder='Details of the Host'
         onChangeText={handleChange('detailsHost')}
        onBlur={handleBlur('detailsHost')}
        value={values.detailsHost} 

       />
        <TextInput
         
         style={styles.longFormInput}
         placeholder='Location'
         onChangeText={handleChange('location')}
        onBlur={handleBlur('location')}
        value={values.location} 

       />

        <TextInput
         
         style={styles.longFormInput}
         placeholder='Cherge for the Trip'
         onChangeText={handleChange('charge')}
        onBlur={handleBlur('charge')}
        value={values.charge} 

       />
       <TextInput
         
         style={styles.longFormInput}
         placeholder='Contact Details'
         onChangeText={handleChange('contactdet')}
        onBlur={handleBlur('contactdet')}
        value={values.contactdet} 

       />
        <TextInput
         
         style={styles.longText}
         placeholder='Details of the Trip'
         onChangeText={handleChange('details')}
        onBlur={handleBlur('details')}
        value={values.details} 

       />
       
        <Button
        
          title='Submit'
          onPress={handleSubmit}
          
        />
      </View>
      </ScrollView>
      </SafeAreaView>
    )}
      </Formik>
  
        );

  
  }
  const styles = StyleSheet.create({
    row: {
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32
    },
    container: {
      width: 300,
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 32,
    },
    formInput: {
      borderColor: '#B5B4BC',
      borderWidth: 1,
      padding: 8,
      height: 50,
      color: 'black',
      width: '75%',
      marginBottom: 16,
      marginTop: 16
    },
    validationText: {
      color: 'red'
    },
    longFormInput: {
      width: '100%',
      height: 50,
      color: 'black',
      borderColor: '#B5B4BC',
      borderWidth: 1,
      padding: 8,
      margin: 16
    },
    longText: {
      width: '100%',
      height: 90,
      color: 'black',
      borderColor: '#B5B4BC',
      borderWidth: 1,
      padding: 8,
      margin: 16
    },
    twoFormInput: {
      borderColor: '#B5B4BC',
      borderWidth: 1,
      marginRight:10,
      padding: 8,
      height: 50,
      color: 'black',
      width: '50%',
      //marginBottom: 16,
      marginTop: 16
    },
    title:{
        fontSize: 50,
       // fontWeight: 'bold',
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',


    }
    
   
  });

export default HostForm;

