import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import ResultImc from './result-imc';
import styles from './styles';

export default function Form() {

	const [height, setHeight] = useState<number|null>(null)
	const [weight, setWeight] = useState<number|null>(null)
	const [messageImc, setMessageImc] = useState<string>('Preencha a altura e o peso')
	const [resultImc, setResultImc] = useState<number|null>(null)
	const [textButton, setTextButton] = useState<string>('Calcular')
	const [errorMessage, setErrorMessage] = useState<string|null>(null)
	const [imcList, setImcList] = useState<ImcData[]>([])

	function calcularImc() {
		const heightFormatted = (height + '').replace(',', '.') as unknown as number
		const weightFormatted = (weight + '').replace(',', '.') as unknown as number
		const imc = ((weightFormatted)/((heightFormatted)**2)).toFixed(2) as unknown as number
		setImcList((arr) => [{ id: new Date().getTime(), imc }, ...arr])
		setResultImc(imc)
	}

	function verificar() {
		if (resultImc == null) {
			setErrorMessage('Campo obrigatório*')
			Vibration.vibrate()
		}
	}

	function validar() {
		if (weight && height) {
			calcularImc()
			setMessageImc('Este é o seu IMC:')
			setTextButton('Calcular novamente')
			setHeight(null)
			setWeight(null)
			setErrorMessage(null)
		} else {
			setMessageImc('Preencha a altura e o peso')
			setTextButton('Calcular')
			setResultImc(null)
			verificar()
		}
	}

	return (
		<View style={styles.formContext}>
			{ resultImc == null
				? <Pressable
					onPress={Keyboard.dismiss}
					style={styles.form}
				>
					<Text style={styles.formLabel}>Altura</Text>
					<TextInput
						style={styles.formInput}
						placeholder='Ex.: 1.75'
						keyboardType='numeric'
						value={height as unknown as string}
						onChangeText={(value) => setHeight(value.replace(/[^0-9.,]/g, '') as unknown as number)}
					/>
					<Text style={styles.errorMessage}>{errorMessage}</Text>

					<Text style={styles.formLabel}>Peso</Text>
					<TextInput
						style={styles.formInput}
						placeholder='Ex.: 58.50'
						keyboardType='numeric'
						value={weight as unknown as string}
						onChangeText={(value) => setWeight(value.replace(/[^0-9.,]/g, '') as unknown as number)}
					/>
					<Text style={styles.errorMessage}>{errorMessage}</Text>

					<TouchableOpacity
						style={styles.buttonCalcular}
						onPress={validar}
					>
						<Text style={styles.textButtonCalcular}>{textButton}</Text>
					</TouchableOpacity>
				</Pressable>
				: <View style={styles.exibhitionResult}>
					<ResultImc message={messageImc} result={resultImc as any as number} />
					<TouchableOpacity
						style={styles.buttonCalcular}
						onPress={validar}
					>
						<Text style={styles.textButtonCalcular}>{textButton}</Text>
					</TouchableOpacity>
				</View>
			}
			<FlatList
				style={styles.imcList}
				data={imcList}
				renderItem={({ item }) => (
					<Text style={styles.imcListItem}>
						<Text style={styles.imcListItemLabel}>
							Resultado IMC: 
						</Text>
						{item.imc}
					</Text>
				)}
			>

			</FlatList>
		</View>
	)
}

interface ImcData {
	id: number,
	imc: number
}
