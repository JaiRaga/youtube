import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoListItem from '../components/VideoListItem/VideoListItem'

import videos from '../assets/data/videos.json'

const HomeScreen = () => {
	return (
		<View>
			<VideoListItem video={videos[2]} />
			<VideoListItem video={videos[3]} />
		</View>
	)
}

export default HomeScreen
