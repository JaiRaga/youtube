import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import video from '../../assets/data/video.json'
import styles from './styles'

const VideoScreen = () => {
	let viewString = video.views.toString()
	if (video.views > 1000000) {
		viewString = (video.views / 1000000).toFixed(1) + 'm'
	} else if (video.views > 1000) {
		viewString = (video.views / 1000).toFixed(1) + 'k'
	}
	return (
		<SafeAreaView style={styles.container}>
			{/* Video Player */}
			<Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />

			{/* Video Info */}
			<View style={styles.videoInfoContainer}>
			<Text style={styles.tags}>{video.tags}</Text>
				<Text style={styles.title}>{video.title}</Text>
				<Text style={styles.subTitle}>
				{viewString} {video.createdAt}
				</Text>
			</View>

			{/* User Info */}

			{/* Comments */}

			{/* Recommended Videos */}
		</SafeAreaView>
	)
}

export default VideoScreen
