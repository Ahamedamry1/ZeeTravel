import React, { Component } from 'react';
//import { render } from 'react-dom';
import TripForm from '../ui/TripForm';

export default class TripFormScreen extends Component{

    static navigationOptions = ({ navigation }) => {
       console.log(navigation);
       return{
           title:" New Trip"
       }
      };

     state = {
    trip: {
      name: '',
      category: '',
      location: '',
      checkList: '',
      checkMissEx: '',
      details: '',
      budget: '',
      pax: '',
      fBudget: '',
      otherDetails: '',
      offerTime: '',
      contactDetails: '',
      exp: '',
     
      
    },

    componentDidMount() {
        const currentTrip = this.props.navigation.getParam('trip');
    
        if (currentTrip) {
          this.setState(prevState => ({ trip: prevState.trip = currentTrip }))
        }
      },
    
   
   render(){
    return (
        <TripForm
        
          trip={this.state.trip}
          onTripAdded={this.props.navigation.getParam('tripAddedCallback')}
          
        />
      );
   }


  }









}