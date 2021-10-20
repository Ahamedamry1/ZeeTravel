import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  ScrollView,
  
} from 'react-native';
import {addTrip,uploadFood} from '../api/ZeeApi';
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import ZeeImagePicker from '../ui/ZeeImagePicker';


const  TripForm = (props) =>{


  setTripImage = (image) => {
    setFieldValue('imageUri', image.uri);
  }


    return (
      <Formik
      initialValues={{image:null,name:'',category:'',location:'',checkList:'',checkMissEx:'',details:'',budget:'',pax:'',fBudget:'',otherDetails:'',offerTime:'',contactDetails:'',exp:''}}
      onSubmit={values => addTrip(values)}
      
      >
      {({ handleChange, handleBlur, handleSubmit, values }) => (

        
      <SafeAreaView>
      <ScrollView>  
      
        <View style={styles.title}>
            <Text style={styles.title}> Add a Travel Detail</Text>
            </View>
      <View style={styles.container}
       behavior="padding"
       >
      <ZeeImagePicker image={values.image} 
      onImagePicked={setTripImage}      
      />
      <TextInput
       // value={props.values.name}
        style={styles.longFormInput}
        placeholder='Place Name'
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
       // onChangeText={text => { props.setFieldValue('name', text) }}
         
      />
       <TextInput
        //value={props.values.category}
        style={styles.longFormInput}
        placeholder='Category'
        onChangeText={handleChange('category')}
        onBlur={handleBlur('category')}
        value={values.category}
        //onChangeText={text => { props.setFieldValue('category', text) }}
        
      />
      <TextInput
       //value={props.values.location}
       style={styles.longFormInput}
       placeholder='Location'
       onChangeText={handleChange('location')}
        onBlur={handleBlur('location')}
        value={values.location}
      // onChangeText={text => { props.setFieldValue('location', text) }}
        
     />
     <TextInput
      //value={props.values.checkList}
       style={styles.longText}
       placeholder='Check-List'
       onChangeText={handleChange('checkList')}
        onBlur={handleBlur('checkList')}
        value={values.checkList}
     // onChangeText={text => { props.setFieldValue('checkList', text) }}
        
     />
       
      
      <TextInput
      //value={props.values.checkMissEx}
       style={styles.longText}
       placeholder='Check-List Missing Experience'
       onChangeText={handleChange('checkMissEx')}
        onBlur={handleBlur('checkMissEx')}
        value={values.checkMissEx}
      //onChangeText={text => { props.setFieldValue('checkMissEx', text) }}
        
     />
      <TextInput
      //value={props.values.details}
       style={styles.longText}
       placeholder='Details of the Trip'
       onChangeText={handleChange('details')}
        onBlur={handleBlur('details')}
        value={values.details}
     // onChangeText={text => { props.setFieldValue('details', text) }}
        
     />
     <View style={styles.row}>
      <TextInput
      //value={props.values.budget}
       style={styles.twoFormInput}
       placeholder='Total Budget'
       onChangeText={handleChange('budget')}
        onBlur={handleBlur('budget')}
        value={values.budget}
      // onChangeText={text => { props.setFieldValue('budget', text) }}
        
     />
     <TextInput
     // value={props.values.pax}
       style={styles.twoFormInput}
       placeholder='Total Pax'
       onChangeText={handleChange('pax')}
        onBlur={handleBlur('pax')}
        value={values.pax}
      // onChangeText={text => { props.setFieldValue('pax', text) }}
        
     />
      </View>
      <TextInput
      //value={props.values.fBudget}
       style={styles.longText}
       placeholder='Detail Budget'
       onChangeText={handleChange('fBudget')}
        onBlur={handleBlur('fBudget')}
        value={values.fBudget}
     //onChangeText={text => { props.setFieldValue('fBudget', text) }}
        
     />
     <TextInput
      //value={props.values.otherDetails}
       style={styles.longText}
       placeholder='Special Details'
       onChangeText={handleChange('otherDetails')}
        onBlur={handleBlur('otherDetails')}
        value={values.otherDetails}
      //onChangeText={text => { props.setFieldValue('otherDetails', text) }}
        
     />
      <TextInput
      //value={props.values.offerTime}
       style={styles.longFormInput}
       placeholder='Special offer Time'
       onChangeText={handleChange('offerTime')}
        onBlur={handleBlur('offerTime')}
        value={values.offerTime}
     // onChangeText={text => { props.setFieldValue('offerTime', text) }}
        
     />
      <TextInput
      //value={props.values.contactDetails}
       style={styles.longFormInput}
       placeholder='Contact Details'
       onChangeText={handleChange('contactDetails')}
        onBlur={handleBlur('contactDetails')}
        value={values.contactDetails}
      //onChangeText={text => { props.setFieldValue('contactDetails', text) }}
        
     />
      <TextInput
     // value={props.values.exp}
       style={styles.longText}
       placeholder='Experience'
       onChangeText={handleChange('exp')}
        onBlur={handleBlur('exp')}
        value={values.exp}
     // onChangeText={text => { props.setFieldValue('exp', text) }}
        
     />
     
      <Button
      
        title='Submit'
        
        onPress={handleSubmit}
       // onPress={() => props.handleSubmit()}
        
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
    fontSize: 30,
   // fontWeight: 'bold',
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',

  },
});

/*export default withFormik({
  mapPropsToValues: ({ trip }) => ({
    name: trip.name,
    category: trip.category,
    location: trip.location,
    checkList: trip.checkList,
    checkMissEx: trip.checkMissEx,
    details: trip.details,
    budget: trip.budget,
    pax: trip.pax,
    fBudget: trip.fBudget,
    otherDetails: trip.otherDetails,
    offerTime: trip.offerTime,
    contactDetails: trip.contactDetails,
    exp: trip.exp
  }),
  enableReinitialize: true,
  
  
  handleSubmit: (values, { props }) => {
    console.log(props);
    console.log(values);
    addTrip(values,onTripAdded)

  },
});(TripForm) */
/*export default Formik({
handleSubmit: (values, { props }) => {
  console.log(props);
  console.log(values);
  addTrip(values,onTripAdded)
}
});*/
export default TripForm;