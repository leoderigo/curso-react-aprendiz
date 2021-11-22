import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function CurrentPrice() {
	return (
		<View style={styles.headerPrice}>
			<Text style={styles.currentPrice}>$ 5555</Text>
			<Text style={styles.textPrice}>Última cotação</Text>
		</View>
	)
}
