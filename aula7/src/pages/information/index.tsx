import { NavigationHelpers } from '@react-navigation/core';
import React from 'react'
import { Text, View } from "react-native";

export default function Information({ route }: any) {
	return (
		<View>
			<Text style={{ marginBottom: 20 }}>
				Information
			</Text>
			<Text>{route.params.name}</Text>
			<Text>{route.params.phone}</Text>
			<Text>{route.params.email}</Text>
			<Text>{route.params.area}</Text>
		</View>
	)
}
