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
import { deleteTrip } from '../api/ZeeApi'

function TripDetailScreen ({ route, navigation }) {

  // static navigationOptions = () => {
  //   return {
  //     title: 'Trip Details'
  //   }
  // };

  
  const { trip, tripDeletedCallback } = route.params;

    // const trip = this.props.navigation.getParam('trip');

    // const onTripDeleted = this.props.navigation.getParam('tripDeletedCallback');

    console.log(trip);
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon
            reverse
            name='ios-create'
            type='ionicon'
            onPress={() =>
              this.props.navigation.navigate('TripForm', {
                trip: trip
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
                  { text: 'OK', onPress: () => { deleteTrip(trip, onTripDeleted) } }
                ],
                { cancelable: false },
              )
            }
          />
        </View>
        
        <Text style={styles.headerText}>{trip.name}</Text>
        <Text style={styles.categoryText}>Category: {trip.category}</Text>
        <Text style={styles.categoryText}>Location: {trip.location}</Text>
        <Text style={styles.categoryText}>Check-List: {trip.checkList}</Text>
        <Text style={styles.categoryText}>Check-List Missing Experience: {trip.checkMissEx}</Text>
        <Text style={styles.categoryText}>Details of the Trip: {trip.details}</Text>
        <Text style={styles.categoryText}>Total Budget: {trip.budget}</Text>
        <Text style={styles.categoryText}>Total Pax: {trip.pax}</Text>
        <Text style={styles.categoryText}>Detail Budget: {trip.fBudget}</Text>
        <Text style={styles.categoryText}>Special Details: {trip.otherDetails}</Text>
        <Text style={styles.categoryText}>Special offer Time: {trip.offerTime}</Text>
        <Text style={styles.categoryText}>Contact Details: {trip.contactDetails}</Text>
        <Text style={styles.categoryText}>Experience: {trip.exp}</Text>

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

export default TripDetailScreen;