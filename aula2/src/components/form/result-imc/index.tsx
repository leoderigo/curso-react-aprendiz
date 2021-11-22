import React from 'react'
import { Text, TouchableOpacity, View, Share } from "react-native";

import styles from './style';

export default function ResultImc(props: { message: string, result: number }) {

	function onShare() {
		Share.share({
			message: `Meu IMC é: ${props.result}`
		})
	}

	return (
		<View style={styles.contextImc}>
			<Text style={styles.information}>{ props.message }</Text>
			<Text style={styles.numberImc}>{ props.result }</Text>
			<View style={styles.boxShareButton}>
				<TouchableOpacity
					style={styles.shareButton}
					onPress={onShare}
				>
					<Text style={styles.shareButtonText}>Share</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}
