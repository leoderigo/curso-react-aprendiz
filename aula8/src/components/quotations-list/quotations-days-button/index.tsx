import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default function QuotationsDaysButton(props: QuotationsDaysButtonProps) {
	return (
		<TouchableOpacity
			style={styles.buttonQuery}
			onPress={props.onPressEvent}
		>
			<Text style={styles.buttonQueryText}>
				{props.label}
			</Text>
		</TouchableOpacity>
	)
}

interface QuotationsDaysButtonProps {
	label: string
	onPressEvent: () => void
}
