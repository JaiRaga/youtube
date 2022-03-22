import {
	StyleSheet,
	Image,
	Text,
	View,
	SafeAreaView,
	ScrollView,
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
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

			{/* Action List */}
			<View style={styles.actionListContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={styles.actionListItem}>
						<AntDesign name='like1' size={20} color='white' />
						<Text style={styles.actionText}>{video.likes}</Text>
					</View>

					<View style={styles.actionListItem}>
						<AntDesign name='dislike1' size={20} color='white' />
						<Text style={styles.actionText}>{video.likes}</Text>
					</View>

					<View style={styles.actionListItem}>
						<MaterialCommunityIcons name='share' size={24} color='white' />
						<Text style={styles.actionText}>{video.likes}</Text>
					</View>

					<View style={styles.actionListItem}>
						<MaterialCommunityIcons
							name='download-outline'
							size={24}
							color='white'
						/>
						<Text style={styles.actionText}>{video.likes}</Text>
					</View>

					<View style={styles.actionListItem}>
						<Ionicons name='add' size={24} color='white' />
						<Text style={styles.actionText}>{video.likes}</Text>
					</View>

					<View style={styles.actionListItem}>
						<Ionicons name='add' size={24} color='white' />
						<Text style={styles.actionText}>{video.likes}</Text>
					</View>

					<View style={styles.actionListItem}>
						<Ionicons name='add' size={24} color='white' />
						<Text style={styles.actionText}>{video.likes}</Text>
					</View>
				</ScrollView>
			</View>

			{/* User Info */}
			<View style={styles.userContainer}>
				<Image style={styles.avatar} source={{ uri: video.user.image }} />

				<View style={styles.userTextContainer}>
					<Text style={styles.username}>{video.user.name}</Text>
					<Text style={styles.subscribers}>
						{video.user.subscribers} subscribers
					</Text>
				</View>
				<Text style={styles.subscribe}>Subscriber</Text>
			</View>

			{/* Comments */}
			<View>
				<Text style={styles.commentTitle}>Comments 108</Text>
				<View style={styles.commentContainer}>
					<Image style={styles.commentAvatar} source={{ uri: video.user.image }} />

					<Text style={styles.commentUsername}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, saepe!</Text>
				</View>
			</View>

			{/* Recommended Videos */}
		</SafeAreaView>
	)
}

export default VideoScreen
