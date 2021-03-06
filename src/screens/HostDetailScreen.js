import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  Image
} from 'react-native';
import { Divider, Icon } from 'react-native-elements';
//import { deleteHost } from '../api/ZeeApi'

function HostDetailScreen ({ route, navigation }) {

  // static navigationOptions = () => {
  //   return {
  //     title: 'Trip Details'
  //   }
  // };

  
  const { host, HostDeletedCallback } = route.params;

    // const trip = this.props.navigation.getParam('trip');

    // const onTripDeleted = this.props.navigation.getParam('tripDeletedCallback');

    console.log(host);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon
            reverse
            name='ios-create'
            type='ionicon'
            onPress={() =>
              this.props.navigation.navigate('HostForm', {
                host: host
              })
            }
          />
          <Icon
            reverse
            name='ios-trash'
            type='ionicon'
            color='#CA300E'
            onPress={() =>
              Alert.alert(
                'Delete?',
                'Cannot be undone',
                [
                  { text: 'Cancel' },
                  { text: 'OK', onPress: () => { deleteHost(host, onHostDeleted) } }
                ],
                { cancelable: false },
              )
            }
          />
        </View>
        
        <Text style={styles.headerText}>{host.name}</Text>
        <Text style={styles.categoryText}>Place Name: {host.place}</Text>
        <Text style={styles.categoryText}>Details of the Host: {host.detailsHost}</Text>
        <Text style={styles.categoryText}>Location: {host.location}</Text>
        <Text style={styles.categoryText}> Charge for the Trip: {host.charge}</Text>
        <Text style={styles.categoryText}>Contact Details: {host.contactdet}</Text>
        <Text style={styles.categoryText}>Details of the Trip: {host.details}</Text>
        

      </View >
    );
  
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    marginBottom: 32
  },
  image: {
    width: '100%',
    aspectRatio: 2,
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 32,
    textAlign: 'left',
  },
  container: {
    alignItems: 'baseline',
    marginLeft:30
  },
  listContainer: {
    borderWidth: 0.5,
    width: 200,
    borderColor: 'grey'
  }
});

export default HostDetailScreen;