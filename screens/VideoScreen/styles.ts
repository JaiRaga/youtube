import { StyleSheet, StatusBar as RnStatusBar } from 'react-native'

const styles = StyleSheet.create({
	container: {
		marginTop: RnStatusBar.currentHeight,
	},
	videoPlayer: {
		width: '100%',
		aspectRatio: 16 / 9,
	},
	videoInfoContainer: {
		margin: 10,
		// flex: 1,
		// backgroundColor: 'red'
	},
	tags:{
		color: '#f54543',
		fontSize: 14,
		fontWeight: '500',
		marginBottom: 5
	},
	title: {
		color: 'white',
		fontSize: 18,
		fontWeight: '500',
		marginVertical: 10,
	},
	subTitle: {
		color: 'gray',
		fontSize: 14,
		fontWeight: '500',
	},
})

export default styles
