import React, { Component, useState, useEffect } from 'react';
import {
	StyleSheet,
	Button,
	FlatList,
	SafeAreaView,
	Text,
	View,
} from 'react-native';
import { getHosts } from '../api/ZeeApi';
import { ListItem, Divider } from 'react-native-elements';
// import ActionButton from 'react-native-action-button';


const HostList = ({ navigation }) => {
  const [hostList, setHostList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const addHost = (host) => {
    setHostList(prev => [...prev, host]);
	  navigation.popToTop();
  }

  const deleteHost = () => {
	  const newHostList = hostList.filter((_, index) => index !== selectedIndex );
		setHostList(newHostList);
		navigation.popToTop();
  }

  useEffect(() => {
	(async () => {
		const hosts = await getHosts();
		console.log(hosts);
		setHostList(hosts);

	})();
  }, [])

//   const ActionBtn = () => {
// 	  return (
// 		<ActionButton	
// 		onPress={() =>
// 			navigation.navigate('HostForm', {
// 				hostAddedCallback: addHost,
// 			})
// 		}
// 	/>
// 	  )
//   }


  return hostList.length ? (
	<SafeAreaView style={styles.container}>
	<FlatList
		data={hostList}
		ItemSeparatorComponent={() => (
			<Divider style={{ backgroundColor: 'black' }} />
		)}
		keyExtractor={(item, index) => index.toString()}
		renderItem={({ item, index }) => {
			return (
				<ListItem
					onPress={() => {
						setSelectedIndex(index);
						navigation.navigate('HostDetailScreen', { host: item, HostDeletedCallback: deleteHost })
					}}
					style={styles.listItem}
				>
					<ListItem.Content style={styles.textContainer}>
						<ListItem.Title style={styles.titleStyle}>{item.name}</ListItem.Title>
						<ListItem.Subtitle style={styles.subtitleStyle}>{`Place Name: ${item.place}`}</ListItem.Subtitle>
						{/* leftAvatar={{
                  				size: 'large',
                 			 rounded: false,
                 			 source: item.image && { uri: item.image }
                			}} */}
					</ListItem.Content>
				</ListItem>
        
			);
		}}
	/>
	{/* <ActionBtn /> */}
</SafeAreaView>
  ) : (
	<View style={styles.textContainer1}>
	<Text style={styles.emptyTitle}>No Hosted Experience found</Text>
	<Text style={styles.emptySubtitle}>
		Add a new Host using the + button below
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

export default HostList;