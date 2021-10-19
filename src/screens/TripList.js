import React, { Component, useState, useEffect } from 'react';
import {
	StyleSheet,
	Button,
	FlatList,
	SafeAreaView,
	Text,
	View,
} from 'react-native';
import { getTrips } from '../api/ZeeApi';
import { ListItem, Divider } from 'react-native-elements';
// import ActionButton from 'react-native-action-button';


const TripList = ({ navigation }) => {
  const [tripList, setTripList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const addTrip = (trip) => {
	  setTripList(prev => [...prev, trip]);
	  navigation.popToTop();
  }

  const deleteTrip = () => {
	  const newTripList = tripList.filter((_, index) => index !== selectedIndex );
		setTripList(newTripList);
		navigation.popToTop();
  }

  useEffect(() => {
	(async () => {
		const trips = await getTrips();
		console.log(trips);
		setTripList(trips);

	})();
  }, [])

//   const ActionBtn = () => {
// 	  return (
// 		<ActionButton	
// 		onPress={() =>
// 			navigation.navigate('TripForm', {
// 				tripAddedCallback: addTrip,
// 			})
// 		}
// 	/>
// 	  )
//   }


  return tripList.length ? (
	<SafeAreaView style={styles.container}>
	<FlatList
		data={tripList}
		ItemSeparatorComponent={() => (
			<Divider style={{ backgroundColor: 'black' }} />
		)}
		keyExtractor={(item, index) => index.toString()}
		renderItem={({ item, index }) => {
			return (
				<ListItem
					onPress={() => {
						setSelectedIndex(index);
						navigation.navigate('TripDetail', { trip: item, tripDeletedCallback: deleteTrip })
					}}
					style={styles.listItem}
				>
					<ListItem.Content style={styles.textContainer}>
						<ListItem.Title style={styles.titleStyle}>{item.name}</ListItem.Title>
						<ListItem.Subtitle style={styles.subtitleStyle}>{`Category: ${item.category}`}</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
        
			);
		}}
	/>
	{/* <ActionBtn /> */}
</SafeAreaView>
  ) : (
	<View style={styles.textContainer1}>
	<Text style={styles.emptyTitle}>No Trip found</Text>
	<Text style={styles.emptySubtitle}>
		Add a new Trip using the + button below
	</Text>
	{/* <ActionBtn /> */}
</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listItem: {
		marginTop: 8,
		marginBottom: 8,
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'baseline',
	},
  textContainer1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyle: {
		fontSize: 20,
	},
	subtitleStyle: {
		fontSize: 15,
	},
	emptyTitle: {
		fontSize: 32,
		marginBottom: 16,
	},
	emptySubtitle: {
		fontSize: 18,
		fontStyle: 'italic',
	},
});

export default TripList;






























































// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Button,
//   FlatList,
//   SafeAreaView,
//   Text,
//   View,
// } from 'react-native';
// import {getTrips} from '../api/ZeeApi';
// import { ListItem, Divider } from 'react-native-elements';
// import ActionButton from 'react-native-action-button';



// class TripList extends Component {

//     static navigationOptions = ({ navigation }) => {

//     }


//     state = {
//         tripList: [],
//         selectedIndex: 0
//       }

//       onTripAdded = (trip) => {
//         this.setState(prevState => ({
//           tripList: [...prevState.tripList, trip]
//         }));
//         this.props.navigation.popToTop();
//       }
    
//       onTripDeleted = () => {
    
//         var newTripList = [...this.state.tripList];
//         newTripList.splice(this.state.selectedIndex, 1);
    
//         this.setState(prevState => ({
//             tripList: prevState.tripList = newTripList
//         }));
    
//         this.props.navigation.popToTop();
//       }



//       onTripReceived = (tripList) => {
//         this.setState(prevState => ({
//             tripList: prevState.tripList = tripList
//         }));
//       }
    
//       componentDidMount() {
//         getTrips(this.onTripReceived);
//       }
//       showActionButton = () =>
//       <ActionButton
//         buttonColor='blue'
//         onPress={() => this.props.navigation.navigate('TripForm', { tripAddedCallback: this.onTripAdded })}
//       />
//     render(){

//         return this.state.tripList.length > 0 ?
//       <SafeAreaView style={styles.container}>
//         <FlatList
//           data={this.state.tripList}
//           ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item, index }) => {
//             return (
              
//               <ListItem
//                 containerStyle={styles.listItem}
//                 title={item.name}
//                 subtitle={`Category: ${item.category}`}
//                 titleStyle={styles.titleStyle}
                
//                 subtitleStyle={styles.subtitleStyle}
//                 /*leftAvatar={{
//                   size: 'large',
//                   rounded: false,
//                   source: item.image && { uri: item.image }
//                 }}*/
//                onPress={() => {
//                   this.setState(prevState => ({ selectedIndex: prevState.selectedIndex = index }))
//                   this.props.navigation.navigate('TripDetail', { trip: item, tripDeletedCallback: this.onTripDeleted })
//                 }
//                 } 

//               />
//             );
//           }
//           }
//         />
//         {this.showActionButton()}
//       </SafeAreaView> :
//       <View style={styles.textContainer}>
//         <Text style={styles.emptyTitle}>No Trip found</Text>
//         <Text style={styles.emptySubtitle}>Add a new Trip using the + button below</Text>
//         {this.showActionButton()}
//       </View>




//     }









// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1
//     },
//     listItem: {
//       marginTop: 8,
//       marginBottom: 8
//     },
//     textContainer: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     titleStyle: {
//       fontSize: 30
//     },
//     subtitleStyle: {
//       fontSize: 18
//     },
//     emptyTitle: {
//       fontSize: 32,
//       marginBottom: 16
//     },
//     emptySubtitle: {
//       fontSize: 18,
//       fontStyle: 'italic'
//     }
//   });

// export default TripList;