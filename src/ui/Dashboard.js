
import React from 'react';
import {StyleSheet, Button, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import Slider from './Slider';
import { Ionicons, AntDesign, MaterialCommunityIcons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../api/ZeeApi';

const images = [
  'https://i1.wp.com/cherrycross.com/wp-content/uploads/2015/08/dilshan-chathuranga-udawatta-ayubowan-srilanka-hd-1080.jpg?fit=1920%2C1080&ssl=1',
  'https://seerendipitytours.com/wp-content/uploads/2020/10/fishing2-1.gif',
  'https://seerendipitytours.com/wp-content/uploads/2020/10/madu_river_boat.gif',
  'https://seerendipitytours.com/wp-content/uploads/2020/10/temple-tooth-600x576.jpg',
  'https://seerendipitytours.com/wp-content/uploads/2020/10/Sigiriya-fresco-1-600x576.gif',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Idalgashinna_railway_station_2017.jpg/300px-Idalgashinna_railway_station_2017.jpg'
  
]

function Dashboard ({ navigation }) {


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))


  }

  
 

    const styles = StyleSheet.create({
			centerElement: {justifyContent: 'center', alignItems: 'center'},
		});

	
    return(
		
		
      <View style={style.container}>
        <Text style={{alignSelf: 'center',fontSize: 30}}>ZeeTravel</Text>
		<Button style={styles.Button}
        onPress={handleSignOut}
          title= "Logout"
          
		  />
        <Slider images={images}/>

        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}} onPress={()=>navigation.navigate('TripList')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<AntDesign name="tago" size={28} color="#e89b17" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>Trip Details</Text>
					</View>
				</TouchableOpacity>
        
        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}} onPress={()=>navigation.navigate('HostList')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<MaterialCommunityIcons name="wunderlist" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>Experience Hosting Details</Text>
					</View>
				</TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}} onPress={()=>navigation.navigate('TripForm')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<Feather name="bell" size={28} color="#26aa99" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>Add Trip Details</Text>
					</View>
				</TouchableOpacity>

        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80}} onPress={()=>navigation.navigate('HostForm')}>
					<View style={[styles.centerElement, {width: 75}]}>
						<View style={{borderWidth: 1, borderColor: '#ececec', padding: 7, borderRadius: 25}}>
							<SimpleLineIcons name="handbag" size={28} color="#ef5b3d" />
						</View>
					</View>
					<View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center'}}>
						<Text style={{fontSize: 15}}>Host an Experience</Text>
					</View>
				</TouchableOpacity>
      </View>
    )

  
}

const style = StyleSheet.create({
  container: {marginTop:50 
  },
  Button:{

	width:10,
	height:20,
	right:10,
	top:5,
 }
}) 

export default Dashboard;