import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	mainContent: {
		width: '95%',
		height: 'auto',
		backgroundColor: '#ffffff',
		marginLeft: '3%',
		marginBottom: 15,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10
	},
	contextLeft: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%',
		width: '36%'
	},
	contextRight: {
		alignItems: 'flex-end',
		width: '60%'
	},
	price: {
		fontSize: 18,
		color: '#000000',
		fontWeight: 'bold'
	},
	dayCotation: {
		fontSize: 16,
		paddingLeft: 2,
		color: '#000000',
		fontWeight: 'bold'
	},
	logBitcoin: {
		height: 40,
		width: 40,
		marginLeft: 2
	},
	boxLogo: {

	}
})

export default styles
