import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoListItem from '../components/VideoListItem/VideoListItem'

import videos from '../assets/data/videos.json'

const HomeScreen = () => {
	return (
		<View>
			<FlatList
				data={videos}
				renderItem={({ item }) => <VideoListItem video={item} />}
			/>
		</View>
	)
}

export default HomeScreen
