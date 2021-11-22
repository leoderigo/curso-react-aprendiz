import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, Text, View, Platform, SafeAreaView } from 'react-native';

import CurrentPrice from './src/components/current-price';
import HistoryGraphic from './src/components/history-graphic';
import QuotationList from './src/components/quotations-list';
import QuotationsItem from './src/components/quotations-list/quotations-item';

function formatNumber(number: string|number): string {
  return number <= 9 ? `0${number}` : `${number}`
}

function getUrl(days: number) {
  const date = new Date()
  const endDate = `${date.getFullYear()}-${formatNumber(date.getMonth()+1)}-${formatNumber(date.getDate())}`
  date.setDate(date.getDate() -  days)
  const startDate = `${date.getFullYear()}-${formatNumber(date.getMonth()+1)}-${formatNumber(date.getDate())}`
  const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
  return url
}

async function getCoinList(url: string) {
  const response = await fetch(url)
  const responseJson: CoinDeskResponse = await response.json()
  const values = responseJson.bpi
  const data = Object.keys(values).map(key => ({
    date: key.split('-').reverse().join('/'),
    value: values[key]
  }))
  return data.reverse()
}

export default function App() {
  const [coinList, setCoinList] = useState<{ date: string, value: number }[]>([])
  const [days, setDays] = useState<number|null>(5)

  useEffect(() => {
    getCoinList(getUrl(days as number)).then(data => {
      setCoinList(data)
    })
  }, [days])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f50d41"
        barStyle="default"
      />
      <CurrentPrice/>
      <HistoryGraphic quotationsList={coinList} />
      <QuotationList setDayFn={setDays} quotationsList={coinList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});

interface CoinDeskResponse {
  bpi: {
    [key: string]: number
  }
}
