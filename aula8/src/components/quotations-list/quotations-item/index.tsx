import React from "react"
import { Image, Text, View } from "react-native"
import styles from './style'

export default function QuotationsItem(props: { value: number, date: string }) {
	return (
		<View style={styles.mainContent}>
			<View style={styles.contextLeft}>
				<View style={styles.boxLogo}>
					<Image
						source={require('../../../img/Bitcoin-Logo.png')}
						style={styles.logBitcoin}
					/>
				</View>
				<Text style={styles.dayCotation}>
					{props.date}
				</Text>
			</View>
			<View style={styles.contextRight}>
				<Text style={styles.price}>
					$ {props.value}
				</Text>
			</View>
		</View>
	)
}
