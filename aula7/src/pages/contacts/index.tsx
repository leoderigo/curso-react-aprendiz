import React from 'react'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Contacts() {
	const navigation = useNavigation()
	return (
		<View>
			<Text style={{ marginBottom: 20 }}>
				Contacts
			</Text>
			<Text
				style={{ marginVertical: 10 }}
				onPress={() => navigation.navigate('Information' as never, {
					name: 'Leonardo Aliberti Derigo',
					phone: '+55 (16) 9 9385-6329',
					email: 'leoderigo.sjb@gmail.com',
					area: 'TI'
				} as never)}
			>
				Leo Derigo
			</Text>
			<Text
				style={{ marginVertical: 10 }}
				onPress={() => navigation.navigate('Information' as never, {
					name: 'Solange de Paula',
					phone: '+55 (16) 9 9973-7024',
					email: 'solangedepaula216@gmail.com',
					area: 'TO'
				} as never)}
			>
				Meu Doce
			</Text>
		</View>
	)
}
