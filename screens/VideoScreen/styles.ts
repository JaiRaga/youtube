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
	actionListContainer: {
		// flexDirection: 'row',
		// backgroundColor: 'red' 
	},
	actionListItem: {
		width: 70,
		height: 60,
		justifyContent: 'space-around',
		alignItems: 'center',
		// backgroundColor: 'red'
	},
	actionText: {
		color: 'white'
	},
	//User
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	userContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: '#ffffff22',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		padding: 5
	},
	userTextContainer: {
		marginHorizontal: 10,
		flex: 1,
	},
	username: {
		color: 'white',
		fontSize: 18,
		fontWeight: "bold"
	},
	subscribers: {
		color: 'grey',
		fontSize: 18
	},
	subscribe: {
		color: 'red',
		fontSize: 20,
		fontWeight: 'bold',
		padding: 10
	},
	// Comments
	commentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 5
	},
	commentTitle: {
		color: 'white',
		marginVertical: 10
	},
	commentAvatar: {
		width: 35,
		height: 35,
		borderRadius: 20
	},
	commentUsername: {
		color: 'white',
		marginLeft: 10
	},
	videoScreenWithFlatList: {
		// marginTop: RnStatusBar.currentHeight
	}
})

export default styles
