import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { Video } from 'expo-av'
import styles from './styles'

interface VideoPlayerProps {
	videoURI: string
	thumbnailURI: string
}

const VideoPlayer = (props: VideoPlayerProps) => {
	const { videoURI, thumbnailURI } = props
	console.log(thumbnailURI)

	return (
		<View>
			<Video
				style={styles.videoPlayer}
				source={{ uri: videoURI }}
				posterSource={{ uri: thumbnailURI }}
				posterStyle={{ resizeMode: 'contain' }}
				usePoster={true}
				useNativeControls
				resizeMode='contain'
			/>
		</View>
	)
}

export default VideoPlayer
