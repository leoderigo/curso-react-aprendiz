import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	formContext: {
		flex: 1,
		backgroundColor: '#ffffff',
		alignItems: 'center',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingTop: 30
	},
	form: {
		width: '100%',
		height: 'auto',
		marginTop: 30,
		padding: 10
	},
	formLabel: {
		color: '#000000',
		fontSize: 18,
		paddingLeft: 20
	},
	formInput: {
		height: 40,
		width: '90%',
		borderRadius: 50,
		backgroundColor: '#f6f6f6',
		margin: 12,
		paddingLeft: 10
	},
	buttonCalcular: {
		borderRadius: 50,
		backgroundColor: '#ff0043',
		paddingTop: 14,
		paddingBottom: 14,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
		marginTop: 30
	},
	textButtonCalcular: {
		color: '#ffffff',
		fontSize: 20
	},
	errorMessage: {
		color: 'red',
		fontWeight: 'bold',
		paddingLeft: 20
	},
	exibhitionResult: {
		height: '50%',
		width: '100%'
	},
	imcList: {
		marginTop: 20
	},
	imcListItem: {
		color: '#ff0043',
		fontSize: 24,
	},
	imcListItemLabel: {
		fontSize: 18
	}
})
export default styles
