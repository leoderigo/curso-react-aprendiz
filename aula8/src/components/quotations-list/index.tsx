import React, { Fragment } from "react"
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import QuotationsDaysButton from "./quotations-days-button"
import QuotationsItem from "./quotations-item"
import styles from "./style"

export default function QuotationList(props: QuotationListComponentProps) {
	return (
		<Fragment>
			<View style={styles.filters}>
				<QuotationsDaysButton onPressEvent={() => props.setDayFn(1)} label="1D" />
				<QuotationsDaysButton onPressEvent={() => props.setDayFn(15)} label="15D" />
				<QuotationsDaysButton onPressEvent={() => props.setDayFn(30)} label="1M" />
				<QuotationsDaysButton onPressEvent={() => props.setDayFn(90)} label="3M" />
				<QuotationsDaysButton onPressEvent={() => props.setDayFn(180)} label="6M" />
			</View>
			<FlatList
				data={props.quotationsList}
				renderItem={({ item }) => (
					<QuotationsItem value={item.value} date={item.date} />
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</Fragment>
	)
}

interface QuotationListComponentProps {
	quotationsList: { date: string, value: number }[]
	setDayFn: (days: number) => void
}
