import React from "react"
import { View, Dimensions } from "react-native"

import { LineChart } from 'react-native-chart-kit'

import styles from "./style"

export default function HistoryGraphic(props: HistoryGraphicProps) {
	return (
		<View style={styles.contentGrapic}>
			<LineChart
				data={
					{
						datasets: [
							{ data: props.quotationsList.length < 2
								? [0]
								: props.quotationsList.map(item => item.value).reverse()
							}
						],
						labels: []
					}
				}
				width={Dimensions.get('window').width}
				height={220}
				yAxisLabel="$"
				yAxisSuffix="k"
				withVerticalLines={false}
				yLabelsOffset={1}
				chartConfig={{
					backgroundColor: '#ffffff',
					backgroundGradientFrom: '#232323',
					backgroundGradientTo: '#3f3f3f',
					decimalPlaces: 0,
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					propsForDots: {
						r: '1',
						strokeWidth: '1',
						stroke: '#f50d41',
					}
				}}
				bezier
			/>
		</View>
	)
}

interface HistoryGraphicProps {
	quotationsList: { date: string, value: number }[]
}
