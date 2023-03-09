import React from 'react'
import {
  View,
  ActivityIndicator, 
  Text,
} from 'react-native'

export default function Loading() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      marginBottom: 60,
    }}>
      <ActivityIndicator />
      <Text>Загрузка...</Text>
    </View>
  )
}
