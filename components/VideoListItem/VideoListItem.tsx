import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

import styles from './styles'

type VideoListItemProps = {
	video: {
		id: string
		createdAt: string
		title: string
		thumbnail: string
		videoUrl: string
		duration: number
		views: number
		user: {
			name: string
			image?: string
		}
	}
}

const VideoListItem = (props: VideoListItemProps) => {
	const { video } = props
	const minutes = Math.floor(video.duration / 60)
	const seconds = video.duration % 60

	let viewString = video.views.toString()
	if (video.views > 1000000) {
		viewString = (video.views / 1000000).toFixed(1) + 'm'
	} else if (video.views > 1000) {
		viewString = (video.views / 1000).toFixed(1) + 'k'
	}

	return (
		<View style={styles.videoCard}>
			{/* Thumbnail */}
			<View>
				<Image
					style={styles.thumbnail}
					source={{
						uri: video.thumbnail,
					}}
				/>
				<View style={styles.timeContainer}>
					<Text style={styles.time}>
						{minutes}:{seconds < 10 ? 0 : ''}
						{seconds}
					</Text>
				</View>
			</View>
			{/* Title row */}
			<View style={styles.titleRow}>
				{/* Avatar */}
				<Image
					style={styles.avatar}
					source={{
						uri: video.user.image,
					}}
				/>

				{/* Middle containe: title, subtitle */}
				<View style={styles.middleContainer}>
					<Text style={styles.title}>{video.title}</Text>
					<Text style={styles.subTitle}>
						{video.user.name} {viewString} {video.createdAt}
					</Text>
				</View>
				{/* Icon */}
				<Entypo name='dots-three-vertical' size={16} color='white' />
			</View>
		</View>
	)
}

export default VideoListItem
