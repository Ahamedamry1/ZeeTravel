import React, { Component } from 'react';
import HostForm from '../ui/HostForm';


export default class HostFormScreen extends Component{

    static navigationOptions = ({ navigation }) => {
       console.log(navigation);
       return{
           title:" New Host Experience"
       }
      };

     state = {
    host: {
      name: '',
      place: '',
      detailsHost: '',
      location: '',
      charge: '',
      contactdet: '',
      details: '',
     
     
      
    },

    componentDidMount() {
        const currentHost = this.props.navigation.getParam('host');
    
        if (currentHost) {
          this.setState(prevState => ({ this.host: prevState.host = currentHost }))
        }
      },
    
   
   render(){
    return (
        <HostForm
        
          host={this.state.host}
          onHostAdded={this.props.navigation.getParam('HostAddedCallback')}
          
        />
      );
   }


  }









}